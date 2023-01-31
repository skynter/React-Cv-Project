import React, { Component } from "react";
import InputGroup from "./InputGroup";
import { Button } from "./Button";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <InputGroup
          inputTitle="Position "
          number={this.props.positionNumber}
          handleChangeMethod2={this.props.onChange}
        />
        <InputGroup
          inputTitle="Company "
          number={this.props.companyNumber}
          handleChangeMethod2={this.props.onChange}
        />
        <InputGroup
          inputTitle="Location "
          number={this.props.exLocationNumber}
          handleChangeMethod2={this.props.onChange}
        />

        <div className="flex gap-3 mt-3 w-full">
          <InputGroup
            inputTitle=" From"
            number={this.props.exDateFromNumber}
            handleChangeMethod2={this.props.onChange}
          />
          <InputGroup
            inputTitle=" To"
            number={this.props.exDateToNumber}
            handleChangeMethod2={this.props.onChange}
          />
        </div>
        <div className="flex mt-3 justify-end gap-4">
          <Button title="Add" addRemoveChild={this.props.addChild} />
          <Button
            title="Delete"
            bgColor="bg-red-300"
            textColor="text-white"
            bgHover="hover:bg-sky-300"
            addRemoveChild={this.props.removeChild}
            myNumber={this.props.positionNumber}
          />
        </div>
      </div>
    );
  }
}
