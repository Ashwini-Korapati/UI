import React, { useEffect } from 'react';
import '../Clients/Clients.css'
import img1 from '../../assets/clients/1.jpeg'
import img2 from '../../assets/clients/2.jpeg'
// import img3 from '../../assets/clients/3.jpeg'
import img4 from '../../assets/clients/4.jpeg'
import img5 from '../../assets/clients/5.jpeg'
import img6 from '../../assets/clients/6.jpeg'
import img7 from '../../assets/clients/7.jpeg'
import img8 from '../../assets/clients/8.jpeg'
import img9 from '../../assets/clients/9.jpeg'
import img10 from '../../assets/clients/10.jpeg'
import img11 from '../../assets/clients/11.jpeg'

const About = () => {
  useEffect(() => {
    const imageLine = document.querySelector('.image-line');
    const images = imageLine.innerHTML;
    imageLine.innerHTML += images; 
  }, []);
 
  return (
    <div className='client-section'>
      {/* <div className='about-section'>
      </div> */}
      <div className='image-container'>
        <div className='image-line'>
          <img src={img1} alt='bupaimage' />
          <img src={img2} alt='albiladimage' />
          {/* <img src={img3} alt='finmetimage' /> */}
          <img src={img4} alt='indianbankimage' />
          <img src={img5} alt='nseimage' />
          <img src={img6} alt='santanderimage' />
          <img src={img7} alt='santanderimage' />
          <img src={img8} alt='santanderimage' />
          <img src={img9} alt='santanderimage' />
          <img src={img10} alt='santanderimage' />
          <img src={img11} alt='santanderimage' />

        </div>
      </div>
    </div>
  );
};
 
export default About;