import { Component } from "react";

interface State {
  count: number;
}

export default class Exercise04 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickMe = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Số lần click: {this.state.count}</h2>
        <button
          onClick={this.clickMe}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: "#1890FF",
            color: "white",
            border: "none",
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
