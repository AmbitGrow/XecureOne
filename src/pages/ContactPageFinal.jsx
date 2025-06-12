import React from "react";
import { useState, useEffect} from "react";
import "../Styles/ContactpageFinal.css";
import { gsap } from "gsap";
import axios from "axios";
import { VscArrowCircleUp } from "react-icons/vsc";
import GetSecured from "../Components/GetSecured";
import Footer from "../Components/Footer";
import Transition from "./Transition";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

function ContactPageFinal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    companyType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/message/post",
        formData
      );

      if (res.status === 200) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          location: "",
          companyType: "",
          message: "",
        });
      } else if (res.status === 207) {
        alert("Failed to Submit try after some times");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert(
        "Something went wrong: " +
          (err.response?.data?.error || "unknown error")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      let ctxs = gsap.context(() => {
        CustomEase.create("hop", "0.6, 0, 0.3, 1");
        const tla = gsap.timeline();
         
          
          tla.to(".about-page-fixed",{
          opacity: 0,
          duration: 0.5,
          ease: "ease",
           display:"none",
          })
          .from(".ap-first-section h1",{
          y: 80,
          opacity: 0,
          duration: 0.5,
          ease: "hop",
          },0.1)
          .from(".ap-first-section h1 span",{
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: "hop",
          },0.6)
           .from(".ap-first-section p",{
             y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },1.1)
          .from(".ap-first-section .btn",{
             y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
          },1.6)
      
  
      });
      return () => ctxs.revert();
    }, []);

useEffect(() => {
  const ctx = gsap.context(() => {


     gsap.from(".cp-second-section", {
            scale: 1.09,
            scrollTrigger: {
              trigger: ".cp-second-section",
              start: "top bottom",
              scrub: 1,
            },
      });
    // Animate contact form fields
    
    gsap.from(".contact-form input, .contact-form textarea", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cp-second-section",
        start: "top 80%",
      },
    });

    // Animate right-side boxes
    gsap.from(".contact-right .right-boxs", {
      scale: 0.8,
      opacity: 0,
      duration: 1.3,
      stagger: 0.4,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".cp-second-section",
        start: "top 80%",
      },
    });

  });

  return () => ctx.revert();
}, []);

  return (
    <div>
      <div className="content-contact">
        <div className="about-page-fixed"></div>
        <div className="contactpage-overall-container">
          <div className="ap-first-section cp-first-section">
            <div>
              <h1>
                Let`s Secure<br></br>
                <span>Your Future, Together.</span>
              </h1>
              <p>
                We value your feedback and are always open to hearing from you.
                Whether you have a question, a suggestion, or just want to say
                hello, we'd love to hear from you.
              </p>
            </div>
            {/* <div className="btn">
              <div className="let-connect-btn">Let`s Connect</div>
            </div> */}
          </div>

          <div className="cp-second-section">
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  <p>Name:</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  <p>Email:</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <div className="contact-row">
                  <label>
                    <p>Where are you from?</p>
                    <input
                      type="text"
                      name="location"
                      placeholder="Your location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                   <p>What’s the type of your company?</p>
                    <input
                      type="text"
                      name="companyType"
                      placeholder="Company type"
                      value={formData.companyType}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <label>
                 <p>Message:</p> 
                  <textarea
                    name="message"
                    placeholder="Type your message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </label>

                <button type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Now"}
                </button>
              </form>
            </div>
            <div className="contact-right-container">
              <div className="contact-right">
                <div className="right-boxs right-box1">
                  <div className="boxs-inside">
                    <div className="box1-over-div-bg over-div-bg"></div>
                    <div className="boxs-profile">
                      <p>Whatsapp</p>
                    </div>
                    <div className="boxs-up-arrow">
                      <VscArrowCircleUp className="boxs-up-arrowicon" />
                    </div>
                  </div>
                </div>
                <div className="right-boxs right-box1">
                  <div className="boxs-inside">
                    <div className="box1-over-div-bg over-div-bg"></div>
                    <div className="boxs-profile">
                      <p>Whatsapp</p>
                    </div>
                    <div className="boxs-up-arrow">
                      <VscArrowCircleUp className="boxs-up-arrowicon" />
                    </div>
                  </div>
                </div>
                <div className="right-boxs right-box1">
                  <div className="boxs-inside">
                    <div className="box1-over-div-bg over-div-bg"></div>
                    <div className="boxs-profile">
                      <p>Whatsapp</p>
                    </div>
                    <div className="boxs-up-arrow">
                      <VscArrowCircleUp className="boxs-up-arrowicon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cp-third-section">
            <GetSecured />
          </div>
        </div>
        <div className="cp-fourth-section">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Transition(ContactPageFinal);
