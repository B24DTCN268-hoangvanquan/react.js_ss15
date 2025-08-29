import React, { useState, useRef, useEffect } from "react";

function RenderCounter() {
  const [inputValue, setInputValue] = useState("");
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Component Render Counter</h2>
      <label>
        Input:{" "}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <p>Component đã render: {renderCount.current} lần</p>
    </div>
  );
}

export default RenderCounter;