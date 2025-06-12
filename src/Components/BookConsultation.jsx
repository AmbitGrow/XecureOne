import React from "react";
import "../Styles/Consultation.css";
import { useNavigate } from "react-router-dom";

function BookConsultaion() {
   const navigate=useNavigate();

  return (
    <div className="hp-seventh-section get-secured-now-section">
      <div className="get-secured-now">
        <div className="card get-secured-card">
          <div className="blur-circle circle1 getsecured-circle1"></div>
          <div className="blur-circle circle2 getsecured-circle2"></div>
          <div className="blur-circle circle3 getsecured-circle3"></div>
        </div>
        <div className="get-secured-content">
          <div className="title-tag blue-tag getsecured-tag">
            <p>Get Secured Now</p>
          </div>
          <h1 className="heading">
            Every company deserves a <span>chance to grow safely.</span>
          </h1>
          <p className="sub-heading">
            Partner with us to protect your business from digital threats. We
            connect you with certified cybersecurity experts — fast, reliable,
            and trusted
          </p>
          <button className="bookconsult-button" onClick={()=>navigate("/consult")}>Book a Consultaion</button>
        </div>
      </div>
    </div>
  );
}
export default BookConsultaion;
