import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="topBar">
      <div className="welcome">
        <div className="greeting">Sup, Arhan</div>
        <div className="returnMessage">Good to have you back!</div>
        <div className="emoji">🤙</div>
      </div>

      <div className="addEvent">{"<<< Add Event"}</div>
    </div>
  );
}

export default TopBar;
