// // src/components/ContactForm.jsx
// import { useState } from "react";
// import axios from "axios";
// import "./ContactForm.css";

// function ContactForm() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       await axios.post("http://localhost:5000/api/contact", formData);
//       setStatus("Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Error:", error);
//       setStatus("Failed to send message.");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="6"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>
//         <button type="submit">Send Message</button>
//         {status && <p className="status">{status}</p>}
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
