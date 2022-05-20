import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import { motion } from "framer-motion";

import "./Dashboard.css";
import TopBar from "./components/TopBar";

function Dashboard() {
  const sidebarVariants = {
    hidden: {
      x: "-10vw",
      opacity: 0.5,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7,
      },
    },
  };
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Title variants={sidebarVariants}/>
        <Navbar variants={sidebarVariants}/>
      </div>
      <div className="content">
        <TopBar/>
      </div>
    </div>
  );
}

export default Dashboard;
