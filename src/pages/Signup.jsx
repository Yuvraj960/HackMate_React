/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/Signup.css";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const firebaseConfig = {
  apiKey: "AIzaSyCsghegdAgZ29ncepjsDVnRZjStv7pMG1g",
  authDomain: "hackmate960.firebaseapp.com",
  projectId: "hackmate960",
  storageBucket: "hackmate960.appspot.com",
  messagingSenderId: "727567532767",
  appId: "1:727567532767:web:6cadb2fc5be6ae11119f6a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    birthDate: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Form validation and Firebase signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
      username,
      password,
      confirmPassword,
      phoneNumber,
      birthDate,
    } = formData;

    // Basic form validation
    let newErrors = {};
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      newErrors.email = "Invalid email format";
    if (!username) newErrors.username = "Username is required";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!phoneNumber.match(/^[0-9]{10}$/))
      newErrors.phoneNumber = "Phone Number must be 10 digits";
    if (!birthDate) newErrors.birthDate = "Birth Date is required";
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      setFormData({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        birthDate: "",
      });
      setErrors({});
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="container-fluid signup__header">
        <h1>SIGNUP</h1>
      </div>
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <div className="form-icon">
            <span>
              <i className="icon icon-user"></i>
            </span>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <span className="text-danger">{errors.email}</span>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              maxLength="50"
            />
            <span className="text-danger">{errors.username}</span>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <span className="text-danger">{errors.password}</span>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            <span className="text-danger">{errors.confirmPassword}</span>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              maxLength="10"
            />
            <span className="text-danger">{errors.phoneNumber}</span>
          </div>
          <div className="form-group">
            <input
              type="date"
              id="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              placeholder="Birth Date"
            />
            <span className="text-danger">{errors.birthDate}</span>
          </div>
          <button type="submit" className="btn btn-block create-account">
            Create Account
          </button>
        </form>
        <div className="social-media">
          <h5>Sign up with social media</h5>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
