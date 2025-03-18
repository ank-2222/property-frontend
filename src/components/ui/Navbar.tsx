import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogIn, Menu, User, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/listings" },
    { name: "Our Story", path: "/about" },
    { name: "get in touch", path: "/contact" },
  ];
  const handleScrollToAdvertise = () => {
    const element = document.getElementById("advertise");
    if (element) {
      const offset = 80; // Adjust as needed
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <nav
      className={`bg-dbackground z-[999] text-ltext fixed w-full top-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-wide text-primary">
        Monarch Hill Real Estate
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative cursor-pointer text-md font-regular transition-all duration-300 hover:text-primary"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          {/* Dropdown Button */}
          <li
            className="relative cursor-pointer text-md font-regular transition-all duration-300 hover:text-primary"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <div className="flex items-center gap-x-1">
              More <ChevronDown size={16} />
            </div>
            {/* Dropdown Content */}
            <ul
              className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-background shadow-lg rounded-md py-2 transition-all duration-300 ${
                dropdown ? "top-full opacity-100 visible" : "top-0 opacity-0 invisible"
              }`}
            >
              <li>
                <button
                  // to="/services"
                  // href="#advertise"
                  onClick={handleScrollToAdvertise}
                  className="block px-4 py-2 text-sm text-left hover:bg-primary hover:text-white transition"
                >
                  Advertise Your Property
                </button>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-sm hover:bg-primary hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="block px-4 py-2 text-sm hover:bg-primary hover:text-white transition"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex justify-center items-center space-x-4">
          <Link
            to="/login"
            className="bg-transparent border-2 border-primary hover:bg-primary transition-all ease-in-out duration-300 text-white px-4 py-2 rounded-md flex items-center gap-x-2 font-medium"
          >
            Log In <LogIn size={20} />
          </Link>
          <Link
            to="/signup"
            className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-x-2 font-medium"
          >
            Sign Up <User size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-dbackground text-text flex flex-col items-center space-y-4 py-4 border-t">
          {menuItems.map((item) => (
            <li key={item.name} className="w-full text-center">
              <Link to={item.path} className="block py-2 text-lg font-medium hover:text-primary">
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/services"
              className="block py-2 text-lg font-medium hover:text-primary"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="block py-2 text-lg font-medium hover:text-primary"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="block py-2 text-lg font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
