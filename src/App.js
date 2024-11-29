import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import TopLoader from "react-top-loading-bar";

class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (prog) => {
    this.setState({ progress: prog });
  };
  render() {
    return (
      <Router basename="/NewsAdda">
        <NavBar />
        <TopLoader
          color="red"
          style={{
            position: "relative",
            zIndex: "5",
            filter: "contrast(150%)",
            height: "4px",
          }}
          progress={this.state.progress}
        />

        <Routes>
          {/* //* Define unique keys to refresh page & modify data in fetch api */}
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                category="general"
                setProgress={this.setProgress}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                category="business"
                setProgress={this.setProgress}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                category="entertainment"
                setProgress={this.setProgress}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                category="health"
                setProgress={this.setProgress}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                category="science"
                setProgress={this.setProgress}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                category="sports"
                setProgress={this.setProgress}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                category="technology"
                setProgress={this.setProgress}
              />
            }
          ></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
