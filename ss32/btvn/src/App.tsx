import React from "react";
import { useSelector } from "react-redux";
import ThemeSwitcher from "./component/ThemeSwitcher";
import Profile from "./component/Profile";
import ListUser from "./component/ListUser";
import Counter from "./component/Counter";
import RandomNumber from "./component/RandomNumber";
import ChangeState from "./component/ChangeState";

function App() {
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  const appStyle = {
    backgroundColor: isDarkMode ? "#111" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <>
      {/* <div style={appStyle}>
        <ThemeSwitcher />
        <hr />
      </div> */}
      {/* <Profile /> */}
      {/* <ListUser /> */}
      <Counter />
      {/* <RandomNumber /> */}
      {/* <ChangeState /> */}
    </>
  );
}

export default App;