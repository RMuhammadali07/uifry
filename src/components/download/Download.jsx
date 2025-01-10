import React from 'react'
import "./Download.css"
import { FaApple } from "react-icons/fa";
import {assets} from "../../assets/assets"

const Download = () => {
  return (
    <div className="download">
      <img className='rang1' src={assets.color} alt="" />
      <div className="download-container">
        <h1>Ready To Get Started?</h1>
        <p>
          Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate. Mauris Diam Eget Morbi Tempus Vulputate.
        </p>
        <button className='download-btn'>Download App <i><FaApple /></i></button>
      </div>
    </div>
  );
}

export default Download
