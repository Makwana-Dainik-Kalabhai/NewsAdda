import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { urlToImage, title, desciption, url, publishedAt,author } = this.props;

    return (
      <>
        <div className="card" style={{ width: "90%", height: "28.5rem" }}>
          <img src={urlToImage!==null?urlToImage:""} style={{ height: "12rem" }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title!==null?(title.length > 45 ? title.slice(0, 45) + "..." : title):""}
            </h5>
            <p className="card-text mb-2">
              {desciption!==null?(desciption.length > 150
                ? desciption.slice(0, 150) + "..."
                : desciption):""}
            </p>
            <p className="card-text mt-0"><small className="text-body-dark"><b>{(author!==null)?`- ${author}`:""}</b></small></p>
            <small className="text-body-secondary" style={{ position: "absolute", right: "15px", bottom: "15px" }}>{new Date(publishedAt).toDateString()}</small>
            <a
              href={url}
              className="btn btn-dark position-absolute py-1"
              style={{ bottom: "15px" }}
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
