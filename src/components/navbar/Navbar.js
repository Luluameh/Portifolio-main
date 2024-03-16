import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

const handleHomeClick = () => {
  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: "smooth" });
  }
};


  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleServiceClick = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
   const handleExprienceClick = () => {
     const exprienceSection = document.getElementById("exprience");
     if (exprienceSection) {
       exprienceSection.scrollIntoView({ behavior: "smooth" });
     }
   };
    const handlePortfolioClick = () => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <nav className="bg-gray-800 fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold">
              Your Logo
            </Link>
          </div>
          <div className="hidden md:block flex-grow justify-end">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleHomeClick}
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={handleAboutClick}
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={handleServiceClick}
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Service
              </button>
              <button
                onClick={handleExprienceClick}
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfolio
              </button>

              <button
                onClick={handlePortfolioClick}
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Exprience
              </button>

              <Link
                to="/contact"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          {/** here the handbugger */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <button
              onClick={handleAboutClick}
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={handleServiceClick}
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Service
            </button>
            <button
              onClick={handleExprienceClick}
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Exprience
            </button>
            {/* Add more links as needed */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
