import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
const socket = require("./utils/socket");
const Widget = require("./Widget");
class App extends Component {
  constructor() {
    super();
    this.state = {
      performanceData: {},
    };
  }

  componentDidMount() {
    socket.on("data", (data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="App">
        <Widget />
      </div>
    );
  }
}

export default App;
