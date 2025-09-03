import React, { useState, useEffect } from "react";

function PageTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.trim()) {
      document.title = `${name}!`;
    } else {
      document.title = "Chào mừng bạn đến với trang của chúng tôi!";
    }
  }, [name]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", width: "100%", maxWidth: "300px" }}
      />
    </div>
  );
}

export default PageTitle;