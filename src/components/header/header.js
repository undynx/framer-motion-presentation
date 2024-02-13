import React from 'react'
import { ReactComponent as MenuSVG } from '../../assets/icons/menu.svg';

import './header.css';

const Header = ({ onClose }) => {
  return (
    <div className="headerContainer">
        <button className="menuButton" onClick={onClose}>
            <MenuSVG className="menuIcon" />
        </button>
    </div>
  )
}

export { Header }