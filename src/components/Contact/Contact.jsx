import React from "react";
import './contact.css'
function Contact() {
  return (
    <div className="contact-section container">
      <div className="contact-left">
        <h2>Did You Find Your<span> Dream Home?</span></h2>
        <p>
          Thank you for getting in touch! if you find your dream home connect
          with us
        </p>
      </div>
      <div className="contact-right">
        <form>
          <div className="form-row">
            <input placeholder="Your Name" />
            <input placeholder="Your Email" />
          </div>
          <div className="form-row margon" > 
            <input placeholder="Phone Number" />
            <select placeholder="Interested In">
              <option>Interested In</option>
            </select>
          </div>
          <div className="message">
              <input placeholder="Message" />
          </div>
          <button className="form-button">Contact Us</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
