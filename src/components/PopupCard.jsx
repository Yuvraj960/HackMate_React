/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { RxCross2 } from "react-icons/rx";

const PopupCard = ({ image, heading, description, buttonLabel, onClose, href }) => {
  const handleButtonClick = () => {
    window.open(href, '_blank');  // Opens link in a new tab
};
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={heading} className="popup-image" />
        <h2 className="popup-heading">{heading}</h2>
        <p className="popup-description">{description}</p>
        {buttonLabel && (
          <button className="popup-button" onClick={handleButtonClick}>
            {buttonLabel}
          </button>
        )}
        <button className="popup-close" onClick={onClose}>
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default PopupCard;
