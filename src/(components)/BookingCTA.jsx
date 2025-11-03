/* eslint-disable react/prop-types */
import { FaCalendarAlt } from "react-icons/fa";
import { openCalendly } from "../utils";

const BookingCTA = () => {
  return (
    <div className="booking-cta-float">
      <button onClick={openCalendly} aria-label="Book a consultation">
        <FaCalendarAlt className="cta-icon" />
        <span>Book a Consultation</span>
      </button>
    </div>
  );
};

export default BookingCTA;
