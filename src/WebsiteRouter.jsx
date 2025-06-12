import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPageFinal from './Pages/ContactPageFinal';
import VsptPage from './Pages/VsptPage';
import Endpointsecurity from './Pages/Endpointsecurity';
import NextGenerationPage from './Pages/NextGenerationPage';
import Emailsecurity from './Pages/Emailsecurity';
import MalwareAnalysis from './Pages/MalwareAnalysis';
import Circle from './Components/Circle';
import Header from './Components/Header';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-datepicker/dist/react-datepicker.css';

function WebsiteRouter() {
  const location = useLocation();

  return (
    <div> 
           
        
            <div className="background">
              <Circle />
            </div>
            <div className="head" data-scroll-sticky>
              <Header />
            </div>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage scroll={scroll} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPageFinal />} />
                <Route path="/vspt" element={<VsptPage />} />
                <Route path="/EndpointSecurity" element={<Endpointsecurity />} />
                <Route path="/NextGenerationFirewall" element={<NextGenerationPage />} />
                <Route path="/EmailSecurity" element={<Emailsecurity />} />
                <Route path="/MalwareAnalysis" element={<MalwareAnalysis />} />   
              </Routes>
            </AnimatePresence>
    
    </div>
  );
}

export default WebsiteRouter;