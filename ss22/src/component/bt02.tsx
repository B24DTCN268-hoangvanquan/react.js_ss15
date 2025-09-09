import React from "react";
import { Input } from "antd";

const Inputs = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}>
      <Input size="large" placeholder="Input cỡ lớn" />
      <Input placeholder="Input cỡ trung bình" />
      <Input size="small" placeholder="Input cỡ bé" />
    </div>
  );
};

export default Inputs;
