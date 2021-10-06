import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

interface DisplayProps {
  value: string;
}


export default class Display extends React.Component<DisplayProps> {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
