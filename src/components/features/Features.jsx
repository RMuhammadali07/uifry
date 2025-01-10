import React from 'react'
import "./Features.css"
import {assets} from "../../assets/assets"

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="features-img">
          <img src={assets.features_bg} alt="" />
        </div>
        <div className="features-info">
          <h5 className='title'>FEATURES</h5>
          <h1>Uifry Premium</h1>

          <div className="con1">
            <div>
              <img src={assets.features_img1} alt="" />
              <h3>budgeting intervals</h3>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor
              onvallis risus placerat aliquam.
            </p>
          </div>

          <div className="con2">
            <div>
              <img src={assets.features_img2} alt="" />
              <h3>budgeting intervals</h3>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor
              onvallis risus placerat aliquam.
            </p>
          </div>

          <div className="con3">
            <div>
              <img src={assets.features_img3} alt="" />
              <h3>budgeting intervals</h3>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor
              onvallis risus placerat aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features
