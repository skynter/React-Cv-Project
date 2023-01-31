import React, { Component } from "react";

class PreviewExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flex gap-3 py-3">
          <p className="w-2/6 font-bold leading-7">
            {this.props.mySecondState.exDatesFrom.map((element) => {
              if (element.id == this.props.exDateFromNumber) {
                return element.text;
              }
            })}
            {""} -{" "}
            {this.props.mySecondState.exDatesTo.map((element) => {
              if (element.id == this.props.exDateToNumber) {
                return element.text;
              }
            })}{" "}
          </p>

          <div className="flex flex-col gap-2 w-4/6">
            <p className="font-bold">
              {this.props.mySecondState.positionNames.map((element) => {
                {
                  if (element.id == this.props.positionNumber)
                    return element.text;
                }
              })}
            </p>
            <p>
              {this.props.mySecondState.companies.map((element) => {
                {
                  if (element.id == this.props.companyNumber)
                    return element.text;
                }
              })}
              ,{""}{" "}
              {this.props.mySecondState.exLocations.map((element) => {
                {
                  if (element.id == this.props.exLocationNumber)
                    return element.text;
                }
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewExperience;
