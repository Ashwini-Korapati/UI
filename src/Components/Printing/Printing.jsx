import React from 'react';
import "./Printing.css";
import cevent from "../../assets/c-events.jpeg"
import p1 from "../../assets/print/print3.jpg"
import p2 from "../../assets/print/print4.jpg"
import p3 from "../../assets/print/print5.jpg"
import p4 from "../../assets/print/print6.jpg"
import p5 from "../../assets/print/print7.jpg"
import p6 from "../../assets/print/print8.jpg"
import p7 from "../../assets/print/print9.jpg"
import p8 from "../../assets/print/print10.jpg"
import p9 from "../../assets/print/print11.jpg"
import p10 from "../../assets/print/print12.jpg"
import p11 from "../../assets/print/print13.jpg"
import p12 from "../../assets/print/print14.jpg"
import p13 from "../../assets/print/print1.jpg"
import p15 from "../../assets/print/print17.jpg"
import p16 from "../../assets/print/print18.jpg"
import p17 from "../../assets/print/print19.jpg"
import p18 from "../../assets/print/print20.jpg"
import p19 from "../../assets/print/print21.jpg"
import p20 from "../../assets/print/print22.jpg"
import p21 from "../../assets/print/print1.jpg"
import p22 from "../../assets/print/print2.jpg"




const Printing = () => {
  return (
    <div style={{ marginTop: "150px" }} className='printing-container'>

      <h1 className='print-heading'>Printings</h1>
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

      <div className="print-images">
          <div className="print-image" data-aos="fade-down-right">
            <img src={p9} alt="" />
          </div>
          <div className="print-image" data-aos="zoom-in">
            <img src={p8} alt="" />
          </div>
          <div className="print-image" data-aos="fade-down-left">
            <img src={p10} alt="" />
          </div>
          <div className="print-image" data-aos="fade-down-left">
            <img src={p11} alt="" />
          </div>
        </div>

        
      <div className="print-images">
          <div className="print-image" data-aos="fade-down-right">
            <img src={p12} alt="" />
          </div>
          <div className="print-image" data-aos="zoom-in">
            <img src={p13} alt="" />
          </div>
          <div className="print-image" data-aos="fade-down-left">
            <img src={p16} alt="" />
          </div>
          <div className="print-image" data-aos="fade-down-left">
            <img src={p15} alt="" />
          </div>
        </div>

        
      <div className="print-images">
          <div className="print-image" data-aos="fade-down-right">
            <img src={p20} alt="" />
          </div>
          <div className="print-image" data-aos="zoom-in">
            <img src={p17} alt="" />
          </div>
          <div className="print-image" data-aos="fade-down-left">
            <img src={p18} alt="" />
          </div>
          <div className="print-image" data-aos="fade-down-left">
            <img src={p19} alt="" />
          </div>
        </div>

    </div>
  );
};

export default Printing;
