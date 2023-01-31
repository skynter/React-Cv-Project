import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CVWorkingMode from "./components/CVWorkingMode";
import IconReactquery from "./components/React-icon";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      jobTitle: "",
      phoneNumber: "",
      email: "",
      address: "",
      description: "",
    };
  }

  handleChange = (e) => {
    for (let key in this.state) {
      if (key == e.target.dataset.hook) {
        this.setState({ [key]: e.target.value });
      }
    }
  };

  render() {
    return (
      <div className="h-screen">
        <Navbar />
        <CVWorkingMode
          handleChangeMethod={this.handleChange}
          myStates={this.state}
        />

        <div className="flex justify-center items-center bg-slate-900 text-sky-300">
          <p className="text-xl p-3"> Copyright © 2023 skynter</p>
          <IconReactquery />
        </div>
      </div>
    );
  }
}

export default App;
