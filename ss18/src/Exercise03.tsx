import React, { useState, useCallback } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log({
        email,
        password,
      });
    },
    [email, password]
  );

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h2>Đăng nhập</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
