import React, { Component} from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiKey: process.env.myApiKey,
      articles: [],
      page: 1,
      totalResults: 0
    };
    if (this.state.articles.length < this.state.totalResults) {
      window.addEventListener("scroll", this.handleScroll);
    }
    document.title = `${this.capitalize(this.props.category)} - NewsAdda`;
  }

  capitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
  }

  fetchApi = async () => {
    this.props.setProgress(10);
    const api = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page}&pageSize=9`
    );
    const data = await api.json();
    this.props.setProgress(100);
    this.setState({ articles: data.articles, totalResults: data.totalResults});
  }

  async componentDidMount() {
    this.fetchApi();
  }

  handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      this.setState({ page: this.state.page + 1});
      const api = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page + 1}&pageSize=9`
      );
      const data = await api.json();
      this.setState({ articles: this.state.articles.concat(data.articles), totalResults: data.totalResults });
    }
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <h1>NewsAdda - Top Headlines with {this.capitalize(this.props.category)}</h1>
          <div className="row my-3">
            {this.state.articles && this.state.articles.map((e) => {
              return (
                e.urlToImage && (
                  <div className="col-md-4 my-4" key={e.publishedAt}>
                    <NewsItem
                      urlToImage={e.urlToImage}
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
      </>
    );
  }
}
