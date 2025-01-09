import React from 'react'
import "./Header.css"
import {assets} from "../../assets/assets"

const Header = () => {
  return (
    <div className="header">
      <div className='container'>
        <div className="logo">
          <img src={assets.logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">pricing</a>
            </li>
            <li>
              <a href="#contact">features</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="button">
        <button className="btn">Download</button>
      </div>
    </div>
  );
}

export default Header
