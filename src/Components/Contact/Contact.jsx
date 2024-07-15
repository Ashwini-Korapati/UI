import React, { useEffect } from "react";
import "./Contact.css";
import 'primeicons/primeicons.css';
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='contact-main'>
      <div className='contact-div'>
        <form action="">
          <div className='contact-page'>
            <div className="contact-container">
              <h1>Be In Touch</h1>
              <div className="boxes">
                <input type="text" placeholder='FirstName' />
                <input type="text" placeholder='LastName' />
              </div>
              <div className="boxes">
                <input type="text" placeholder='Email Id' />
                <input type="text" placeholder='Phone Number' />
              </div>
              <div className='boxes'>
                <input type="date" placeholder='dd-mm-yyyy' />
                <input type="text" placeholder='Location' />
              </div>
              <div className='boxes'>
                <textarea name="" id="" cols="30" rows="5" placeholder='Message....' className="text-box"></textarea>
              </div>
              <button className='send-button' style={{ width: '150px' }}>Send Message</button>
            </div>
          </div>
        </form>
      </div>

      <div className='chat-cards' >
        <div className='chat' data-aos="flip-left">
          <i className="pi pi-phone" style={{ fontSize: '2.5rem', color: "red" }}></i>
          <h3>Phone Number</h3>
          <p>Call this Number for any quries</p>
          <p>+91 9845925252</p>
        </div>
        <div className='chat' data-aos="flip-left">
          <i className="pi pi-map-marker" style={{ fontSize: '2.5rem', color: "green" }}></i>
          <h3>Location</h3>
          <p>42, 4th Temple St Rd, Vyalikaval, Kodandarampura, Malleshwaram, Bengaluru, Karnataka 560003</p>
        </div>
        <div className='chat' data-aos="flip-left">
          <i className="pi pi-globe" style={{ fontSize: '2.5rem', color: "blue" }}></i>
          <h3>Website</h3>
          <p> Reach us through this website</p>
          <a href="">geventsunlimited.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
