import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import'./Contactus.css';

export default function Contactus() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        city: '',
        message: '',
        registerAs: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data: ', formData);
      };

  return (
    <>
     <div className="contact">
          <h2>Contact Us</h2>
        </div>
      <div className="contact-content">
       
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.499361264256!2d75.89561367476215!3d22.746842226562592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd315b9b97b3%3A0x802fe3df65171895!2sAlphawizz%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1727691049699!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{border:"0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
</div>

<form onSubmit={handleSubmit} className="contact-form">
        <div className="register-as">
          <label>Register as*: </label>
          <input
            type="radio"
            name="registerAs"
            value="Vendor"
            onChange={handleInputChange}
          /> Vendor
          <input
            type="radio"
            name="registerAs"
            value="Customer"
            onChange={handleInputChange}
          /> Customer
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Number</label>
            <input
              type="text"
              name="number"
              placeholder="Your Number"
              value={formData.number}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Your City"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>




        </div>
  
    </>
  );
}
