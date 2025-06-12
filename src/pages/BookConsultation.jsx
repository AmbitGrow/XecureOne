import React from "react";
import Header from "../Components/Header";
import "../styles/BookConsultation.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";

const purposeOptions = [
  { value: "general", label: "General Meeting" },
  { value: "technical", label: "Technical Support" },
  { value: "feedback", label: "Feedback" },
  { value: "explore", label: "Explore Service" },
  { value: "other", label: "Other" },
];

function bookConsult() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [otherPurpose, setOtherPurpose] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalPurpose = purpose === "other" ? otherPurpose : purpose;

    if (!finalPurpose || !dateTime) {
      alert("Please complete all required fields");
      return;
    }

    const formattedDate = dateTime.toISOString().split("T")[0];
    const formattedTime = dateTime.toTimeString().split(" ")[0].slice(0, 5); // HH:mm

    const payload = {
      name,
      email,
      purpose: finalPurpose,
      date: formattedDate,
      time: formattedTime,
      message,
    };

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Appointment submitted successfully!");
        setName("");
        setEmail("");
        setPurpose("");
        setOtherPurpose("");
        setDateTime(null);
        setMessage("");
      } else {
        alert(" Submission failed: " + (data.error || "Try again later"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(" Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background-content">
      <div className="background">
        <div className="content">
          <Header />
          <div className="book-consult-overall-container">
            <div className="book-consult-first-section">
              <div>
                <button className="xecure-btn">Shedule a Meet</button>
                <h1>
                  Get Secure Now
                  <br />
                  <span>Every company deserves a chance to grow safely.</span>
                </h1>
                <p>
                  Partner with us to protect your business from digital threats.
                  We connect you with certified cybersecurity experts — fast,
                  reliable, and trusted{" "}
                </p>
              </div>
            </div>
            <div>
              {/* <form className="consultation-form">
                <div className="form-group">
                  <label>Name :</label>
                  <input type="text" className="form-input" required />
                </div>
                <div className="form-group">
                  <label>Email :</label>
                  <input type="email" className="form-input" required />
                </div>
                <div className="form-row">
                  <div className="form-group half">
                    <label>Purpose</label>
                    <select
                      className="form-input-purpose"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select purpose
                      </option>
                      {purposeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {purpose === "other" && (
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Please specify"
                        value={otherPurpose}
                        onChange={(e) => setOtherPurpose(e.target.value)}
                        required
                      />
                    )}
                  </div>
                  <div className="form-group half">
                    <label>Date & Time</label>
                    <DatePicker
                      selected={dateTime}
                      onChange={setDateTime}
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                      minDate={new Date()}
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message :</label>
                  <textarea className="form-input textarea" />
                </div>
                <button type="submit" className="submit-btn">
                  Submit Now
                </button>
              </form> */}
              <form className="consultation-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name :</label>
                  <input
                    type="text"
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email :</label>
                  <input
                    type="email"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group half">
                    <label>Purpose</label>
                    <select
                      className="form-input-purpose"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select purpose
                      </option>
                      {purposeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {purpose === "other" && (
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Please specify"
                        value={otherPurpose}
                        onChange={(e) => setOtherPurpose(e.target.value)}
                        required
                      />
                    )}
                  </div>
                  <div className="form-group half">
                    <label>Date & Time</label>
                    <DatePicker
                      selected={dateTime}
                      onChange={setDateTime}
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                      minDate={new Date()}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message :</label>
                  <textarea
                    className="form-input textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default bookConsult;
