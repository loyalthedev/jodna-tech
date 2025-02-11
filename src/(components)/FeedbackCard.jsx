import React from "react";
import { assets } from "../../public/assets/images";

function FeedbackCard({data}) {
  const starqty = [1, 2, 3, 4, 5];
  const { name, image, details, date, country } = data;
  return (
    <div className="feedback-card">
      <div className="top">
        <img className="qoute" src={assets.quoteIcon} alt="" />
        <div className="img-hold">
          <img src={image} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <span>{country}</span>
        </div>
      </div>
      <p className="details">
        {details}
      </p>
      <div className="rating">
        <p>{date}</p>
        <div className="stars">
          {starqty.map((index) => (
            <img key={index} src={assets.starIcon} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
