/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { teamMembers, services } from "../data/About";
import "../styles/About.css";
import logo from "../images/logo.png";

const NewPage = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleTeamClick = (index) => {
    setSelectedTeamMember(index === selectedTeamMember ? null : index);
  };

  return (
    <>
      <div className="container-fluid about__heading">
        <h1>ABOUT US</h1>
      </div>
      <div className="container about-container">
        <section className="about-section">
          <img src={logo} alt="HackMate Logo" className="about-logo" />
          <div className="about-text">
            <h3>Who is HackMate?</h3>
            <p>
              HackMate, your ultimate companion in the world of coding
              competitions and innovation challenges! Our platform is dedicated
              to bringing you a comprehensive directory of hackathons and tech
              events from around the nation. Whether you&apos;re a seasoned
              coder or a budding developer, HackMate is here to support your
              journey with an extensive collection of practice materials. Dive
              into our curated cheat sheets, explore educational YouTube links,
              and leverage the power of AI tools to sharpen your skills. Join us
              at HackMate, where preparation meets opportunity, and let&apos;s
              hack the future together!
            </p>
          </div>
        </section>

        <section className="team-section">
          <h2>
            <span>Come </span>meet us up close
          </h2>
          <p className="heading__info">
            Every one of our team members is devoted to delivering the finest
            possible outcomes.
          </p>

          <div className="team-cards">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card"
                onClick={() => handleTeamClick(index)}
              >
                <img src={member.img} alt={member.name} className="team-img" />
                <h3>{member.name}</h3>
                {selectedTeamMember === index && (
                  <p className="member-description">{member.description}</p>
                )}
              </div>
            ))}
          </div>

          <button className="read-more" onClick={() => setShowPopup(true)}>
            Read More
          </button>

          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-content">
                <button
                  className="close-btn"
                  onClick={() => setShowPopup(false)}
                >
                  &times;
                </button>
                <div className="popup-cards">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="popup-card">
                      <img src={member.img} alt={member.name} />
                      <h3>{member.name}</h3>
                      <p>{member.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="services-section">
          <h2>
            Our <span>Services</span>
          </h2>
          <p className="service__info">
            Explore a range of resources and information designed to enhance
            your tech experience and keep you connected with the local tech
            scene.
          </p>
          <div className="service-cards">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <img
                  src={service.img}
                  alt={service.title}
                  className="service-img"
                />
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default NewPage;
