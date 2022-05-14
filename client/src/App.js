import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loggedIn);
    loggedIn ? navigate("/dashboard", { replace: true }) : navigate("/login", {replace: true});
  }, [loggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace={true}/>} />
      <Route path="/login" element={<Login onLoggedIn={setLoggedIn} />} />
      <Route path="/sus" element={<Navbar />} />
      <Route path="/dashboard" element={<Navbar />} />
    </Routes>
  );
}

export default App;
