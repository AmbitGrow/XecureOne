import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPageFinal from "./pages/ContactPageFinal";
import VsptPage from "./pages/VsptPage";
import Endpointsecurity from "./pages/Endpointsecurity";
import NextGenerationPage from "./pages/NextGenerationPage";
import Emailsecurity from "./pages/Emailsecurity";
import MalwareAnalysis from "./pages/MalwareAnalysis";
import Circle from "./Components/Circle";
import Header from "./Components/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-datepicker/dist/react-datepicker.css";

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
          <Route
            path="/NextGenerationFirewall"
            element={<NextGenerationPage />}
          />
          <Route path="/EmailSecurity" element={<Emailsecurity />} />
          <Route path="/MalwareAnalysis" element={<MalwareAnalysis />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default WebsiteRouter;
