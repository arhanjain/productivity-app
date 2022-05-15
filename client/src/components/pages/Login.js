import { useState } from "react";
import "./Login.css";

function Login({ onLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page">
      <div className="container">
        <div className="container-tab">
          <div className="logo">早く</div>
          {/* <div className="appName">Hayaku</div> */}
        </div>
        <div className="container-box">
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(text) => setUsername(text.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(text) => setPassword(text.target.value)}
          />
          <button
            className="login"
            onClick={() => {
              onLoggedIn(true);
            }}
          >
            Login
          </button>
          <button className="createAccount">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
