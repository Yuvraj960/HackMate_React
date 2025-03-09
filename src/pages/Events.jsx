import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import eventsData from "../data/Events.js";
import "../styles/Events.css";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  useEffect(() => {
    const eventCount = document.querySelector(".eventCount");
    const animateNumber = (start, end, duration) => {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        eventCount.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };
    animateNumber(0, events.length, 800);
  }, [events]);

  return (
    <>
      <div className="event__head">
        <h1 className="eventCount"></h1>
        <h1>Interesting Events For You</h1>
      </div>
      <div className="container event-container">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
};

export default EventList;
