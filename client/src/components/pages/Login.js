import { useState } from "react";
import "./Login.css";

function Login({ onLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page">
      <div className="container">
        <div className="container-tab">Kanji</div>
        <div className="container-box">
          <input
            name="username"
            type="text"
            value={username}
            onChange={(text) => setUsername(text.target.value)}
          />
          <input
            name="password"
            type="text"
            value={password}
            onChange={(text) => setPassword(text.target.value)}
          />
          <button
            onClick={() => {
              onLoggedIn(true);
            }}
          >
            Login
          </button>
          <button>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
