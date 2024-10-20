import React from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { GrYoutube } from "react-icons/gr";
import { IoLogoApple } from "react-icons/io5";
import { BsGooglePlay } from "react-icons/bs";
import { useNavigate } from "react-router-dom";





export default function Footer () {

  const nav = useNavigate();


  const gotoContactus=()=>{
    nav("/Contactus");
  }

  const gotoLogin=()=>{
    nav("/login");
  }
  const gotoCategory=()=>{
    nav("/category")
  }
  const gotoHome=()=>{
    nav("/")
  }
return(
<>
<div>
<div>
       <footer className="footer">
      <div className="footer-section">
        <div className="company-info">
          <img  className="footer-logo"
            src="https://api.asm.skype.com/v1/objects/0-jhb-d6-b75a4d30128aafbd0b6fec7cffd88dbf/views/imgpsh_fullsize_anim"
            alt="logo"
          />
          <p>ALPHA PLATINUM</p>
        </div>
<div className="footer-molinks">
        <div className="footer-links">
          <h4>Get to Know Us</h4>
         <p onClick={gotoHome}>Home</p>
          <p onClick={gotoCategory}>Products</p>
          <p onClick={gotoLogin}>Register</p>
          <p onClick={gotoContactus}>Contact Us</p>
        </div>

        <div className="footer-links">
          <h4>Category</h4>
          <p>Login</p> 
          <p >About Us</p>
          <p>Sellers</p>
        </div>

        <div className="footer-social">
          <h4>Connect with Us</h4>
          <div className="social-icons">
            <FaFacebook />
            <AiFillTwitterCircle />
            <RiInstagramFill />
            <GrYoutube />
          </div>
          <div className="download">
            <IoLogoApple /><a href="/">Download on the App Store</a>
            <BsGooglePlay /><a href="/">Get it on Google Play</a>
          </div>
        </div>
      </div>

      
      </div>
      {/* <div className="footer-bottom">
        <p>&copy; 2024 All Right Reserved Alpha Platinum Private Limited</p>
        <a href="/">Home</a>
        <a href="/">Terms & Condition</a>
        <a href="/">Privacy Policy</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
      </div> */}
    </footer>

    </div>
  










</div>
</>
);
}