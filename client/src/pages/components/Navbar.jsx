import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dashboard,
  CalendarMonth,
  Analytics,
  AccountCircle,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar({variants}) {
  const navigate = useNavigate();
  

  return (
    <motion.div className="navbar"
    variants={variants}
    initial="hidden"
    animate="show">
      <div className="tab" onClick={() => navigate("/dashboard")}>
        <Dashboard className="dashboardIcon" />
      </div>
      <div className="tab" onClick={() => navigate("/calendar")}>
        <CalendarMonth className="calendarIcon" />
      </div>
      <div className="tab" onClick={() => navigate("/analytics")}>
        <Analytics className="analyticsIcon" />
      </div>
      <div className="tab" onClick={() => navigate("/profile")}>
        <AccountCircle className="profileIcon" />
      </div>
    </motion.div>
  );
}

export default Navbar;
