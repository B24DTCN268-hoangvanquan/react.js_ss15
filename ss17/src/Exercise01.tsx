import React, { useState } from "react";

export default function Exercise01() {
    
  const [name, setName] = useState("Hoàng Văn Quân");

  return (
    <div>
      <h2>Họ và tên: {name}</h2>
    </div>
  );
}
