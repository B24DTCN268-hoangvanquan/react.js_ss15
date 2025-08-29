import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}