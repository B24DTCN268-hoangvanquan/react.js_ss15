import React, { Component } from 'react';

interface State {
  isDark: boolean;
}

export default class Exercise05 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  toggleDark = () => {
    this.setState((prevState) => ({
      isDark: !prevState.isDark,
    }));
  };

  render() {
    const { isDark } = this.state;

    return (
      <body
        style={{ textAlign: 'center' }}
        className={isDark ? ' bg-dark text-white' : ' '}
      >
        <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={this.toggleDark}>
          Toggle Mode
        </button>
      </body>
    );
  }
}