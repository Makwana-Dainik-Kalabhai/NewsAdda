import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {urlToImage, title, desciption, url} = this.props;

    return (
      <>
        <div className="card" style={{width: "90%",height: "27rem"}}>
          <img src={urlToImage} style={{height: "12rem"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{(title.length>45)?title.slice(0,45)+"...":title}</h5>
            <p className="card-text">{(desciption.length>150)?desciption.slice(0,150)+"...":desciption}</p>
            <a href={url} className="btn btn-dark position-absolute" style={{bottom: "15px"}}>Read More</a>
          </div>
        </div>
      </>
    );
  }
}
