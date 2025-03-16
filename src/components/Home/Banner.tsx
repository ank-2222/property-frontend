import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[350px] flex items-center justify-center text-center px-4 my-20"
      style={{ backgroundImage: "url('/assets/herobg5.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-white max-w-2xl flex flex-col justify-center items-center">
        <h2 className="text-lg md:text-xl font-medium">
          Elevate Your Living Experience in the UAE
        </h2>
        <p className="text-sm mt-2 text-gray-300">
          Discover premium properties in Dubai & Abu Dhabi with expert guidance.
        </p>

        <button className="mt-4 bg-primary text-white text-sm font-medium py-2 px-5 rounded-md flex items-center gap-x-2 hover:bg-accent transition">
          View Listings <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Banner;
