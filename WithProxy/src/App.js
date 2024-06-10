import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/HeaderBar'; // Adjust the import path as necessary
import Footer from './components/Footer';
import Home from './pages/Home'; // Placeholder for your Home component
import Company from './pages/Company'; // Placeholder for your About Us component
import Blogs from './pages/Blogs'; // Placeholder for your Blogs component
import Services from './pages/Services'; // Placeholder for your Services component
import Contact from './pages/Contact'; // Placeholder for your Contact Us component
import GetQuote from './pages/GetQuote';
import TrackShipment from './pages/TrackShipment';
import About from './pages/About';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import FreightCalculator from './pages/freightCalculator';

import BlogOneMPCL from './pages/Blogs/BlogOneMPCL';
import BlogTwoMPCL from './pages/Blogs/BlogTwoMPCL';
import BlogThreeMPCL from './pages/Blogs/BlogThreeMPCL';

import DummyPage from './pages/DummyPage'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <div>
        <HeaderBar/>
        <div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/company" element={<Company />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/getQuote" element={<GetQuote />} />
            <Route path="/trackShipment" element={<TrackShipment />} />
            <Route path="/company/about" element={<About />} />
            <Route path="/company/team" element={<Team />} />
            <Route path="/company/gallery" element={<Gallery />} />
            <Route path="/blogs/blogOneMPCL" element={<BlogOneMPCL />} />
            <Route path="/blogs/blogTwoMPCL" element={<BlogTwoMPCL />} />
            <Route path="/blogs/blogThreeMPCL" element={<BlogThreeMPCL />} />
            <Route path="/freightCalculator" element={<FreightCalculator />} />
            <Route path="/dummyPage" element={<DummyPage />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
