import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogIn, Menu, User, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [dropdown, setDropdown] = useState("");
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
    {
      name: "Listings",
      subItems: [
        { name: "For Sale", path: "/listings/sale" },
        { name: "For Rent", path: "/listings/rent" },
        { name: "Commercial", path: "/listings/commercial" },
      ],
    },
    {
      name: "About",
      subItems: [
        { name: "Company", path: "/about/company" },
        { name: "Team", path: "/about/team" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`bg-dbackground z-[999] text-ltext fixed w-full top-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          <span className="text-primary">Property</span>App
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative group cursor-pointer text-md font-regular transition-all duration-300 hover:text-primary"
              onMouseEnter={() => item.subItems && setDropdown(item.name)}
              onMouseLeave={() => setDropdown("")}
            >
              <Link to={item.path || "#"} className="flex items-center gap-x-1">
                {item.name}
                {item.subItems && <ChevronDown size={16} />}
              </Link>
              {item.subItems && dropdown === item.name && (
                <ul className="absolute left-0 mt-2 w-40 bg-background shadow-lg rounded-md py-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        to={subItem.path}
                        className="block px-4 py-2 text-sm hover:bg-primary hover:text-white transition"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex justify-center items-center space-x-4">
          <Link
            to="/login"
            className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-x-2 font-medium"
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
              {item.subItems ? (
                <div
                  className="cursor-pointer text-lg font-medium transition-all duration-300 hover:text-primary"
                  onClick={() => setDropdown(dropdown === item.name ? "" : item.name)}
                >
                  {item.name}
                  <ChevronDown size={16} className="inline ml-1" />
                </div>
              ) : (
                <Link to={item.path} className="block py-2 text-lg font-medium hover:text-primary">
                  {item.name}
                </Link>
              )}
              {item.subItems && dropdown === item.name && (
                <ul className="mt-2 space-y-2 bg-background p-2 rounded-md">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        to={subItem.path}
                        className="block px-4 py-2 text-sm hover:bg-primary hover:text-white transition"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
