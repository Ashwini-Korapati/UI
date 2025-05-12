import React, { useEffect } from "react";
import "./AboutUs.css"
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../assets/OIP.jpeg"
import image2 from "../../assets/dj2.jpeg"
import image3 from "../../assets/dj1.jpeg"
import image4 from "../../assets/c-events.jpeg"


const AboutUs = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);

  return (
    <div className='about-container'>

      <div className='about-image'>
        <div className='about-text'  data-aos="fade-right">
          <h1 className="about-h1">Events_Unlimited</h1>
          <p>"Crafting Memorable Moments." - We specialize in creating unforgettable experiences for every occasion.</p>
          <hr />
          <p>Welcome to <span>EventsUnlimited!</span> We’ve been your partner in crafting exceptional event experiences from our base in Bangalore. Our goal is simple yet powerful: connecting you with India’s best vendors to create extraordinary moments without the extravagant price tag. Corporate events, we blend affordability with excellence, ensuring your event is etched in hearts forever.</p>
          <p>At <span>EventsUnlimited</span>, we understand your event is as unique as you are. Our dedicated team is adept at turning visions into reality, making your dream event a seamless, unforgettable reality. Thank you for choosing EventsUnlimited – let’s embark on this exciting journey together!</p>
          <h2>Who we are</h2>
          <p>We are a <span>Dedicated</span> team of professionals who are driven by a singular goal: to exceed your expectations and make your events unforgettable. Our team of experts meticulously handpicks a selection of top-tier vendors, ensuring that you have access to a wide range of services and products that cater to your specific event needs</p>
        </div>
        <div className='imgs'>
          <img src={image1} alt="" className='big-image' data-aos="fade-left"/>
          <div className='down-images' data-aos="fade-left">
            <img src={image2} alt="" className='down-image' />
            <img src={image3} alt="" className='down-image'/>
          </div>
        </div>
      </div>

      <div className='vision-page' data-aos="zoom-in">
        <h1>Our Vision & Our Mission</h1>
        <hr className='main-hr' />
        <div className='points'>
          <p>At Events Unlimited, our mission is to simplify event planning and execution by – </p>
          <hr />
          <p><i className="pi pi-arrow-right"></i>  Providing A Comprehensive Platform With A Curated Selection Of Top-Notch Vendors Offering The Best Prices And Packages.</p>
          <hr />
          <p><i className="pi pi-arrow-right"></i>  We Aim To Connect You With Industry-Leading Services And Products That Cater To Your Specific Event Requirements.</p>
          <hr />
          <p><i className="pi pi-arrow-right"></i> Our Goal Is To Make Event Planning Easy And Stress-Free, Ensuring You Reach Your Targets While Building Lasting Relationships With Our Extended Client Services.</p>
          <hr />
          <p><i className="pi pi-arrow-right"></i>  We Envision Expanding Our Services Worldwide To Elevate Public Awareness Of Our Offerings And Expertise.</p>
        </div>
      </div>

      <div className='offering'>
         <div data-aos="flip-left">
             <img src={image4} alt=""  className='offer-image'/>
         </div>
         <div data-aos="flip-right">
          <h1>What we Offer</h1>
          <p><span>Event Vendors :- </span>We have carefully curated a diverse list of event vendors, including venues, caterers, decorators, photographers, entertainers, and more. All of them are pre-screened to ensure reliability and quality.</p>
          <p><span>Best Price Guarantee :- </span>Our commitment is to bring you the best deals in the market. We negotiate with vendors on your behalf to secure the most competitive prices for your events.</p>
          <p><span>Custom Packages :- </span>We understand that each event is unique, and your requirements may vary. Therefore, we offer customized packages that cater to your specific needs, preferences, and budget.</p>
         </div>
      </div>

      <div className='whytochoose' data-aos="fade-up-left">
        <h1>Why Choose Us?</h1>
        <div>
          <p><span> Extensive Network :- </span>With a vast network of trusted event vendors, we can cater to events of any scale, from intimate gatherings to grand celebrations.</p>
          <p><span> Find the best vendors :- </span>From photographers to caterers, decorators to entertainers, we’ve got them all! Explore our extensive network of trusted and talented professionals, guaranteed to bring your dream event to life.</p>
          <p><span> Stress-Free Planning :- </span>Our user-friendly platform streamlines the event planning process, saving you time and effort. You can easily compare prices and packages, select vendors, and manage your bookings effortlessly..</p>
          <p><span> Expert Assistance :- </span>Our team of event experts is always ready to lend a helping hand. Whether you need advice on vendor selection or event planning tips, we are here to support you every step of the way.</p>
          <p><span> Transparent Pricing :- </span>No more endless negotiations or hidden costs! Our platform empowers you with transparent pricing information, so you can make informed decisions that fit your budget.</p>
          <p><span> Genuine Reviews :- </span>Access genuine reviews from previous clients to make well-informed decisions about your chosen vendors.</p>
        </div>
        <div>
          <h1>Customer Satisfaction</h1>
          <p>Customer satisfaction is at the heart of everything we do. We take pride in delivering exceptional customer service and ensuring that each interaction with us is a positive one. Our team is always ready to listen to your feedback and address any concerns promptly.</p>
        </div>
        <div>
          <h1>Join Us on Our Journey</h1>
          <p>We invite you to be a part of our exciting journey as we continue to evolve and make a positive impact. Whether you are a customer, partner, or team member, we look forward to building meaningful connections and achieving great things together</p>
        </div>
        <div>
          <h1>Contact Us</h1>
          <p>Reach out to us through our website or contact our customer support team for any inquiries or assistance. We are excited to make your dream event a reality with the best prices and packages available in the market!</p>
        </div>
        <div>
          <span>Contact information : </span>
          <p><span>Phone Number : </span>+91 7647367436</p>
          <p><span>Email :</span> hello@eventsunlimited.in</p>
          <span>Let's Create Memorable events together</span>
        </div>
      </div>

    </div>
  )
}

export default AboutUs
