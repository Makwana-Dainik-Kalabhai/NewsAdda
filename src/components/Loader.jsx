import React, { Component } from "react";
import Spinner from "./spinner.gif";

export default class Loader extends Component {
  render() {
    return (
      <div className="text-center mt-2 mb-5">
        <img style={{ width: "60px", filter: "contrast(150%)"}} src={Spinner} alt="img not found" />
      </div>
    );
  }
}
