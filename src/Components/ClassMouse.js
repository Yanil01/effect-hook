import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  // Method to update x and y coordinates based on mousemove event
  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    // Adding event listener when the component mounts
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    // Removing event listener when the component unmounts to prevent memory leaks
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
