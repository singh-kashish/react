import { Outlet } from "react-router-dom";
import ChildClassComponent from "./ChildClassComponent";
import React from "react";
class Contact extends React.Component {
  constructor(props) {
    console.log("Parent - Contact constructor");
    super(props);
  }
  componentDidMount() {
    console.log("parent componentDidMount called");
  }

  render() {
    console.log("Render contact called");
    return (
      <div
        className="flex flex-col items-center justify-center h-svh"
      >
        <h3 className="font-semibold">Contact me on LinkedIn @kashish-singh111</h3>
        <a href="/contact/profile" className="text-blue-500">Click here to go to Profile route</a>
        <Outlet />
        <ChildClassComponent numb="2" />
      </div>
    );
  }
  componentWillUpdate() {
    console.log("parent componentWillUpdate called");
  }
}
export default Contact;
