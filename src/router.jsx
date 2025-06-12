import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BookConsultaion from "./pages/BookConsultation";
import EndpointSecurity from "./pages/Services/EndPointSecurity";

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consult" element={<BookConsultaion />} />
          <Route path="/endpoint" element={<EndpointSecurity />} />
        </Routes>
      </Router>
    </div>
  );
}
export default AppRouter;
