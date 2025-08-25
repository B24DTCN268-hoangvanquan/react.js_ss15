import { Component } from "react";

interface State {
  isLoggedIn: boolean;
}

export default class LoginStatus extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div
        style={{
          border: "3px solid black",
          borderRadius: "12px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#E6F7FF",
          width: "350px",
          margin: "20px auto",
        }}
      >
        <h2>
          {isLoggedIn
            ? " Xin chào, User!"
            : " Vui lòng đăng nhập để tiếp tục."}
        </h2>
        <button
          onClick={this.toggleLogin}
          style={{
            backgroundColor: "#1890FF",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
