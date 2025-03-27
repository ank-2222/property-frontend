import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Mail } from "lucide-react";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Rental() {
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
              Rental
            </h3>
            <div className="w-12 h-1 bg-white my-2"></div>
            <h2 className="text-2xl font-bold mt-4">
              Monarch Hill Real Estate: Experts in Commercial Property Rentals
            </h2>
            <p className="text-gray-400 mt-4">
              At Monarch Hill Real Estate, our team specializes in commercial
              property rentals, offering expert guidance to help businesses find
              the perfect space to thrive.
            </p>
            <p className="text-gray-400 mt-4">
              We take the time to understand our clients’ specific needs,
              ensuring that every lease aligns with their operational goals,
              budget, and long-term vision.
            </p>
            <p className="text-gray-400 mt-4">
              Securing the right rental space is a crucial decision, as the
              right location and property can enhance productivity, attract
              customers, and support business growth. Our team leverages deep
              market insights and strategic negotiation to secure the best
              leasing terms for our clients.
            </p>
            <p className="text-gray-400 mt-4">
              To make the leasing process seamless and stress-free, we provide
              expert advice, access to prime commercial listings, and a
              client-first approach—helping businesses confidently establish
              their presence in the right location.
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

export default Rental;
