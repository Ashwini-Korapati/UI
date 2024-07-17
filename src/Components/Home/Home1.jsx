import React from 'react';
import '../Home/Home1.css';
import video1 from '../../assets/event1.mp4'; // Ensure this path is correct

const Home = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-content">
          <h1 className="navbar-h1">Events should be memorable and engaging</h1>
          <p className="paragraph">
            Coming together is a beginning; working together is success..<br />
          </p>
          <button className="button">Learn More</button>
        </div>
        <div className="video-container">
          <video
            src={video1}
            className="video-content"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
