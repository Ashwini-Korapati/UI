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
              <div className='text'>
                <textarea name="" id="" cols="30" rows="5" placeholder='Message....'></textarea>
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
          <p>3RD Temple Street, NO 9, Siddanthi Block, Malleswaram, Bengaluru, Karnataka 560003 · 11 km</p>
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
// https://www.bing.com/maps?mepi=127%7EDirections%7EUnknown%7EDirection_Button&ty=0&rtp=pos.12.928600311279297_77.62879180908203__Events+Unlimited__e_%7E&mode=d&v=2&sV=1&cp=12.9286%7E77.628762&lvl=14.5