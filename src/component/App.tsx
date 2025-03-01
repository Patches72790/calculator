import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export interface AppState {
  total?: string|null;
  next?: string|null;
  operation?: string|null;
}

export default class App extends React.Component<{}, AppState> {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName: string) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
