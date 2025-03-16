import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Navbar/>
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-100">
        <img 
          src="/assets/herobg6.jpg" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover brightness-75" 
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Let's Connect</h1>
          <p className="text-lg mt-2">We’re here to help and answer any questions you have.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full py-16 px-6 lg:px-20 bg-white">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 mt-4">
              Whether you have a question, want to collaborate, or just want to say hi,
              we'd love to hear from you!
            </p>

            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-4">
                <FaPhone className="text-primary text-2xl" />
                <p className="text-gray-800">+1 234 567 890</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-2xl" />
                <p className="text-gray-800">contact@yourcompany.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <p className="text-gray-800">1234 Street, City, Country</p>
              </div>
              <div className="flex items-center gap-4">
                <FaClock className="text-primary text-2xl" />
                <p className="text-gray-800">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

        
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-gray-900 text-center">Any Query?</h2>
            <p className="text-gray-600 text-center mb-6">We typically respond within 24 hours.</p>

            <form className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white border-gray-300 focus:ring-primary"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white border-gray-300 focus:ring-primary"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-white border-gray-300 focus:ring-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 transition">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
