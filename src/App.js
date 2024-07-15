import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Corporate from './Components/Corporate/Corporate';
import DJ from './Components/DJ/DJ';
import Anchor from './Components/Anchor/Anchor';
import Giftings from './Components/Giftings/Giftings';
import Printing from './Components/Printing/Printing';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Corporate />} />
          <Route path="/dj" element={<DJ />} />
          <Route path="/anchor" element={<Anchor />} />
          <Route path="/giftings" element={<Giftings />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/vendor" element={<Vendoe />} /> */}
          <Route path="/printing" element={<Printing />} />
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
