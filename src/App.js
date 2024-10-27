import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

class App extends Component {
  state = {
    country: "",
  };

  render() {
    return (
      <Router>
        <NavBar />

        <Routes>
          //* Define unique keys to refresh page & modify data in fetch api
          <Route exact key="general" path="/" element={<News category="general" />}></Route>
          <Route exact key="business" path="/business" element={<News category="business" />}></Route>
          <Route exact key="entertainment" path="/entertainment" element={<News category="entertainment" />}></Route>
          <Route exact key="health" path="/health" element={<News category="health" />}></Route>
          <Route exact key="science" path="/science" element={<News category="science" />}></Route>
          <Route exact key="sports" path="/sports" element={<News category="sports" />}></Route>
          <Route exact key="technology" path="/technology" element={<News category="technology" />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
