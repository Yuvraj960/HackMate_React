import React from "react";

const ChooseusCard = ({ image, heading }) => {
  return (
    <div className="chooseus__card">
      <img src={image} alt={heading} className="chooseus__card-image" />
      <h3 className="chooseus__card-heading">{heading}</h3>
    </div>
  );
};

export default ChooseusCard;
