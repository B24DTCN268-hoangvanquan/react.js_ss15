import React, { useEffect } from "react";

function Welcome() {
  useEffect(() => {
    console.log("Welcome component được render lần đầu");
  }, []); 

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>
    </div>
  );
}

export default Welcome;