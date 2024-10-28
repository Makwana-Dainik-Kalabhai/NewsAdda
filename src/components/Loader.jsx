import React, { Component } from "react";
import Spinner from "./spinner.gif";

export default class Loader extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img style={{ width: "70px", filter: "contrast(150%)"}} src={Spinner} alt="img not found" />
      </div>
    );
  }
}
