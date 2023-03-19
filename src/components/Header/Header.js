import React from 'react'
import './Header.css'
import {MdOutlineEmail} from 'react-icons/md';
import {HiOutlineHeart} from 'react-icons/hi';
import logo from '../../assets/logo.png'


function Header() {
  return (
    <div className="header-container">
        <div className="logo">
            <img src={logo}/>
            <a href="/">UniLife</a>
        </div>
        <div className="header-links">
            <div className="shortlist">
                <HiOutlineHeart/>
                <p>Shortlist</p>
            </div>
            <div className="contact">
                <MdOutlineEmail className="mail-img"/>
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  )
}

export default Header