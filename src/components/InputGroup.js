import React, { Component } from "react";

class InputGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-2 my-4 w-full">
        <label className="text-lg" htmlFor={this.props.inputTitle}>
          {this.props.inputTitle} :
        </label>
        <input
          type="text"
          number={this.props.number}
          id={this.props.inputTitle}
          data-hook={this.props.myHook}
          placeholder={this.props.inputTitle}
          onChange={this.props.handleChangeMethod2}
          className={`border-2 border-slate-900 h-10 rounded-md p-2 hover:shadow-lg hover:shadow-slate-300 ${this.props.myHeight}`}
        />
      </div>
    );
  }
}

InputGroup.defaultProps = {
  myHeight: "h-full",
};

export default InputGroup;
