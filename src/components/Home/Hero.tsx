"use client";
import { useState, useEffect } from "react";
import { Home, Hotel,  MapPin, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  // "/assets/hero1.webp",
  // "/assets/hero2.webp",
  // "/assets/hero3.webp",
  // "/assets/hero4.webp",
  "/assets/img2.webp",
  "/assets/img3.webp",
  "/assets/img4.webp",
  "/assets/img1.webp",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsLoaded] = useState(false);
  const navigate = useNavigate();
 const [location, setLocation] = useState('');
  useEffect(() => {
    // Set loaded state after a small delay to ensure smooth initial animation
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    
    return () => {
      clearInterval(interval);
      clearTimeout(loadTimer);
    };
  }, []);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const handleLocationSearch = (e:any) => {
    e.preventDefault();
    navigate(`/properties?location=${location}`);
  }
  return (
    <motion.div 
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image Slider with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={images[currentIndex]}
            alt="Hero Background"
            className="w-full h-full object-cover lg:object-fill aspect-video  "
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      ></motion.div>

      {/* Main Container - Added padding for mobile */}
      <div className="z-20 flex flex-col items-center justify-center w-full px-4 md:px-6 space-y-6 md:space-y-8">
        {/* Content Box with staggered animations */}
        <motion.div
          className="flex flex-col items-center justify-center 
          bg-background/5 backdrop-blur-sm w-full sm:w-[90%] md:w-[80%] lg:w-[50%] xl:w-[40%] text-textDark 
          py-6 md:py-8 lg:py-10 px-4 md:px-6 rounded-xl shadow-lg border border-white/20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ltext text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Find your <motion.span 
              className="text-dbackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >dream</motion.span> home
          </motion.h2>

          <motion.p 
            className="text-base sm:text-lg lg:text-xl mt-2 text-ltext text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Search properties by location
          </motion.p>

          {/* Search Bar with animation */}
          <motion.div
            className="flex flex-wrap items-center gap-2 mt-4 md:mt-6 bg-white/40 rounded-[0.4rem] 
  p-2 w-full relative z-40 text-text backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="flex items-center flex-1 min-w-[200px]">
              <MapPin
                className="text-dbackground ml-1 mr-2 flex-shrink-0"
                size={18}
              />
              <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
                className="w-full font-regular h-10 text-dbackground font-semibold bg-transparent focus:border-0 focus:outline-0 text-sm sm:text-base"
                placeholder="Location"
              />
            </div>
            <motion.button
              className="flex justify-center items-center gap-x-1 bg-dbackground py-2 px-3 sm:px-4 
                rounded-[0.4rem] text-ltext font-medium whitespace-nowrap text-sm sm:text-base ml-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleLocationSearch}
            >
              <Search size={16} className="mr-1" />
              Search
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Property Type Buttons with staggered animations */}
        <motion.div 
          className=" flex-row justify-center items-center gap-3 sm:gap-4 flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          {[
            { to: "/properties?listing_type=sale", icon: <Hotel size={18} />, text: "Sales" },
            { to: "/properties?listing_type=rent", icon: <Home size={18} />, text: "Rental" },
            // { to: "/commercial", icon: <House size={18} />, text: "Commercial" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.8 + index * 0.15 }}
            >
              <Link
                to={item.to}
                className="flex justify-center items-center gap-x-1 bg-primary/50 border-2 rounded-full py-2 px-3 sm:px-4 
                border-primary  S text-ltext font-medium whitespace-nowrap text-sm sm:text-base"
              >
                <motion.span 
                  // className="hidden sm:block"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 2 + index * 0.15 
                  }}
                >
                  {item.icon}
                </motion.span>
                {item.text}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      
    </motion.div>
  );
};

export default Hero;