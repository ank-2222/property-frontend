import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";

const phrases = [
  "Find Your Dream Home",
  "Invest in Your Future",
  "Discover Luxury Living",
  "Your Perfect Property Awaits",
];

const Hero2 = () => {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentPhrase((prev) => {
          const nextIndex = (phrases.indexOf(prev) + 1) % phrases.length;
          return phrases[nextIndex];
        });
        setFade(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] bg-dbackground ">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row  justify-center items-end h-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left py-10 flex flex-col justify-end items-left overflow-visible">
          <motion.h1
            key={currentPhrase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-ltext"
          >
            {currentPhrase.split(" ").map((word, index) => (
              <span key={index} className={index === 2 ? "text-primary" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>


          <p className="mt-6 text-lg 2xl:text-2xl 3xl:text-3xl text-ltext font-regular">
            Unlock <span className="text-primary ">exclusive properties</span>{" "}
            in prime locations – Your dream home awaits!
          </p>
          
          {/* Search Bar */}
          <div className="flex justify-center items-center gap-4 mt-6 bg-background rounded-[0.4rem] p-2 max-w-full relative z-[997]">
            <MapPin />
            <input
              className="flex-1 h-[40px] bg-background focus:border-0 focus:outline-0 "
              placeholder="Location"
            />
            <button className="flex justify-center items-center gap-x-1 bg-secondary py-2 px-4 rounded-[0.4rem] text-text ">
              <Search size={18} />
              Search
            </button>
          </div>

          {/* Property Stats */}
          <div className="mt-8 flex justify-center md:justify-start gap-6 text-ltext">
            <div>
              <h3 className="text-2xl 2xl:text-3xl 3xl:text-4xl font-bold text-primary">1200+</h3>
              <p className="text-sm">Properties Listed</p>
            </div>
            <div>
              <h3 className="text-2xl 2xl:text-3xl 3xl:text-4xl font-bold text-primary">300+</h3>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-2xl 2xl:text-3xl 3xl:text-4xl font-bold text-primary">10+</h3>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Parallax Image */}
        <div className="w-full md:w-1/2 relative ">
          <img
            src="/assets/herobg6.webp"
            alt="Luxury Home"
            className="max-w-[450px]  2xl:max-w-[500px] 3xl:max-w-[800px]  rounded-t-full bg-background shadow-2xl shadow-dbackground absolute -bottom-15 left-10 xl:left-30 z-[998] "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
