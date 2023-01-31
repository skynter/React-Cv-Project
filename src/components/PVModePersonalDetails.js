import React, { Component } from "react";
import avatar from "./avatar.jpg";

class PVModePersonalDetails extends Component {
  render() {
    return (
      <div className="flex flex-col space-y-4 bg-gray-100 w-2/6 shadow-lg h-full]">
        <div className="m-5">
          <img src={avatar} className="rounded-lg" />
        </div>

        <div className="flex flex-col space-y-3 m-5">
          <h1 className="pvHeader"> Personal Details</h1>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <p className="font-bold">Address </p>{" "}
                  <p className="break-all">{this.props.myStates2.address}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <p className="font-bold">Phone Number</p>{" "}
                  <p>{this.props.myStates2.phoneNumber}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <p className="font-bold">Email </p>{" "}
                  <p className="break-all">{this.props.myStates2.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PVModePersonalDetails;
