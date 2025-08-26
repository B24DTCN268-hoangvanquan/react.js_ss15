import { useState } from "react";

function CounText() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <textarea
        rows={5}
        cols={40}
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}

export default CounText;
