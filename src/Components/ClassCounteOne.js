import React, { Component } from "react";

class ClassCounteOne extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      count: 0,
      name: "",
    };
  }

  // Lifecycle method: runs after the component is mounted
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`; // Set initial document title
  }

  // Lifecycle method: runs after a component update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title...");
      document.title = `Clicked ${this.state.count} times`;
    }
    // Update document title after state change
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })} // Increment count on button click
          style={{ cursor: "pointer" }}
        >
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounteOne;
