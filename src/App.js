import React, { Component } from "react";
import "./App.css";

import New from "./components/new/new";
import List from "./components/list/list";

class App extends Component {
  render() {
    return (
      <div className="container">
        <New />
        <List />
      </div>
    );
  }
}

export default App;
