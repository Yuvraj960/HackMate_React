/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import "../styles/Events.css";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <figure>
        <img src={event.image} alt={event.title} />
      </figure>
      <div className="event-content">
        <span className="event-date">
          {event.date}
          <Link to={`/login`} className="register-link">
            || Register
          </Link>
        </span>
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
