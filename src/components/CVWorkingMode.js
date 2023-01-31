import React, { Component } from "react";
import InputGroup from "./InputGroup";
import Education from "./Education";
import Experience from "./Experience";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";
import PVModePersonalDetails from "./PVModePersonalDetails";
import { Button } from "./Button";

let i = 1;
let j = 100;
let k = 200;
let l = 300;
let m = 400;
let n = 500;

let exI = 1;
let exJ = 100;
let exK = 200;
let exL = 300;
let exM = 400;

class CVWorkingMode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myEducationArray: [
        {
          instId: 1,
          degId: 100,
          subjId: 200,
          locaId: 300,
          dateFromId: 400,
          dateToId: 500,
        },
      ],
      myExperienceArray: [
        {
          positionId: 1,
          companyId: 100,
          exLocationId: 200,
          exDateFromId: 300,
          exDateToId: 400,
        },
      ],

      institutionNames: [{ id: 1, text: "" }],
      degrees: [{ id: 100, text: "" }],
      subjects: [{ id: 200, text: "" }],
      locations: [{ id: 300, text: "" }],
      dateFrom: [{ id: 400, text: "" }],
      dateTo: [{ id: 500, text: "" }],

      positionNames: [{ id: 1, text: "" }],
      companies: [{ id: 100, text: "" }],
      exLocations: [{ id: 200, text: "" }],
      exDatesFrom: [{ id: 300, text: "" }],
      exDatesTo: [{ id: 400, text: "" }],

      isEducationEmpty: false,
      isExperienceEmpty: false,
    };

    this.addEducationChild = this.addEducationChild.bind(this);
    this.addExperienceChild = this.addExperienceChild.bind(this);
  }

  addEducationChild = () => {
    if (this.state.isEducationEmpty == true) {
      this.setState({
        isEducationEmpty: false,
      });
    }

    i += 1;
    j += 1;
    k += 1;
    l += 1;
    m += 1;
    n += 1;

    this.setState({
      myEducationArray: [
        ...this.state.myEducationArray,
        {
          instId: i,
          degId: j,
          subjId: k,
          locaId: l,
          dateFromId: m,
          dateToId: n,
        },
      ],
      institutionNames: [...this.state.institutionNames, { id: i, text: "" }],
      degrees: [...this.state.degrees, { id: j, text: "" }],
      subjects: [...this.state.subjects, { id: k, text: "" }],
      locations: [...this.state.locations, { id: l, text: "" }],
      dateFrom: [...this.state.dateFrom, { id: m, text: "" }],
      dateTo: [...this.state.dateTo, { id: n, text: "" }],
    });
  };

  addExperienceChild = () => {
    if (this.state.isExperienceEmpty == true) {
      this.setState({
        isExperienceEmpty: false,
      });
    }

    exI += 1;
    exJ += 1;
    exK += 1;
    exL += 1;
    exM += 1;

    this.setState({
      myExperienceArray: [
        ...this.state.myExperienceArray,
        {
          positionId: exI,
          companyId: exJ,
          exLocationId: exK,
          exDateFromId: exL,
          exDateToId: exM,
        },
      ],
      positionNames: [...this.state.positionNames, { id: exI, text: "" }],
      companies: [...this.state.companies, { id: exJ, text: "" }],
      exLocations: [...this.state.exLocations, { id: exK, text: "" }],
      exDatesFrom: [...this.state.exDatesFrom, { id: exL, text: "" }],
      exDatesTo: [...this.state.exDatesTo, { id: exM, text: "" }],
    });
  };

  removeEducationChild = (e) => {
    this.setState({
      myEducationArray: this.state.myEducationArray.filter(
        (el) => el.instId !== +e.target.id
      ),
    });

    if (this.state.myEducationArray.length == 1) {
      this.setState({
        isEducationEmpty: true,
      });
    }
  };

  removeExperienceChild = (e) => {
    this.setState({
      myExperienceArray: this.state.myExperienceArray.filter(
        (el) => el.positionId !== +e.target.id
      ),
    });

    if (this.state.myExperienceArray.length == 1) {
      this.setState({
        isExperienceEmpty: true,
      });
    }
  };

  handleScaleChangeEducation = (e) => {
    let inputNumber = e.target.getAttribute("number");
    for (let key in this.state) {
      if (
        key == "institutionNames" ||
        key == "degrees" ||
        key == "subjects" ||
        key == "locations" ||
        key == "dateFrom" ||
        key == "dateTo"
      ) {
        this.setState({
          [key]: this.state[key].map((element) => {
            if (element.id == inputNumber) {
              return {
                id: element.id,
                text: e.target.value,
              };
            } else {
              return {
                id: element.id,
                text: element.text,
              };
            }
          }),
        });
      }
    }
  };

  handleScaleChangeExperience = (e) => {
    let inputNumber = e.target.getAttribute("number");
    for (let key in this.state) {
      if (
        key == "positionNames" ||
        key == "companies" ||
        key == "exLocations" ||
        key == "exDatesFrom" ||
        key == "exDatesTo"
      ) {
        this.setState({
          [key]: this.state[key].map((element) => {
            if (element.id == inputNumber) {
              return {
                id: element.id,
                text: e.target.value,
              };
            } else {
              return {
                id: element.id,
                text: element.text,
              };
            }
          }),
        });
      }
    }
  };

  render() {
    return (
      <div className="flex flex-col  bg-myGray lg:flex-row">
        {" "}
        {/* Working Mode  */}
        <div className="flex justify-center w-full h-full">
          <div className="border-2 border-gray-600 w-3/4 h-full my-12 bg-white">
            {/* Personal Info */}

            <div className="m-6">
              <h1 className="text-3xl font-bold underline underline-offset-4">
                {" "}
                Personal Information{" "}
              </h1>
              <div className="flex gap-3 mt-3 w-full">
                <InputGroup
                  handleChangeMethod2={this.props.handleChangeMethod}
                  inputTitle="First Name"
                  myHook="firstName"
                />
                <InputGroup
                  handleChangeMethod2={this.props.handleChangeMethod}
                  inputTitle="Last Name"
                  myHook="lastName"
                />
              </div>
              <InputGroup
                handleChangeMethod2={this.props.handleChangeMethod}
                inputTitle="Job Title "
                myHook="jobTitle"
              />
              <InputGroup
                handleChangeMethod2={this.props.handleChangeMethod}
                inputTitle="Phone Number"
                myHook="phoneNumber"
              />
              <InputGroup
                handleChangeMethod2={this.props.handleChangeMethod}
                inputTitle="Email"
                myHook="email"
              />
              <InputGroup
                handleChangeMethod2={this.props.handleChangeMethod}
                inputTitle="Address "
                myHook="address"
              />
              <InputGroup
                handleChangeMethod2={this.props.handleChangeMethod}
                inputTitle="Description "
                myHook="description"
                myHeight="h-20 break-words"
              />
            </div>
            {/* Education */}
            <div className="m-6" id="myEd">
              <h1 className="text-3xl font-bold underline underline-offset-4">
                {" "}
                Education{" "}
              </h1>

              {this.state.isEducationEmpty ? <br /> : ""}
              <Button
                title="Add"
                addRemoveChild={this.addEducationChild}
                myWidth="w-full"
                myDisplay={this.state.isEducationEmpty ? "" : "hidden"}
                mySize="text-2xl"
                bgColor="bg-slate-900"
                textColor="text-white"
              />

              <div className="flex flex-col">
                {this.state.myEducationArray.map((education) => (
                  <Education
                    key={education.instId}
                    institutionNumber={education.instId}
                    degreeNumber={education.degId}
                    subjNumber={education.subjId}
                    locationNumber={education.locaId}
                    dateFromNumber={education.dateFromId}
                    dateToNumber={education.dateToId}
                    addChild={this.addEducationChild}
                    removeChild={this.removeEducationChild}
                    onChange={this.handleScaleChangeEducation}
                  />
                ))}
              </div>
            </div>
            {/* Experience */}
            <div className="m-6">
              <h1 className="text-3xl font-bold underline underline-offset-4">
                {" "}
                Experience{" "}
              </h1>
              {this.state.isExperienceEmpty ? <br /> : ""}
              <Button
                title="Add"
                addRemoveChild={this.addExperienceChild}
                myWidth="w-full"
                myDisplay={this.state.isExperienceEmpty ? "" : "hidden"}
                mySize="text-2xl"
                bgColor="bg-slate-900"
                textColor="text-white"
              />
              <div className="flex flex-col">
                {" "}
                {this.state.myExperienceArray.map((experience) => (
                  <Experience
                    key={experience.positionId}
                    positionNumber={experience.positionId}
                    companyNumber={experience.companyId}
                    exLocationNumber={experience.exLocationId}
                    exDateFromNumber={experience.exDateFromId}
                    exDateToNumber={experience.exDateToId}
                    addChild={this.addExperienceChild}
                    removeChild={this.removeExperienceChild}
                    onChange={this.handleScaleChangeExperience}
                  />
                ))}
              </div>
            </div>
          </div>{" "}
        </div>
        {/*  Preview Mode */}
        <div className="flex justify-center w-full">
          <div className="border-2 border-gray-600 w-4/5 my-12 bg-white">
            {/* This is the Header of the CVPreviewMode */}
            <div className="bg-slate-900 h-32 flex flex-col justify-center gap-3">
              <p className="text-white text-4xl px-6 font-bold font-roboto">
                {" "}
                {this.props.myStates.firstName} {""}
                {this.props.myStates.lastName}
              </p>
              <p className="text-white text-2xl px-6 font-roboto">
                {" "}
                {this.props.myStates.jobTitle}
              </p>
            </div>
            {/* Body of the CVPreviewMode */}
            <div className="flex h-[calc(100%-128px)]">
              <div className="flex flex-col space-y-8 mx-5 mt-5 bg-white w-4/6">
                {/* Description */}
                <div>
                  <h1 className="pvHeader"> Description </h1>
                  <p className="text-black text-lg py-3 italic break-words">
                    {this.props.myStates.description}
                  </p>
                </div>

                {/* Education */}

                <div>
                  <h1 className="pvHeader"> Education </h1>
                  {this.state.myEducationArray.map((pvEducation) => (
                    <PreviewEducation
                      key={pvEducation.instId}
                      institutionNumber={pvEducation.instId}
                      degreeNumber={pvEducation.degId}
                      subjNumber={pvEducation.subjId}
                      locationNumber={pvEducation.locaId}
                      dateFromNumber={pvEducation.dateFromId}
                      dateToNumber={pvEducation.dateToId}
                      mySecondState={this.state}
                    />
                  ))}
                </div>

                {/* Experience */}
                <div>
                  <h1 className="pvHeader"> Experience </h1>
                  {this.state.myExperienceArray.map((pvExperience) => (
                    <PreviewExperience
                      key={pvExperience.positionId}
                      positionNumber={pvExperience.positionId}
                      companyNumber={pvExperience.companyId}
                      exLocationNumber={pvExperience.exLocationId}
                      exDateFromNumber={pvExperience.exDateFromId}
                      exDateToNumber={pvExperience.exDateToId}
                      mySecondState={this.state}
                    />
                  ))}
                </div>
              </div>
              <PVModePersonalDetails myStates2={this.props.myStates} />
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default CVWorkingMode;
