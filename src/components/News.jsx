import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiKey: process.env.NEWS_API_KEY,
      articles: [],
      page: 1,
      totalResults: 0,
      loader: true
    };
    document.title = `${this.capitalize(this.props.category)} - NewsAdda`;
  }

  capitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
  }

  fetchApi = async () => {
    this.props.setProgress(10);
    const api = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=63d9e062e0e64107a6e71ff0f6456a75&page=${this.state.page}&pageSize=10`);
    const data = await api.json();

    this.props.setProgress(100);
    this.setState({ articles: data.articles, totalResults: data.totalResults });
  }

  async componentDidMount() {
    this.fetchApi();
  }

  fetchMoreData = async () => {
    let pageSize = ((this.state.totalResults - this.state.articles.length) >= 10) ? 10 : ((this.state.totalResults - this.state.articles.length) + 1);

    const api = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=63d9e062e0e64107a6e71ff0f6456a75&page=${this.state.page + 1}&pageSize=${pageSize}`
    );
    this.setState({ page: this.state.page + 1 });
    const data = await api.json();
    this.setState({ articles: this.state.articles.concat(data.articles), totalResults: data.totalResults });
  }

  render() {
    return (
      <div>
        <h1 className="text-center mt-5 mb-2">NewsAdda - Top Headlines with {this.capitalize(this.props.category)}</h1>
        {this.state.articles && <InfiniteScroll
          dataLength={this.state.articles.length}
          hasMore={(this.state.totalResults - this.state.articles.length) !== 0}
          next={this.fetchMoreData}
          loader={<Loader />}
        >
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((e, i) => {
                return (
                  e.urlToImage && (
                    <div className="col-md-4 my-4" key={i}>
                      <NewsItem
                        urlToImage={e.urlToImage !== null ? e.urlToImage : ""}
                        title={e.title}
                        desciption={e.description}
                        url={e.url}
                        publishedAt={e.publishedAt}
                        author={e.author}
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </InfiniteScroll>}
      </div>
    );
  }
}
