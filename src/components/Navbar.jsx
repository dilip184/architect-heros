import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold text-2xl text-primary"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              AH
            </div>
            <span>ArchitectHeros</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors flex items-center">
                Services
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              <motion.div
                className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                variants={menuVariants}
              >
                <Link
                  to="/services"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg"
                >
                  All Services
                </Link>
                <Link
                  to="/architecture"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50"
                >
                  Architecture
                </Link>
                <Link
                  to="/mep"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50"
                >
                  MEP Engineering
                </Link>
                <Link
                  to="/scan-to-bim"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg"
                >
                  Scan to BIM
                </Link>
              </motion.div>
            </div>

            <Link
              to="/why-us"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Why Us
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link to="/book-call" className="btn-primary">
              Book A Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          >
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-opacity ${isOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
            >
              Home
            </Link>

            <button
              onClick={toggleServices}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg flex justify-between items-center"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>

            {isServicesOpen && (
              <div className="pl-4 space-y-2">
                <Link
                  to="/services"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg text-sm"
                >
                  All Services
                </Link>
                <Link
                  to="/architecture"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg text-sm"
                >
                  Architecture
                </Link>
                <Link
                  to="/mep"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg text-sm"
                >
                  MEP Engineering
                </Link>
                <Link
                  to="/scan-to-bim"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-lg text-sm"
                >
                  Scan to BIM
                </Link>
              </div>
            )}

            <Link
              to="/why-us"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
            >
              Why Us
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
            >
              About
            </Link>
            <Link
              to="/book-call"
              className="block px-4 py-2 btn-primary text-center"
            >
              Book A Call
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
