import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Mail } from "lucide-react";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sales() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <Navbar />
    <div className="bg-black text-white py-35 px-8 lg:px-20 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Content */}
        <div>
          <h3 className="text-center md:text-left text-lg uppercase tracking-wide">
            Sales Services
          </h3>
          <div className="w-12 h-1 bg-white my-2"></div>
          <h2 className="text-2xl font-bold mt-4">
            Monarch Hill Real Estate Sales Team: Expertise That Drives Success
          </h2>
          <p className="text-gray-400 mt-4">
            At Monarch Hill Real Estate, our Sales Team provides end-to-end
            solutions and expert guidance to help our clients achieve their real
            estate goals.
          </p>
          <p className="text-gray-400 mt-4">
            We focus on understanding our clients' unique needs and aspirations,
            ensuring that every strategy we develop aligns with their investment
            and lifestyle ambitions.
          </p>
          <p className="text-gray-400 mt-4">
            Defining these objectives early on is a top priority, as we
            recognize that buying, selling, or investing in real estate is a
            significant decision. Our team understands the power of market
            knowledge, personalized service, and strategic negotiation in
            securing the best outcomes for our clients.
          </p>
          <p className="text-gray-400 mt-4">
            To ensure seamless transactions and maximize value, we leverage our
            deep industry expertise, cutting-edge insights, and a client-first
            approach—helping you make confident real estate decisions every step
            of the way.
          </p>
        </div>

        {/* Right Side - Buttons & Expert Section */}
        <div className="flex flex-col items-end">
          <Link
            to="/contact"
            className="w-full bg-primary hover:bg-primary/80 text-white text-lg font-semibold py-3 rounded-lg text-center flex justify-center items-center gap-2"
          >
            Get in Touch <Mail />
          </Link>

          {/* Talk to an Expert */}
          <div className="mt-8 w-full">
            <h4 className="italic text-gray-400 text-lg mb-4 text-center md:text-left">
              Talk to an expert
            </h4>

            {/* Expert 1 */}
            <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg">
              {/* <img
                src="https://via.placeholder.com/50"
                alt="Expert"
                className="w-12 h-12 rounded-full"
              /> */}
              <div className="flex-1">
                <h5 className="text-white font-semibold">John Smith</h5>
                <p className="text-gray-400 text-sm">Development</p>
              </div>
              <button
                className="flex justify-center items-center gap-x-2 px-6 py-2 border border-primary text-white rounded-lg"
                onClick={() => {
                  const phoneNumber = "+1234567890"; // Replace with your WhatsApp number
                  const message = encodeURIComponent(
                    "Hello, I would like to inquire about your rental services."
                  );
                  window.open(
                    `https://wa.me/${phoneNumber}?text=${message}`,
                    "_blank"
                  );
                }}
              >
                <FaWhatsapp /> Contact
              </button>
            </div>

  
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Sales;
