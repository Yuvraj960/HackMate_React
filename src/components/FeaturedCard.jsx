import React from "react";

const FeaturedCard = ({
  image,
  heading,
  description,
  buttonLabel,
  onClick,
  href,
}) => {
  const handleButtonClick = () => {
    window.open(href, "_blank");
  };

  return (
    <div className="featured-card" onClick={onClick}>
      <img src={image} alt={heading} className="featured-card-image" />
      <h3 className="featured-card-heading">{heading}</h3>

      {buttonLabel ? (
        <button className="card-button" onClick={handleButtonClick}>
          {buttonLabel}
        </button>
      ) : (
        <p className="card-description">{description.slice(0, 40) + "..."}</p>
      )}
    </div>
  );
};

export default FeaturedCard;
