import React, { Component } from "react";

class PreviewEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flex gap-3 py-3">
          <p className="w-2/6 font-bold leading-7">
            {this.props.mySecondState.dateFrom.map((element) => {
              if (element.id == this.props.dateFromNumber) {
                return element.text;
              }
            })}
            {""} -{" "}
            {this.props.mySecondState.dateTo.map((element) => {
              if (element.id == this.props.dateToNumber) {
                return element.text;
              }
            })}{" "}
          </p>

          <div className="flex flex-col gap-2 w-4/6">
            <p className="font-bold">
              {this.props.mySecondState.institutionNames.map((element) => {
                {
                  if (element.id == this.props.institutionNumber)
                    return element.text;
                }
              })}
              {""},{" "}
              {this.props.mySecondState.locations.map((element) => {
                {
                  if (element.id == this.props.locationNumber)
                    return element.text;
                }
              })}
            </p>
            <p>
              {" "}
              Degree:{" "}
              {this.props.mySecondState.degrees.map((element) => {
                {
                  if (element.id == this.props.degreeNumber)
                    return element.text;
                }
              })}{" "}
            </p>
            <p>
              {" "}
              Subject:{" "}
              {this.props.mySecondState.subjects.map((element) => {
                {
                  if (element.id == this.props.subjNumber) return element.text;
                }
              })}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewEducation;
