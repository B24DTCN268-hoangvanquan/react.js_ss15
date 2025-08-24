import React, { Component } from "react";

interface State {
  email: string;
}

export default class Exercise01 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email: this.state.email });
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Email</p>
          <input type="text" value={this.state.email} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}