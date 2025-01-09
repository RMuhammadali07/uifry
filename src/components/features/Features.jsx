import React from 'react'
import "./Features.css"
import {assets} from "../../assets/assets"

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="features-imgs">
          <img className='star1' src={assets.star} alt="" />
          <img className='rang1' src={assets.color} alt="" />
          <img className='chiziq1' src={assets.home_bg} alt="" />
          <img className='features-img' src={assets.home_img1} alt="" />
        </div>
        <div className="info">
          <h5>features</h5>
          <h1>uifry premium</h1>

          <div className="con1">
            <div>
              <img src={assets.features_img1} alt="" />
              <h3>budgeting intervals</h3>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="con2">
            <div>
              <img src={assets.features_img2} alt="" />
              <h3>budgeting intervals</h3>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="con3">
            <div>
              <img src={assets.features_img3} alt="" />
              <h3>budgeting intervals</h3>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <img className='rang2' src={assets.color} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Features
