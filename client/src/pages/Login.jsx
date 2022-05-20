import { useState } from "react";
import { motion } from "framer-motion";
import "./Login.css";

function Login({ onLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const containerVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0.5,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const fieldVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.1,
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <div className="login">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        // exit={{opacity:0}}
      >
        <div className="tab">
          <motion.div className="logo" variants={fieldVariants}>
            速い
          </motion.div>
          {/* <div className="appName">Hayai</div> */}
        </div>
        <div className="box">
          <motion.input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(text) => setUsername(text.target.value)}
            variants={fieldVariants}
          />
          <motion.input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(text) => setPassword(text.target.value)}
            variants={fieldVariants}
          />
          <motion.button
            className="loginButton"
            onClick={() => {
              onLoggedIn(true);
            }}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}

            variants={fieldVariants}
          >
            Login
          </motion.button>
          <motion.button
            className="createAccountButton"
            variants={fieldVariants}
          >
            Create Account
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
