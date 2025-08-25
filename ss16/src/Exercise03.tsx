import React, { Component } from "react";

interface State {
  colors: string[];
}

export default class Exercise03 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      colors: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
        "link",
      ],
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {this.state.colors.map((color, index) => (
          <button
            key={index}
            className={`btn btn-${color}`}
            style={{ margin: "8px" }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    );
  }
}
