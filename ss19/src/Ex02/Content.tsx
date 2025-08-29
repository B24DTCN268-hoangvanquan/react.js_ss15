import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <p>
      Theme hiện tại là: <strong>{theme.toUpperCase()}</strong>
    </p>
  );
}