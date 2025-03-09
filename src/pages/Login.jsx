import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../styles/Login.css";

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

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailOrUsername, password } = formData;

    try {
      await signInWithEmailAndPassword(auth, emailOrUsername, password);
      alert("Successfully authenticated!");
      setFormData({
        emailOrUsername: "",
        password: "",
      });
      setError("");
    } catch (error) {
      setError("Invalid email or password");
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="login__head">
        <h1>LOGIN</h1>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="login__form-icon">
            <span>
              <i className="icon icon-user"></i>
            </span>
          </div>
          <div className="login__form-group">
            <input
              type="text"
              id="emailOrUsername"
              value={formData.emailOrUsername}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="login__form-group">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          {error && <span className="text-danger">{error}</span>}
          <button type="submit" className="btn btn-block create-account">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
