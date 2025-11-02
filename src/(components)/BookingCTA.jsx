import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const BookingCTA = ({ onClick }) => {
  return (
    <div className="booking-cta-float">
      <button onClick={onClick} aria-label="Book a consultation">
        <FaCalendarAlt className="cta-icon" />
        <span>Book a Consultation</span>
      </button>
    </div>
  );
};

export default BookingCTA;
