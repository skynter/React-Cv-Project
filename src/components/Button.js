import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={`border-2 border-gray-600 rounded-lg ${this.props.bgColor} ${this.props.textColor} ${this.props.bgHover} ${this.props.myWidth} ${this.props.myDisplay} ${this.props.mySize} font-bold p-3 flex justify-center items-center   shadow-inner`}
        onClick={this.props.addRemoveChild}
        id={this.props.myNumber}
      >
        {this.props.title}
      </button>
    );
  }
}

Button.defaultProps = {
  title: "",
  bgColor: "bg-sky-300",
  textColor: "text-black",
  bgHover: "hover:bg-red-300",
  myWidth: "w-28",
};

export { Button };
