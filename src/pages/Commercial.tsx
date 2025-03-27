import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Mail } from "lucide-react";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Commercial() {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <Navbar />
      <div className="bg-black text-white py-35 px-8 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div>
            <h3 className="text-center md:text-left text-lg uppercase tracking-wide">
              Commercial
            </h3>
            <div className="w-12 h-1 bg-white my-2"></div>
            <h2 className="text-2xl font-bold mt-4">
              Monarch Hill Real Estate: Experts in Commercial Sales & Rentals
            </h2>
            <p className="text-gray-400 mt-4">
              At Monarch Hill Real Estate, our dedicated team specializes in
              commercial real estate sales and rentals, providing end-to-end
              expertise to help businesses and investors make the right property
              decisions.
            </p>
            <p className="text-gray-400 mt-4">
              We take the time to understand our clients’ unique objectives,
              ensuring that every transaction aligns with their business goals
              and long-term vision.
            </p>
            <p className="text-gray-400 mt-4">
              Establishing clear objectives early is essential, as we recognize
              that the right commercial property can drive business growth,
              enhance operations, and maximize investment returns. Our team
              combines in-depth market knowledge with strategic negotiation to
              secure the best deals for our clients.
            </p>
            <p className="text-gray-400 mt-4">
              To ensure seamless leasing and sales experiences, we leverage
              industry insights, cutting-edge marketing, and a client-focused
              approach—helping businesses and investors navigate the commercial
              real estate market with confidence.
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
                <div className="flex-1">
                  <h5 className="text-white font-semibold">John Smith</h5>
                  <p className="text-gray-400 text-sm">Development</p>
                </div>
                <button
                  className="flex justify-center items-center gap-x-2 px-6 py-2 border border-primary text-white rounded-lg"
                  onClick={() => {
                    const phoneNumber = "+1234567890"; // Replace with your WhatsApp number
                    const message = encodeURIComponent(
                      "Hello, I would like to inquire about your commercial services."
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

export default Commercial;
