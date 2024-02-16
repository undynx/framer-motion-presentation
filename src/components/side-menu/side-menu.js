import React from 'react'
import { motion } from 'framer-motion';

import { ReactComponent as MenuSVG } from '../../assets/icons/menu.svg';
import './side-menu.css';

const links = ["One", "Two", "Three", "Four"]

const variants = {
  opened: { x: 0 },
  closed: { x: '-100%', transition: { delay: 1 } }
}

const ulVariants = {
  opened: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  }
}

const liVariants = {
  opened: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: -20,
    opacity: 0
  }
}

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className="menuContainer"
      variants={variants}
      animate={ isOpen ? "opened" : "closed" }
      transition={{ duration: 0.3 }}
    >
      <button className="menuButton sideMenuButton" onClick={onClose}>
          <MenuSVG className="menuIcon" />
      </button>
      <motion.ul
        variants={ulVariants}
        className="menuInside"
        animate={ isOpen ? "opened" : "closed" }
      >
        {links.map((link) => (
          <motion.li
            variants={liVariants}
            className="li"
            animate={ isOpen ? "opened" : "closed" }
          >
            <a href="#" className="link" key={link}>{link}</a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export { SideMenu };