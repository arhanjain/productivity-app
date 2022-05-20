import React from 'react'
import {motion} from 'framer-motion'
import './Title.css'

function Title({variants}) {
  return (
    <motion.div className="title" variants={variants} 
    initial="hidden"
    animate="show">
      <div className="logo">速い</div>
    </motion.div>
  )
}

export default Title