import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

interface ButtonProps {
  name: string;
  orange?: boolean;
  wide?: boolean;
  clickHandler: (name: string) => void;
}

export default class Button extends React.Component<ButtonProps> {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
