import React, { Component } from "react";
import IconReactquery from "./React-icon";
import { Button } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <div className="flex justify-center items-center p-8 bg-slate-900 h-36 border-b-4 shadow-md">
        <div className="flex items-center gap-4 mx-auto">
          {" "}
          <IconReactquery className="text-4xl text-sky-300 hover:text-red-400" />
          <h1 className="text-5xl text-blue-400 font-bold font-quicksand">
            {" "}
            React - CV - Project
          </h1>{" "}
        </div>
        <Button
          title={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          }
        />
      </div>
    );
  }
}

export default Navbar;
