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
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Contact me on LinkedIn @kashish-singh111</h3>
        <a href="/contact/profile">Click here to go to Profile route</a>
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
