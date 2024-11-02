/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "../styles/Resources.css";
import PopupCard from "../components/PopupCard";
import FeaturedCard from "../components/FeaturedCard";
import resources_data from "../data/Resources";

const NewPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCardClick = (card) => {
    setSelectedCard(card);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
    document.body.style.overflow = "auto";
  };

  const filteredResources = resources_data.filter((item) =>
    item.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container-fluid resources__head">
        <h1>Resources</h1>
      </div>
      <div className="container resources">
        <p>
          The resources below are designed to help you learn more about the
          topics we cover in our workshops. We have included a variety of
          resources, including articles, videos, and tutorials. We hope you find
          them helpful!
        </p>

        <input
          type="text"
          id="searchBar"
          placeholder="Search for resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="resources-container">
          {filteredResources.map((item) => (
            <FeaturedCard
              key={item.key}
              image={item.imgSrc}
              heading={item.heading}
              buttonLabel="Learn More"
              href={item.href}
              onClick={() => handleCardClick(item)}
            />
          ))}
          {selectedCard && (
            <PopupCard
              image={selectedCard.imgSrc}
              heading={selectedCard.heading}
              description={selectedCard.description}
              buttonLabel="More Details"
              href={selectedCard.href}
              onClose={handleClosePopup}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default NewPage;
