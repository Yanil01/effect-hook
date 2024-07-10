import React, { Component } from "react";

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // Lifecycle method: componentDidMount
  componentDidMount() {
    // Start an interval that calls tick() every 1000ms (1 second)
    this.interval = setInterval(this.tick, 1000);
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    // Clear the interval when the component is about to unmount
    clearInterval(this.interval);
  }

  // Method to update state: tick
  tick = () => {
    // Update count in state
    this.setState({
      count: this.state.count + 1,
    });
  };

  // Render method to display the count
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default IntervalClassCounter;
