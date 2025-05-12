
import React from "react";
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaTwitterSquare, FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import "../Footer/Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  // Generate 10 bubbles for the animation
  const bubbles = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="bubble"></div>
  ));

  return (
    <div className="footer-cont">
      {/* SVG Filter Definition */}
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>

      <div className="bubbles">{bubbles}</div>

      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Events Unlimited Logo" className="logo" />
          <div className="location-div">
            <IoLocation style={{ color: "white" }} fontSize={"20px"} className="location" />
            <p>
              42, 4th Temple St Rd, Vyalikaval, Kodandarampura, Malleshwaram,
              Bengaluru, Karnataka 560003
            </p>
          </div>
          <div className="location-div">
            <FaPhoneAlt style={{ color: "white" }} fontSize={"20px"} className="phone" />
            <p className="icon-c">+91 9845925252</p>
          </div>
        </div>
        <div className="footer-center-section">
          <h2>Follow Us</h2>
          <div className="icons">
            <a href="https://www.instagram.com/events_unlimited_365?igsh=MWYybzdnODYyc3dpMA==">
              <FaLinkedin style={{ color: "#0077B5" }} fontSize={"30px"} />
            </a>
            <a href="https://www.instagram.com/events_unlimited_365?igsh=MWYybzdnODYyc3dpMA==">
              <FaFacebookSquare style={{ color: "#1877F2" }} fontSize={"30px"} />
            </a>
            <a href="https://www.instagram.com/events_unlimited_365?igsh=MWYybzdnODYyc3dpMA==">
              <FaInstagram style={{ color: "#E1306C" }} fontSize={"30px"} />
            </a>
            <a href="https://www.instagram.com/events_unlimited_365?igsh=MWYybzdnODYyc3dpMA==">
              <FaTwitterSquare style={{ color: "#1DA1F2" }} fontSize={"30px"} />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9889.73841034661!2d77.5657754066365!3d13.002696760010618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179898500811%3A0x1ae97c253f82d79b!2sEvents%20unlimited!5e0!3m2!1sen!2sin!4v1720808098342!5m2!1sen!2sin"
              title="Events Unlimited Location"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p className="para">
          © 2024 Events Unlimited || All rights reserved || Design & Developed by DPS
        </p>
      </div>
    </div>
  );
}

export default Footer;