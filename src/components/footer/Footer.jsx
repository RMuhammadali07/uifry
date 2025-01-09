import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={assets.logo} alt="" />
          <div>
            <i>
              <MdEmail />
            </i>
            <p>help@frybix.com</p>
          </div>
          <div>
            <i>
              <BsFillTelephoneFill />
            </i>
            <p>+1 234 456 678 89</p>
          </div>
        </div>
        <div className="footer-link">
          <h1>links</h1>
          <a href="">home</a>
          <a href="">about us</a>
          <a href="">bookings</a>
          <a href="">blog</a>
        </div>
        <div className="footer-legal">
          <h1>legal</h1>
          <a href="">terms of use</a>
          <a href="">privacy policy</a>
          <a href="">cookie policy</a>
        </div>
        <div className="footer-product">
          <h1>product</h1>
          <a href="">take tour</a>
          <a href="">live chat</a>
          <a href="">reveiws</a>
        </div>
        <div className="footer-newslatter">
          <h1>Newsletter</h1>
          <a href="">Stay up to date</a>
          <div className="footer-input">
            <input type="email" placeholder="Your email " />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
