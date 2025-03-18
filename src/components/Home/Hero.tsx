"use client";
import { useState, useEffect } from "react";
import { MapPin, Search } from "lucide-react";

const images = ["/assets/h1.jpg", "/assets/h2.jpg","/assets/herobg.jpg","/assets/herobg3.jpg"]; // Add more images if needed

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
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

      {/* Content Box */}
      <div className="z-20 flex flex-col items-start md:items-center justify-center 
    bg-background/5 backdrop-blur-sm w-[95vw] lg:w-[40%] text-textDark 
    py-10 px-6 rounded-xl mx-auto mt-50 shadow-lg border border-white/20">
    
    <h2 className="text-3xl lg:text-4xl font-bold text-ltext">
      Find your <span className="text-primary">dream</span> home
    </h2> 

    <p className="text-lg lg:text-xl mt-2 text-ltext">
      Search properties by location
    </p>

    {/* Search Bar */}
    <div className="flex justify-center items-center gap-4 mt-6 bg-white/40 rounded-[0.4rem] 
        p-2 max-w-full relative z-[997] text-text backdrop-blur-md">
        <MapPin className="text-ltext" />
        <input
          className="flex-1 font-regular h-[40px] text-ltext bg-transparent focus:border-0 focus:outline-0"
          placeholder="Location"
        />
        <button className="flex justify-center items-center gap-x-1 bg-primary py-2 px-4 
            rounded-[0.4rem] text-ltext font-medium">
          <Search size={18} />
          Search
        </button>
    </div>
</div>

    </div>
  );
};

export default Hero;
