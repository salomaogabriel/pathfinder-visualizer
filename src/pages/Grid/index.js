import React, { Component } from "react";
import "./index.css";
import Node from "../Node/index";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    const nodes = [];
    let numberOfRows = 15;
    let numberOfColumns = 50;
    let startRow = 10;
    let finishRow = 10;
    let startColumn = 5;
    let finishColumn = 45;
    for (let row = 0; row < numberOfRows; row++) {
      const currentRow = [];
      for (let column = 0; column < numberOfColumns; column++) {
        const currentNode = {
          column,
          row,
          isStart: row == startRow && column == startColumn,
          isFinish: row == finishRow && column == finishColumn,
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    this.setState({ nodes });
  }

  render() {
    const { nodes } = this.state;
    return (
      <div className="grid">
        {nodes.map((row, rowIdKey) => {
          return (
            <div className="row" key={rowIdKey}>
              {row.map((node, nodeIdKey) => {
                return (
                  <Node
                    key={nodeIdKey}
                    isStart={node.isStart}
                    isFinish={node.isFinish}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
