import React from 'react'
import { ReactComponent as MenuSVG } from '../../assets/icons/menu.svg';
import './side-menu.css';

const links = ["One", "Two", "Three", "Four"]

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="menuContainer">
          <button className="menuButton sideMenuButton" onClick={onClose}>
              <MenuSVG className="menuIcon" />
          </button>
          <ul className="menuInside">
            {links.map((link) => (
              <li className="li">
                <a href="#" className="link" key={link}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export { SideMenu };