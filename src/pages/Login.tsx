import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    {/* <Navbar/> */}
    <div
      className="relative flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/herobg5.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative flex w-full min-h-screen justify-between items-center px-12">
        {/* Left Side Content with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:flex flex-col justify-center items-start w-2/3 text-white"
        >
          {/* Company Logo */}
          {/* <img src="/assets/logo.png" alt="Company Logo" className="w-40 mb-6" /> */}

          {/* Welcome Text */}
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg">
            Sign in to manage your account, track orders, and explore more.
          </p>

          {/* Quote */}
          <blockquote className="mt-6 text-xl italic border-l-4 border-white pl-4">
            "Your partners in property; when you move, so do we."
          </blockquote>
        </motion.div>

        {/* Login Form */}
        <div className="relative flex justify-center items-center w-full lg:w-1/3 ">
          <div className="bg-white p-10 shadow-lg rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-left text-gray-800">
              Sign In
            </h2>
            <form className="mt-6">
              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 focus:outline-0 focus:border-0"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 focus:outline-0 focus:border-0"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Forgot Password & Login Button */}
              <div className="flex justify-between text-sm text-gray-600">
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password?
                </button>
                <a href="/signup" className="text-primary hover:underline">
                  Create Account
                </a>
              </div>

              <Button className="mt-4 w-full text-ltext font-medium">
                Login
              </Button>
            </form>

            {/* Terms & Privacy Notice */}
            <p className="mt-4 text-xs text-gray-500 text-left">
              By signing in, you agree to our{" "}
              <a href="#" className="text-primary underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary underline">
                Privacy Policy
              </a>
              . This site is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="text-primary underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary underline">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us Button */}
      {/* <button
        onClick={() => setShowContact(true)}
        className="fixed bottom-6 right-6 bg-primary text-white px-4 py-2 rounded-full shadow-lg"
      >
        Need Help?
      </button> */}

      {/* Contact Popup */}
      {showContact && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl font-semibold text-gray-800">Need Help?</h2>
            <p className="mt-2 text-gray-600">
              Contact our support team at support@example.com
            </p>
            <button
              onClick={() => setShowContact(false)}
              className="mt-4 bg-primary text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default Login;
