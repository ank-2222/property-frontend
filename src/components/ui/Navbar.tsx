import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./button";
import { RiWhatsappFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/listings" },
    { name: "Get in Touch", path: "/contact" },
  ];

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (id:any) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScrollToSection = (id:any) => {
    setIsOpen(false); // Close mobile menu
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav
      className={`bg-dbackground z-[40] text-ltext fixed w-full top-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-2 md:px-6 py-6 md:py-4">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-semibold tracking-wide text-primary">
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
          <li
            onClick={() => handleScrollToSection("ourstory")}
            className="relative cursor-pointer text-md font-regular transition-all duration-300 hover:text-primary"
          >
            Our Story
          </li>
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
              className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-dbackground shadow-lg rounded-md py-2 transition-all duration-100 ${
                dropdown ? "top-full opacity-100 visible" : "top-0 opacity-0 invisible"
              }`}
            >
              <li>
                <button
                  onClick={() => handleScrollToSection("advertise")}
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-primary hover:text-white transition"
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

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex justify-center items-end space-x-4">
          <Button className="font-regular text-lg">
            Evaluate my Property
          </Button>
          <RiWhatsappFill className="text-green-600 text-4xl border-2 rounded-[0.4rem] p-1" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3 ">
          <RiWhatsappFill className="text-green-600 text-3xl" />
          <button className="text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Overlay - Moved overlay to render before the sidebar to fix z-index stacking */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[50] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[80%] md:hidden bg-dbackground shadow-xl z-[60] overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-primary">Menu</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} className="text-ltext" />
            </button>
          </div>
          
          {/* Navigation Items */}
          <div className="space-y-6">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="block text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              
              <li>
                <button 
                  onClick={() => handleScrollToSection("ourstory")}
                  className="block text-lg font-medium hover:text-primary transition-colors text-left w-full"
                >
                  Our Story
                </button>
              </li>
              
              {/* More Menu Accordion */}
              <li>
                <div className="space-y-3">
                  <button 
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors"
                  >
                    More
                    <ChevronDown 
                      size={18} 
                      className={`transform transition-transform ${mobileSubmenuOpen ? "rotate-180" : ""}`} 
                    />
                  </button>
                  
                  {/* Submenu */}
                  <div className={`pl-4 space-y-3 transition-all ${mobileSubmenuOpen ? "block" : "hidden"}`}>
                    <button
                      onClick={() => handleScrollToSection("advertise")}
                      className="block w-full text-left text-lg hover:text-primary transition-colors"
                    >
                      Advertise Your Property
                    </button>
                    <Link
                      to="/blog"
                      className="block text-lg hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      to="/faq"
                      className="block text-lg hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            
            {/* CTA Button in Mobile Menu */}
            <div className="pt-4">
              <Button 
                className="w-full text-center font-regular text-base py-3"
                onClick={() => setIsOpen(false)}
              >
                Evaluate my Property
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;