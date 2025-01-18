import React from 'react'
import "./Advadnages.css"
import {assets} from "../../assets/assets"

const Advadnages = () => {
  return (
    <div className="advadnages">
      <div className="advadnages-container">
        <div className="advadnages-info">
          <h5 className="title">ADVADNAGES</h5>
          <h1>Why Choose Uifry?</h1>

          <div>
            <img src={assets.advednages_lf_img} alt="" />
            <h1>Clever Notifications</h1>
          </div>
          <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
          </p>
          
        </div>
        <div className="advadnages-img">
          <img src={assets.advednages_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Advadnages
