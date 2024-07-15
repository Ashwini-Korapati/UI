import React, { useEffect } from "react";
import "./Home.css"
import AOS from "aos";
import "aos/dist/aos.css";
import video from "../../assets/event1.mp4"
import gift from "../../assets/OIP.jpeg"
import dj from "../../assets/dj1.jpeg"
import dj1 from "../../assets/dj2.jpeg"
import anchor from "../../assets/anchor1.jpeg"
import print from "../../assets/id.webp"
import cevent from "../../assets/c-events.jpeg"
import anchor1 from "../../assets/anchor.jpeg"
import gift1 from "../../assets/gifts.jpeg"
import game from "../../assets/game.jpeg"
import Home1 from "./Home1";
import Clients from '../Clients/Clients'

const Home = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='main'>

            <div className='bgcontainer' data-aos="zoom-in">
                {/* <video src={video} autoPlay loop muted ></video> */}
                <Home1/>
            </div>

            <div className='main-service'>
                <div className='main-images'>
                    <img src={gift} className='event' data-aos="fade-right" />
                    <div className='images'>
                        <img src={dj} className='dj' data-aos="fade-right" />
                        <img src={anchor} className='dj' data-aos="fade-right" />
                    </div>
                </div>
                <div className='serice-text' data-aos="fade-left">
                    <h1>Planning a Successful Corporate Event?</h1>
                    <br />
                    <div>
                        Planning a successful corporate event is a meticulous process that involves setting clear objectives, budgeting, selecting a venue and theme, and crafting an engaging agenda and content.

                        Additionally, managing logistics, operations, marketing, sales process, and promotion is essential to ensure the event runs smoothly and achieves its desired outcomes.
                    </div>
                    <br />

                    <div>
                        Corporate events are gatherings of individuals with a specific purpose, such as sales meetings, networking, product launches, or team building. These events play a pivotal role in the growth and success of businesses, enabling them to reach new markets, strengthen customer relationships, and enhance employee morale.

                        Organizing a successful corporate event requires careful planning and attention to detail. Many factors must be considered, from selecting the right venue to creating an engaging agenda. It is important to ensure that the event is successful.
                    </div>

                    <button className="know-button">Know About Us </button>
                </div>
            </div>

            <div className="services">
                <h1>Our Services</h1>
                <div className="services-images">
                    <div className="up-images">
                        <div className="service-image" data-aos="fade-down-right">
                            <img src={cevent} alt="" />
                            <h3>Corporate events</h3>
                        </div>
                        <div className="service-image" data-aos="zoom-in">
                            <img src={dj1} alt="" />
                             <h3>DJ</h3>
                        </div>
                        <div className="service-image" data-aos="fade-down-left">
                            <img src={print} alt="" />
                            <h3>Printings</h3>
                        </div>
                    </div>
                    <div className="down-images">
                        <div className="service-image" data-aos="fade-down-right">
                            <img src={anchor1} alt="" />
                            <h3>Anchoring</h3>
                        </div>
                        <div className="service-image" data-aos="zoom-in">
                            <img src={gift1} alt="" />
                            <h3>Giftings</h3>
                        </div>
                        <div className="service-image" data-aos="fade-down-left">
                            <img src={game} alt="" />
                            <h3>Games</h3>
                        </div>
                    </div>
                </div>
                <Clients/>
            </div>
        </div>


    )
}

export default Home 
