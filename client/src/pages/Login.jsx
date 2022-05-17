import { useState } from "react";
import "./Login.css";

function Login({ onLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="container">
        <div className="tab">
          <div className="logo">速い</div>
          {/* <div className="appName">Hayai</div> */}
        </div>
        <div className="box">
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
            className="loginButton"
            onClick={() => {
              onLoggedIn(true);
            }}
          >
            Login
          </button>
          <button className="createAccountButton">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
