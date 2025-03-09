import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";

import "../styles/Home.css";
import ChooseusCard from "../components/ChooseusCard";
import FeaturedCard from "../components/FeaturedCard";
import PopupCard from "../components/PopupCard";
import { chooseUsData } from "../data/Home";

const Home = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [featuredData, setFeaturedData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/featuredCardsData")
    .then((response) => response.json())
    .then((data) => setFeaturedData(data))
    .catch((error) => console.error(error));
  }, []);

  const loadMoreCards = () => {
    setVisibleCards((prevCount) => prevCount + 4);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
    document.body.style.overflow = "auto";
  };

  const validateForm = (event) => {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    // Name Validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    } else if (/[^a-zA-Z\s]/.test(name)) {
      document.getElementById("nameError").textContent =
        "Name should not contain numbers or special characters.";
      isValid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Invalid email format. Ensure it contains @ and a valid domain.";
      isValid = false;
    }

    // Phone Validation
    const phone = document.getElementById("phone").value.trim();
    if (phone === "") {
      document.getElementById("phoneError").textContent =
        "Phone number is required.";
      isValid = false;
    } else if (/[^0-9]/.test(phone)) {
      document.getElementById("phoneError").textContent =
        "The phone number should contain only numbers.";
      isValid = false;
    } else if (phone.length !== 10) {
      document.getElementById("phoneError").textContent =
        "Phone number must be exactly 10 digits.";
      isValid = false;
    }

    // Message Validation
    const message = document.getElementById("message").value.trim();
    if (message === "") {
      document.getElementById("messageError").textContent =
        "Message cannot be empty.";
      isValid = false;
    } else if (message.length < 20) {
      document.getElementById("messageError").textContent =
        "Message should be at least 20 characters long.";
      isValid = false;
    }

    // Form Submission if valid
    if (isValid) {
      alert("Form submitted successfully!");

      // Clear form fields after submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
    }

    return isValid;
  };

  return (
    <div className="main_container">
      <div className="hellohome container-fluid">
        <h1>
          We are coming with <span> new event!</span>
        </h1>
        <p>
          It is a long established fact that a <br />
          student will be addict by our interactive content
        </p>

        <button>
          <NavLink to="/events" className="btn btn-primary">
            Learn More
            <LuArrowUpRight />
          </NavLink>
        </button>
      </div>

      <div className="container-fluid chooseus">
        <h1>
          <span>Why </span>Choose Us
        </h1>
        <p>
          Best Way of Learning is Participation. So participate in different
          kinds of events
        </p>

        <div className="chooseus__card-section">
          {chooseUsData.slice(0, visibleCards).map((item) => (
            <ChooseusCard
              key={item.key}
              image={item.image}
              heading={item.heading}
            />
          ))}
        </div>

        {visibleCards < chooseUsData.length && (
          <button onClick={loadMoreCards} className="load-more-button">
            Load More
          </button>
        )}
      </div>

      <div className="container servicepro">
        <h1>
          <span>Service</span> Process
        </h1>
        <p>Easy and effective way to get your event entry ticket</p>

        <div className="featured-cards-container">
          {featuredData.map((item) => (
            <FeaturedCard
              key={item.key}
              image={item.image}
              heading={item.heading}
              description={item.description}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>

        {selectedCard && (
          <PopupCard
            image={selectedCard.image}
            heading={selectedCard.heading}
            description={selectedCard.description}
            onClose={handleClosePopup}
          />
        )}
      </div>

      <div className="contactus container-fluid">
        <div className="main__heading">
          <h1>Contact Us</h1>
        </div>

        <form action="" className="container contact__form">
          <input
            className="form-control"
            placeholder="Your name"
            type="text"
            name="Your Name"
            id="name"
            required
          ></input>
          <span className="text-danger" id="nameError"></span>

          <input
            className="form-control"
            placeholder="Email"
            type="text"
            name="Email"
            id="email"
            required
          ></input>
          <span className="text-danger" id="emailError"></span>

          <input
            className="form-control"
            placeholder="Phone"
            type="text"
            name="Phone"
            id="phone"
            required
          ></input>
          <span className="text-danger" id="phoneError"></span>

          <textarea
            className="textarea"
            placeholder="Message"
            id="message"
            required
          ></textarea>
          <span className="text-danger" id="messageError"></span>

          <button
            type="submit"
            id="submitBtn"
            className="btn btn-primary"
            onClick={validateForm}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mapsect container-fluid">
        <img src="./src/images/mapimg.jpg" alt="map" />
      </div>
    </div>
  );
};

export default Home;
