import React, { Component } from "react";
import "./index.css";

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isStart, isFinish } = this.props;
    const extraClass = isFinish ? "node-finish" : isStart ? "node-start" : "";
    return <div className={`node ${extraClass}`}></div>;
  }
}

export const DEFAULT_NODE = {
  row: 0,
  column: 0,
};
