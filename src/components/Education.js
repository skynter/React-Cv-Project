import React, { Component } from "react";
import InputGroup from "./InputGroup";
import { Button } from "./Button";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InputGroup
          inputTitle="Institution Name"
          number={this.props.institutionNumber}
          handleChangeMethod2={this.props.onChange}
        />
        <InputGroup
          inputTitle="Location"
          number={this.props.locationNumber}
          handleChangeMethod2={this.props.onChange}
        />
        <InputGroup
          inputTitle="Degree "
          handleChangeMethod2={this.props.onChange}
          number={this.props.degreeNumber}
        />
        <InputGroup
          inputTitle="Subject "
          handleChangeMethod2={this.props.onChange}
          number={this.props.subjNumber}
        />
        <div className="flex gap-3 mt-3 w-full">
          <InputGroup
            inputTitle="From"
            number={this.props.dateFromNumber}
            handleChangeMethod2={this.props.onChange}
          />
          <InputGroup
            inputTitle="To"
            number={this.props.dateToNumber}
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
            myNumber={this.props.institutionNumber}
          />
        </div>
      </div>
    );
  }
}

export default Education;
