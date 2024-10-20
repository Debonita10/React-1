import React from "react";
import "./Subfooter.css"
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { IoLogoApple } from "react-icons/io5";
import { BsGooglePlay } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { TbPackageImport } from "react-icons/tb";
import { PiPhoneCallBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";




export default function Subfooter(){
    return(

   
<div className="promo">

        <div className="promo_bannerDiv">
      <div className="promo-banner">
        <img src="https://alphasilver.productsalphawizz.com/uploads/booking.png" alt="applogo"/>
        <div><h1>Download App Now!</h1>
        <p>Use code <strong>WELCOMEMMT</strong> and get FLAT 12% OFF on your first domestic flight booking</p></div>
        <div className="app-buttons">
        <button><IoLogoApple className="downloadIcon" /> <div><div className="downloadText">Download on the</div><span>App Store</span></div></button><br></br>
        <button><BsGooglePlay className="downloadIcon" /><div><div className="downloadText">Get it on</div><span>Google Store</span></div></button>
        </div>
        <div className="qrcode">
        <img src="https://jetsetterindia.com/uploads/appstore/QRCodeDT_QR-code.jpg" alt="qrcode"/>
        </div>
        </div>
      </div>

      <div className="features">
        <div className="feature">
        <FaTruckFast className="icon" />
        <h3>Fast Shipping</h3>
          <p>Fast Shipping at your door step</p>
        </div>
        <div className="feature">
        <TbPackageImport className="icon" />
        <h3>Free return</h3>
          <p>Free return if products are damaged</p>
        </div>
        <div className="feature">
        <PiPhoneCallBold className="icon"/>
        <h3>24/7 and 365 days</h3>
          <p>24/7 and 365 days support</p>
        </div>
        <div className="feature">
        <FaArrowRight className="icon" />
        <h3>Seller Login</h3>
          <p>Seller Login</p>
        </div>
      </div>
      </div>
    );
}
