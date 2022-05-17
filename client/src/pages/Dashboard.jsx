import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import { motion } from "framer-motion";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Title></Title>
      <div className="content">
        <motion.button animate={{ scale: 0.5 }}
        transition={{duration:2}}>Sex</motion.button>
      </div>
      <Navbar></Navbar>
    </div>
  );
}

export default Dashboard;
