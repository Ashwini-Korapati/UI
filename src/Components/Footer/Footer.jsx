import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="footer-cont">
      <div className="footer-section">
        <h2>EVENTS UNLIMITED</h2>
        <p>
          42, 4th Temple St Rd, Vyalikaval, Kodandarampura, Malleshwaram,
          Bengaluru, Karnataka 560003
        </p>
        <p className="icon-c">
          <FaPhoneAlt /> +91 9845925252{" "}
        </p>
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
            <FaInstagram style={{ color: "#E1306C" }} fontSize={"30px"} />{" "}
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
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
