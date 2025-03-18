import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Monarch Real Estate</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Discover premium real estate options with us. Your dream home is just a click away.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">Explore Listings</a></li>
              <li><a href="#" className="hover:text-primary">Our Agents</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-3 space-y-2 text-gray-400 text-sm">
              <li>📍 Dubai, UAE</li>
              <li>📞 +971 123 456 789</li>
              <li>✉ support@spotEstate.com</li>
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
                className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white border border-gray-600 focus:border-primary outline-none"
              />
              <button className="bg-primary px-4 py-2 rounded-r-md hover:bg-white hover:text-primary transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">&copy; 2025 Monarch Real Estate. All rights reserved.</p>
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
