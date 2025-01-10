import React from 'react'
import "./Testimonial.css"
import {assets} from "../../assets/assets"

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-title">
        <h5>TESTIMONIAL</h5>
        <h1>What Our Users Say About Us?</h1>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-img">
          <img src={assets.testimonial_lt_img} alt="" />
        </div>
        <div className="testimonial-info">
          <h1>The Best Financial Accounting App Ever!</h1>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="img">
            <img src={assets.testimonial_img1} alt="" />
            <img src={assets.testimonial_img2} alt="" />
            <img src={assets.testimonial_img3} alt="" />
            <img src={assets.testimonial_img4} alt="" />
            <img src={assets.testimonial_img5} alt="" />
          </div>
          <h2>Nick Jonas</h2>
        </div>
      </div>
    </div>
  );
}

export default Testimonial
