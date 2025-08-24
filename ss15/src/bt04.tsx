import React, { Component } from "react";

interface State {
  progress: string;
  submitted: boolean;
}

export default class Exercise04 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      progress: "0",
      submitted: false,
    };
  }

  submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      progress: event.target.value,
      submitted: false,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitForm}>
          <h2>Tiến độ hoàn thành: {this.state.submitted ? `${this.state.progress}%` : ""}</h2>
          <input type="range" name="progress" value={this.state.progress} onChange={this.handleInput} />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}