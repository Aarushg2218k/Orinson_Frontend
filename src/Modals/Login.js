// LoginModal.js
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { LoginController } from '../services/Controllers/UserController';
import swal from "sweetalert";

export function LoginModal({ isOpen, onClose }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearFormData = () => {
    setFormData({
      email: '',
      password: '',
    });
  };

  // Form submission handler
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await LoginController(formData);
      if (response.data.status === true) {
        onClose(); // Close the modal after SweetAlert is confirmed
        clearFormData();
        swal("Login Successfully!", "You have logged in successfully!", "success");
      } else if (response.data.status === false) {
        const message = response.data.msg || "An error occurred";
        if (message === "Email not registered") {
          onClose(); // Close the modal after SweetAlert is confirmed
          clearFormData();
          swal("Error", "Email not registered. Please check your email or sign up.", "error");
        } else if (message === "Password Incorrect") {
          onClose(); // Close the modal after SweetAlert is confirmed
          clearFormData();
          swal("Error", "Password is incorrect. Please try again.", "error");
        } else {
          onClose(); // Close the modal after SweetAlert is confirmed
          clearFormData();
          swal("Error", message, "error");
        }
      }
    } catch (err) {
      console.log(err);
      swal("Error", err.response?.data?.message || err.response?.data?.error || "An error occurred", "error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg transform transition-all duration-300 scale-95 hover:scale-100 relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition duration-200"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-center mb-6">
          <FaShoppingCart className="text-4xl text-purple-600" />
          <h2 className="text-3xl font-bold text-purple-700 ml-2">Welcome Back</h2>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-purple-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-purple-400" />
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-400 hover:text-purple-600 transition duration-200"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-red-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          <span className="text-purple-500 hover:underline cursor-pointer">Forgot your password?</span>
        </p>
      </div>
    </div>
  );
}
