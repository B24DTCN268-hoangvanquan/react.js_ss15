import React, { Component } from "react";

interface State {
  name: string;
  color: string;  
}
export default class Exercise02 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      color: "",
    };
  }

  submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ color: this.state.name });
  };


  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitForm}>
          <h2>Color: {this.state.color}</h2>
          <input
            type="color"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}