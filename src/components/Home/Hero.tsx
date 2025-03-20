"use client";
import { useState, useEffect } from "react";
import { Home, Hotel, House, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "/assets/h1.jpg",
  "/assets/h2.jpg",
  "/assets/herobg.jpg",
  "/assets/herobg3.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hero Background"
            className="w-full h-full object-cover flex-shrink-0"
            style={{ minWidth: "100%" }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Main Container - Added padding for mobile */}
      <div className="z-20 flex flex-col items-center justify-center w-full px-4 md:px-6 space-y-6 md:space-y-8">
        {/* Content Box */}
        <div
          className="flex flex-col items-center justify-center 
          bg-background/5 backdrop-blur-sm w-full sm:w-[90%] md:w-[80%] lg:w-[50%] xl:w-[40%] text-textDark 
          py-6 md:py-8 lg:py-10 px-4 md:px-6 rounded-xl shadow-lg border border-white/20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ltext text-center">
            Find your <span className="text-primary">dream</span> home
          </h2>

          <p className="text-base sm:text-lg lg:text-xl mt-2 text-ltext text-center">
            Search properties by location
          </p>

          {/* Search Bar - Made more responsive */}
          <div
            className="flex flex-wrap items-center gap-2 mt-4 md:mt-6 bg-white/40 rounded-[0.4rem] 
  p-2 w-full relative z-40 text-text backdrop-blur-md"
          >
            <div className="flex items-center flex-1 min-w-[200px]">
              <MapPin
                className="text-ltext ml-1 mr-2 flex-shrink-0"
                size={18}
              />
              <input
                className="w-full font-regular h-10 text-ltext bg-transparent focus:border-0 focus:outline-0 text-sm sm:text-base"
                placeholder="Location"
              />
            </div>
            <button
              className="flex justify-center items-center gap-x-1 bg-primary py-2 px-3 sm:px-4 
    rounded-[0.4rem] text-ltext font-medium whitespace-nowrap text-sm sm:text-base ml-auto"
            >
              <Search size={16} className="mr-1" />
              Search
            </button>
          </div>
        </div>

        {/* Property Type Buttons - Made responsive */}
        <div className="flex flex-row justify-center items-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto text-white bg-primary px-4 sm:px-6 md:px-8 py-2 text-base sm:text-lg md:text-xl font-regular rounded-[0.3rem] flex justify-center items-center gap-x-2"
          >
            <Hotel size={18} className="hidden sm:block" />
            Sales
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto text-white bg-primary px-4 sm:px-6 md:px-8 py-2 text-base sm:text-lg md:text-xl font-regular rounded-[0.3rem] flex justify-center items-center gap-x-2"
          >
            <Home size={18} className="hidden sm:block" />
            Rental
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto text-white bg-primary px-4 sm:px-6 md:px-8 py-2 text-base sm:text-lg md:text-xl font-regular rounded-[0.3rem] flex justify-center items-center gap-x-2"
          >
            <House size={18} className="hidden sm:block" />
            Commercial
          </Link>
        </div>
      </div>

      {/* Slider Indicator Dots */}
      {/* <div className="absolute bottom-6 z-20 flex justify-center items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-primary w-3 md:w-4" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Hero;
