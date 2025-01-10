import React from 'react'
import "./Home.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from '../../assets/assets';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-left">
          <img className='star1' src={assets.star} alt="" />
          <img className='rang-lf' src={assets.color} alt="" />
          <h1>make the best financial decisions</h1>
          <p>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="buttons">
            <button className='btn'>get started <FaArrowRightLong /></button>
            <button className='video'><img src={assets.home_video} alt="" /> watch video</button>
          </div>
          <img className='star2' src={assets.star} alt="" />
          <img className='home-lf-img' src={assets.home_lf_img} alt="" />
        </div>
        <div className="home-right">
          <img src={assets.home_bg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home
