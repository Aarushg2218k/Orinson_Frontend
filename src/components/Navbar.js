import React, { useState, useEffect, useRef } from "react";
import logo from "../pics/LOGO.png";
import { SignupModal } from "../Modals/Signup";  // Ensure the path is correct
import { LoginModal } from "../Modals/Login";    // Import the LoginModal

export function NavbarDefault() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for Login Modal
  const [carouselOffset, setCarouselOffset] = useState(0); // State for Carousel Offset
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setCarouselOffset(!isOpen ? 80 : 0); // Adjust offset based on menu state
  };

  // Close the menu if a click is detected outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setCarouselOffset(0); // Reset offset if menu is closed
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-gray-800 shadow-md rounded-b-xl relative z-40">
        <div className="container mx-auto flex items-center justify-between md:py-4 px-4">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Company Logo" className="md:h-12 md:w-12 h-6 w-6" />
            <span className="text-amber-100 md:text-3xl text-sm font-bold">ShopNest</span>
          </div>

          {/* Navigation Links for Large Screens */}
          <div className="hidden lg:flex flex-1 items-center justify-end space-x-6">
            <button
              className="text-blue bg-amber-100 hover:bg-amber-200 px-4 py-2 rounded-lg transition duration-300"
              onClick={() => setIsSignupOpen(true)}
            >
              Sign Up
            </button>
            <button
              className="text-blue bg-amber-100 hover:bg-amber-200 px-4 py-2 rounded-lg transition duration-300"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-gray-700 p-2 rounded-lg"
            >
              {isOpen ? (
                <></>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-16 left-0 right-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black z-30 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
        style={{ height: "100px" }} // Adjust height based on content
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsOpen(false);
            setCarouselOffset(0); // Reset offset when menu closes
          }}
          className="absolute top-4 right-4 text-white hover:bg-gray-700 p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Menu Items */}
        <div className="flex items-center justify-center h-full my-2 space-x-6">
          <button
            className="text-white border-2 border-white px-4 py-2 rounded-lg shadow-md transition duration-300"
            onClick={() => {
              setIsOpen(false);
              setIsSignupOpen(true);
            }}
          >
            Sign Up
          </button>
          <button
            className="text-white border-2 border-white px-4 py-2 rounded-lg shadow-md transition duration-300"
            onClick={() => {
              setIsOpen(false);
              setIsLoginOpen(true);
            }}
          >
            Login
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="carousel-container"
        style={{ marginTop: `${carouselOffset}px` }} // Adjust margin-top based on the menu state
      >
        {/* Your carousel code here */}
      </div>

      {/* Modals */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
