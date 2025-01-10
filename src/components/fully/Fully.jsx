import React from 'react'
import "./Fully.css"
import { assets } from '../../assets/assets'

const Fully = () => {
  return (
    <div className="fully">
      <div className="fully-container">
        <div className="fully-img">
          <img src={assets.fully_bg} alt="" />
        </div>
        <div className="fully-info">
          <div>
            <img src={assets.fully_rt_img} alt="" />
            <h1>Fully Customizable</h1>
          </div>
          <p>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fully
