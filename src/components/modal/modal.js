import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';
import gif from '../../assets/images/chipi-chapa.gif';
import './modal.css';

const Modal = ({ isOpen, onClose }) => {
  const variants = {
    opened: { opacity: 1 },
    closed: { opacity: 0 }
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={variants}
          initial="closed"
          animate="opened"
          exit="closed"
          transition={{ duration: 1 }}
        >
          <button className="overlay" onClick={onClose} />
          <div className="modal">
            <button className="closeButton" onClick={onClose}><CloseSVG className="closeSVG" /></button>
            <div className="modalContent">
              <h3>Modal</h3>
              <img src={gif} alt="chipichipi" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { Modal };