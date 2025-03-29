import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-dbackground text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="flex flex-col items-start gap-y-4">
            <Logo size="xs" />
            <p className="text-gray-400 mt-2 text-sm">
              Discover premium real estate options with us. Your dream home is just a click away.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary">Privacy policy</Link></li>
              <li><Link to="/properties" className="hover:text-primary">Properties</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-3 space-y-2 text-gray-400 text-sm">
              <li>📍 Dubai, UAE</li>
              <li>📞 +971501166808</li>
              <li>✉ info@monarchhillrealestate.com</li>
            </ul>
          </div>

          {/* Social Media Section (replacing Newsletter) */}
          <div>
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <p className="text-gray-400 text-sm mt-2">
              Follow us on social media for updates and exclusive property listings.
            </p>
            <div className="flex mt-4 space-x-4">
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-primary transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center text-white"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-primary transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center text-white"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://www.instagram.com/monarchhillrealestate?igsh=MWs3aHQzMmcwd2k0Nw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-primary transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center text-white"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-primary transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">&copy; 2025 Monarch Hill Real Estate. All rights reserved.</p>
          {/* Removed duplicate social icons from here since we now have them in the main grid */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;