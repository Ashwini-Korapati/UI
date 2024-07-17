import React from 'react';
import "./Giftings.css";
import p1 from "../../assets/print/print3.jpg"
import p2 from "../../assets/print/print4.jpg"
import p3 from "../../assets/print/print5.jpg"
import p4 from "../../assets/print/print6.jpg"
import p5 from "../../assets/print/print7.jpg"
import p6 from "../../assets/print/print8.jpg"
import p7 from "../../assets/print/print9.jpg"
import p8 from "../../assets/print/print10.jpg"



const Giftings = () => {
  return (
    <div style={{ marginTop: "150px" }} className='printing-container'>

      <h1 className='print-heading'>Giftings</h1>
      <div className="printing-images">
        <div className="print-images">
          <div className="print-image" data-aos="fade-down-right">
            <img src={p1} alt="" className='img'/>
          </div>
          <div className="print-image" data-aos="zoom-in">
            <img src={p2} alt=""  />
          </div>
          <div className="print-image" data-aos="fade-down-left">
            <img src={p3} alt="" />
          </div>
          <div className="print-image" data-aos="fade-down-left">
            <img src={p4} alt="" />
          </div>
        </div>
        <div className="print-images">
          <div className="print-image" data-aos="fade-down-right">
            <img src={p5} alt="" />
          </div>
          <div className="print-image" data-aos="zoom-in">
            <img src={p6} alt="" />
          </div>
          <div className="print-image" data-aos="fade-down-left">
            <img src={p7} alt="" />
          </div>
          <div className="print-image" data-aos="fade-down-left">
            <img src={p8} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Giftings;
