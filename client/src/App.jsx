import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loggedIn);
    loggedIn
      ? navigate("/dashboard", { replace: true })
      : navigate("/login", { replace: true });
  }, [loggedIn]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to="/login" replace={true} />}
        />
        <Route
          exact
          path="/login"
          element={<Login onLoggedIn={setLoggedIn} />}
        />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/calendar" element={<Navbar />} />
        <Route exact path="/analytics" element={<Navbar />} />
        <Route exact path="/profile" element={<Navbar />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
