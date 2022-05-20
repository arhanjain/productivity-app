import React, {useState} from "react";
import { motion } from "framer-motion";
import "./TopBar.css";

function TopBar() {
  const [addEventActive, setAddEventActive] = useState(false);
  const addEventVariants = {
    hidden: {
      x: "50vw",
      opacity: 0.5,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        // duration: 1,
      },
    },

    hover: {
      x: "-2vw",
      transition: {
        type: 'spring',
        duration:0.5,
      }
    },
  };

  const welcomeVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  function handleAddEventClicked() {
    setAddEventActive(!addEventActive)

  }

  return (
    <div className="topBar">
      <motion.div
        className="welcome"
        variants={welcomeVariants}
        initial="hidden"
        animate="show"
      >
        <div className="greeting">Sup, Noslion</div>
        <div className="returnMessage">Good to have you back!</div>
        <div className="emoji">🤙</div>
      </motion.div>

      <motion.div
        className="addEvent"
        variants={addEventVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
        onClick={() => handleAddEventClicked()}
      >
        {"<<< Add Event"}
      </motion.div>
    </div>
  );
}

export default TopBar;
