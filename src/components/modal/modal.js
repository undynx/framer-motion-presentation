import React from 'react'

import gif from '../../assets/images/chipi-chapa.gif';
import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';
import './modal.css';

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div>
          <button className="overlay" onClick={onClose} />
          <div className="modal">
            <button className="closeButton" onClick={onClose}><CloseSVG className="closeSVG" /></button>
            <div className="modalContent">
              <h3>Modal</h3>
              <img src={gif} alt="chipichipi" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { Modal };