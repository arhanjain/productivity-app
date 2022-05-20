import React from "react";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import "./Card.css";

function Card({width, height}) {
  const cardVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
    }, 
    hover: {
      scale: 1.1
    }
  }
  const suspect = false
  return (
    <motion.div className="card" style={{width: width, height: height}} 
    variants={cardVariants}
    whileHover="hover">
      {[1,2,3,4,5].map(num => <Skeleton animation='wave' height="1.8rem" />)}
      {/* {suspect || <Skeleton animation="wave"/>} */}
    </motion.div>
  );
}

export default Card;
