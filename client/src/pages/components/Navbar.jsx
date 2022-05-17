import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import { Dashboard, CalendarMonth, Analytics, AccountCircle} from "@mui/icons-material";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="navbar">
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
        <AccountCircle className='profileIcon'/>
      </div>
    </div>
  );
}

export default Navbar;
