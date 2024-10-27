import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Spinner";

export default class News extends Component {
  state = {
    articles: [],
    page: 1,
    totalArt: 0,
    loader: false
  };
  
  async componentDidMount() {
    try {
      this.setState({ loader: true });
      const api = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=63d9e062e0e64107a6e71ff0f6456a75&page=${this.state.page}&pageSize=9`
      );
      const data = await api.json();

      this.setState({ articles: data.articles, totalArt: data.totalResults, loader: false });
    } catch (err) {
      console.log(err);
    }
  }

  prevBtn = async () => {
    try {
      this.setState({ loader: true });
      const api = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=63d9e062e0e64107a6e71ff0f6456a75&page=${
          this.state.page - 1
        }&pageSize=9`
      );
      const data = await api.json();
      this.setState({ articles: data.articles, loader: false });
    } catch (err) {
      console.log(err);
    }

    this.setState({ page: this.state.page - 1 });
  };

  nextBtn = async () => {
    try {
      this.setState({ loader: true });
      const api = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=63d9e062e0e64107a6e71ff0f6456a75&page=${
          this.state.page + 1
        }&pageSize=9`
      );
      const data = await api.json();
      this.setState({ articles: data.articles, loader: false });
    } catch (err) {
      console.log(err);
    }

    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <>
        <div className="container my-4">
          <h1>NewsAdda - Get Updated with latest News</h1>
          {this.state.loader && <Loader />}
          <div className="row my-3">
            {!this.state.loader && this.state.articles.map((e) => {
              return (
                e.urlToImage && (
                  <div className="col-md-4 my-4" key={e.publishedAt}>
                    <NewsItem
                      urlToImage={e.urlToImage}
                      title={e.title}
                      desciption={e.description}
                      url={e.url}
                    />
                  </div>
                )
              );
            })}
          </div>
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark float-start my-4"
            onClick={this.prevBtn}
          >
            &larr; Prev
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalArt / 9)}
            className="btn btn-dark float-end my-4"
            onClick={this.nextBtn}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
