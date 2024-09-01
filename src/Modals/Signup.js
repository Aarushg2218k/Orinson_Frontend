// SignupModal.js
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { RegisterController } from '../services/Controllers/UserController';
import swal from "sweetalert";

export function SignupModal({ isOpen, onClose }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [passwordStrength, setPasswordStrength] = useState('');

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Email validation: Must include "@gmail.com"
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  // Password validation: Minimum 8 characters, 1 uppercase, 1 special character, 1 numeric
  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordPattern.test(password);
  };

  // Determine password strength
  const checkPasswordStrength = (password) => {
    if (password.length < 8) {
      setPasswordStrength('Weak');
    } else if (password.length < 12) {
      setPasswordStrength('Average');
    } else {
      setPasswordStrength('Strong');
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Check password strength if the input is password
    if (name === 'password') {
      checkPasswordStrength(value);
    }
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
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid Gmail address (e.g., user@gmail.com).');
      return;
    }
    // Add signup logic here
    try {
      const response = await RegisterController(formData);
      console.log(response);
      if (response.data.status === true) {
        onClose(); // Close the modal
        clearFormData();
        swal("Register Successfully!", "Your changes have been registered successfully!", "success");
      }
      else if (response.data.status === false) {
        onClose(); // Close the modal
        clearFormData();
        swal("Account Exists", "Account already exists. Please login.", "info");
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
          <h2 className="text-3xl font-bold text-purple-700 ml-2">Join ShopNest</h2>
        </div>

        {/* Signup Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-purple-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 pl-10 border ${
                validateEmail(formData.email) || !formData.email ? 'border-gray-300' : 'border-red-500'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200`}
            />
            {!validateEmail(formData.email) && formData.email && (
              <p className="text-red-500 text-sm mt-1">Please enter a valid Gmail address.</p>
            )}
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-purple-400" />
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 pl-10 pr-10 border ${
                validatePassword(formData.password) || !formData.password ? 'border-gray-300' : 'border-red-500'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-400 hover:text-purple-600 transition duration-200"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            <p
              className={`mt-1 text-sm ${
                passwordStrength === 'Weak'
                  ? 'text-red-500'
                  : passwordStrength === 'Average'
                  ? 'text-yellow-500'
                  : 'text-green-500'
              }`}
            >
              Password Strength: {passwordStrength}
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-red-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create Account
          </button>
        </form>

        {/* Terms and Conditions */}
        <p className="text-center text-sm text-gray-500 mt-4">
          By signing up, you agree to our{' '}
          <span className="text-purple-500 hover:underline cursor-pointer">Terms & Conditions</span>
        </p>
      </div>
    </div>
  );
}
