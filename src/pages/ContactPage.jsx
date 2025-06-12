import React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import "../Styles/ContactPage.css";
import BookConsultaion from "../Components/BookConsultation";

function ContactPage() {
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
        "http://localhost:5000/api/contact/post",
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

  return (
    <div className="background-content">
      <div className="background">
        <div className="content">
          <Header />
          <div className="contactpage-overall-container">
            <div className="cp-first-section">
              <div>
                <button className="xecure-btn">Let's Make Connection</button>
                <h1>
                  Let’s Secure
                  <br />
                  <span>Your Future, Together.</span>
                </h1>
                <p>
                  We value your feedback and are always open to hearing from
                  you. Whether you have a question, a suggestion, or just want
                  to say hello, we'd love to hear from you.
                </p>
              </div>
            </div>
            <div className="contact-bg">
              <div className="contact-container">
                {/* Glassmorphism Form */}
                {/* <form className="contact-form">
                  <label>
                    Name :
                    <input type="text" placeholder="Enter your name" />
                  </label>
                  <label>
                    Email :
                    <input type="email" placeholder="Enter your email" />
                  </label>
                  <div className="contact-row">
                    <label>
                      Where are you from?
                      <input type="text" placeholder="Your location" />
                    </label>
                    <label>
                      What`s the type of your company?
                      <input type="text" placeholder="Company type" />
                    </label>
                  </div>
                  <label>
                    Message :
                    <textarea placeholder="Type your message" rows={4} />
                  </label>
                  <button type="submit">Submit Now</button>
                </form> */}
                <form className="contact-form" onSubmit={handleSubmit}>
                  <label>
                    Name:
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
                    Email:
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
                      Where are you from?
                      <input
                        type="text"
                        name="location"
                        placeholder="Your location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      What’s the type of your company?
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
                    Message:
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

                <div className="contact-cards">
                  <div className="contact-card">
                    <button className="close-btn" aria-label="close">
                      ×
                    </button>
                    <div className="card-content">Whatsapp</div>
                  </div>
                  <div className="contact-card">
                    <button className="close-btn" aria-label="close">
                      ×
                    </button>
                    <div className="card-content">Whatsapp</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {""}
              <BookConsultaion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
