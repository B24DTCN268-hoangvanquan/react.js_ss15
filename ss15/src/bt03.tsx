import React, { Component } from "react";

interface State {
  date: string;
  submitted: boolean;
}

export default class DateForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: "",
      submitted: false,
    };
  }

  submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      date: event.target.value,
      submitted: false,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitForm}>
          <h2>Ngày sinh: {this.state.submitted ? this.state.date : ""}</h2>
          <input type="date" name="date" value={this.state.date} onChange={this.handleInput} />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}