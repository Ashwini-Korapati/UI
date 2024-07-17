import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Corporate from "./Components/Corporate/Corporate";
import DJ from "./Components/DJ/DJ";
import Anchor from "./Components/Anchor/Anchor";
import Giftings from "./Components/Giftings/Giftings";
import Printing from "./Components/Printing/Printing";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Vendor from "./Components/Vendor/Vendor";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Corporate />} />
          <Route path="/events#printings" element={<Printing />} />
          <Route path="/events#dj" element={<DJ />} />
          <Route path="/events#anchor" element={<Anchor />} />
          <Route path="/events#giftings" element={<Giftings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vendor" element={<Vendor />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
