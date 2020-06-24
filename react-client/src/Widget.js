
const React = require("react");
const { Component } = React;
const Cpu = require("./Cpu");
const Mem = require("./Mem");
const Info = require("./Info");
class Widget extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Widget !!!</h1>
        <Cpu />
        <Mem />
        <Info />
      </div>
    );
  }
}

module.exports = Widget;
