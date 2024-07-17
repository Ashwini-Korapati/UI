import React, { useEffect } from "react";
import Printing from "../Printing/Printing";
import Giftings from "../Giftings/Giftings";
import DJ from "../DJ/DJ";
import Anchor from "../Anchor/Anchor";
import { useLocation } from 'react-router-dom';

const Corporate = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div id="printings">
        <Printing />
      </div>
      <div id="giftings">
        <Giftings />
      </div>
      <div id="dj">
        <DJ />
      </div>
      <div id="anchor">
        <Anchor />
      </div>
    </div>
  );
};

export default Corporate;
