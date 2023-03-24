import React from 'react'
import './Footer.css'
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/ig.png"

function Footer() {
  return (
    <div className="footer-container">
        
        <div className="socials">
          
          <div className="newletter-input">
            <h2>Keep in touch</h2>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type="text" placeholder="Your email"/>
          </div>
          
          <div className="socials-box">
            <h2>Let's Socialize</h2>
            <div className="s">
              <img src={facebook} alt="image"/>
              <p>Facebook</p>
            </div>
            <div className="s">
              <img src={twitter} alt="image"/>
              <p>Twitter</p>
            </div>
            <div className="s">
              <img src={instagram} alt="image"/>
              <p>Instagram</p>
            </div>
          </div>
        </div>
        
        <div className="footer">
            <div className="footer-stuff">
              <a href="#">About Us</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy & Cookie Policies</a>
            </div>
            <div className="footer-year">
              <p>2023</p>
              <p>&copy; UniLife</p>
            </div>
        </div>
    </div>
  )
}

export default Footer