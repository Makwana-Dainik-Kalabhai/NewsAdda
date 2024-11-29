import React, { Component } from "react";
import {Link} from "react-router-dom";
import Img from "./logo.png";

export default class NavBar extends Component {
  state = {
    navLink: "home"
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <img
              style={{ width: "80px", margin: "0 1rem", borderRadius: "10px" }}
              src={Img}
              alt="img not found"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${this.state.navLink==="home"?"active":""}`} aria-current="page" to="/NewsAdda/" onClick={()=>{this.setState({navLink:"home"})}}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.state.navLink==="business"?"active":""}`} aria-current="page" to="/business" onClick={()=>{this.setState({navLink:"business"})}}>
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.state.navLink==="entertainment"?"active":""}`} aria-current="page" to="/entertainment" onClick={()=>{this.setState({navLink:"entertainment"})}}>
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.state.navLink==="health"?"active":""}`} aria-current="page" to="/health" onClick={()=>{this.setState({navLink:"health"})}}>
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.state.navLink==="science"?"active":""}`} aria-current="page" to="/science" onClick={()=>{this.setState({navLink:"science"})}}>
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.state.navLink==="sports"?"active":""}`} aria-current="page" to="/sports" onClick={()=>{this.setState({navLink:"sports"})}}>
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.state.navLink==="technology"?"active":""}`} aria-current="page" to="/technology" onClick={()=>{this.setState({navLink:"technology"})}}>
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
