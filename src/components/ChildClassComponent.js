import React, { Component } from "react";
class ChildClassComponent extends Component {
  constructor(props) {
    // won't be able to access this.props here
    super(props);
    // can access this.props after super(props);
    console.log(this.props.numb, "-child constructor called");
    this.state = {
      child: this.props.numb,
      name: "Kashish",
    };
  }
  render() {
    console.log(this.props.numb, "-child render called");
    return (
      <>
        <button
          onClick={() => {
            let newVal = Number(this.state.child) + 1;
            this.setState({ child: newVal });
          }}
        >
          {this.state.child}
        </button>
        <p>{this.state.name}</p>
      </>
    );
  }
  componentDidMount() {
    console.log(this.state.child, " mounted");
    this.timer = setInterval(() => console.log("Welcome to Contact Route"), 1000);
  }
  componentWillUpdate() {
    console.log(this.props.numb, "-child componentWillUpdate called");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
}
export default ChildClassComponent;
