import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dbackground text-white ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div>
            {/* <h2 className="text-2xl font-bold text-primary">Monarch Hill Real Estate</h2> */}
            <img src={"/assets/logo.jpeg"} alt={"logo"} className="w-[200px]" />
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
              <li>📞 +971 123 456 789</li>
              <li>✉ support@monarchrealestate.com</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm mt-2">
              Subscribe to get the latest property updates and exclusive deals.
            </p>
            <div className="flex mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md bg-dbackground text-white border border-gray-600 focus:border-primary outline-none"
              />
              <button className="bg-primary px-4 py-2 rounded-r-md hover:bg-white hover:text-primary transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">&copy; 2025 Monarch Hill Real Estate. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
