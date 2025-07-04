import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./button";
// import { RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";
import EvaluateForm from "../Home/EvaluateForm";
import Logo from "./logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      // Hide/show navbar based on scroll direction
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Control transparency - only on homepage
      if (isHomePage) {
        // Make navbar transparent when at top of page (hero section)
        if (window.scrollY < 100) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
      } else {
        // Always solid on other pages
        setIsTransparent(false);
      }
      
      lastScrollY = window.scrollY;
    };

    // Set initial transparency state
    if (isHomePage && window.scrollY < 100) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Get in Touch", path: "/contact" },
  ];

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (id: any) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScrollToSection = (id: any) => {
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
      className={`fixed w-full top-0 z-[40] transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isTransparent 
          ? "bg-transparent text-white" 
          : "bg-dbackground text-ltext shadow-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-2 md:px-6 py-6 md:py-4">
        {/* Logo */}
        <Logo size="xs" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
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
              className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-dbackground text-ltext shadow-lg rounded-md py-2 transition-all duration-100 ${
                dropdown
                  ? "top-full opacity-100 visible"
                  : "top-0 opacity-0 invisible"
              }`}
            >
              <li>
                <button
                  onClick={() => handleScrollToSection("advertise")}
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-primary hover:text-white transition"
                >
                  Advertise My Property
                </button>
              </li>
              <li>
                <Link
                  to="/blogs"
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
        <div className="hidden lg:flex justify-center items-end space-x-4">
          {/* Wobbling Button */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -3, 3, -1, 1, 0] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <button
              onClick={() => setIsPopUpOpen(true)}
              className={`font-regular border-2 border-primary hover:bg-primary hover:text-white text-md font-semibold rounded-full px-5 py-2 transition-colors duration-200 ${
                isTransparent ? "bg-transparent text-white" : "bg-transparent"
              }`}
            >
              Evaluate My Property
            </button>
            <EvaluateForm isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3 ">
          <button className={isTransparent ? "text-white" : "text-primary"} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Overlay - Moved overlay to render before the sidebar to fix z-index stacking */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[50] lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] lg:hidden bg-dbackground shadow-xl z-[60] overflow-y-auto transform transition-transform duration-300 ease-in-out ${
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
                      className={`transform transition-transform ${
                        mobileSubmenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu */}
                  <div
                    className={`pl-4 space-y-3 transition-all ${
                      mobileSubmenuOpen ? "block" : "hidden"
                    }`}
                  >
                    <button
                      onClick={() => handleScrollToSection("advertise")}
                      className="block w-full text-left text-lg hover:text-primary transition-colors"
                    >
                      Advertise My Property
                    </button>
                    <Link
                      to="/blogs"
                      className="block text-lg hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Blogs
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
                onClick={() => {
                  setIsPopUpOpen(true);
                  setIsOpen(false);
                }}
              >
                Evaluate My Property
              </Button>
              <EvaluateForm isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;