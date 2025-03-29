import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
// import Project from "./pages/Project";
import Properties from "./pages/Properties";
import ViewBlog from "./pages/ViewBlog";
import BlogList from "./pages/BlogList";
// import Sales from "./pages/Sales";
// import Rental from "./pages/Rental";
// import Commercial from "./pages/Commercial";
import PrivacyPolicy from "./pages/Privacypolicy";
import Faq from "./pages/Faq";

function App() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Show prompt after 5 seconds
    const showTimer = setTimeout(() => {
      setShowPrompt(true);

      // Auto-hide after 5 more seconds
      const hideTimer = setTimeout(() => {
        setShowPrompt(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }, 5000);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/project" element={<Project />} /> */}
        <Route path="/properties" element={<Properties />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<ViewBlog />} />
        {/* <Route path="/sales" element={<Sales />} /> */}
        {/* <Route path="/rental" element={<Rental />} /> */}
        {/* <Route path="/commercial" element={<Commercial />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-5 right-5 flex items-center z-50">
        {/* Chat Prompt (Slides in and out) */}
        {showPrompt && (
          <div className="bg-white shadow-lg border border-gray-200 p-3 rounded-full flex items-center gap-3 animate-slide-in transition-all duration-500">
            <p className="text-sm text-gray-800">Need help? Chat with us!</p>
            <button
              onClick={() => setShowPrompt(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={14} />
            </button>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/yourwhatsappnumber"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
}

export default App;
