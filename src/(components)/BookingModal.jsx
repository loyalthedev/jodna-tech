/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const BookingModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate available dates (mock data - in production, fetch from API)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    const daysToShow = 30;

    for (let i = 1; i <= daysToShow; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Skip weekends (optional - remove if you want weekend availability)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date);
      }
    }

    return dates;
  };

  const availableDates = getAvailableDates();
  const availableTimeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking submitted:", {
      ...formData,
      date: selectedDate,
      time: selectedTime,
    });

    // Show success message (you can replace this with actual API call)
    alert("Booking request submitted! We'll contact you soon to confirm.");
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setSelectedDate(null);
    setSelectedTime("");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="booking-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="booking-modal-content">
          <div className="booking-header">
            <h2>Book a Consultation</h2>
            <p>Choose a date and time that works best for you</p>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="booking-section">
              <h3>Select Date & Time</h3>
              <div className="booking-calendar">
                <div className="calendar-header">
                  <button
                    type="button"
                    onClick={() => {
                      const newDate = new Date(currentMonth);
                      newDate.setMonth(newDate.getMonth() - 1);
                      setCurrentMonth(newDate);
                    }}
                    className="calendar-nav-btn"
                  >
                    ‹
                  </button>
                  <span className="calendar-month">
                    {currentMonth.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const newDate = new Date(currentMonth);
                      newDate.setMonth(newDate.getMonth() + 1);
                      setCurrentMonth(newDate);
                    }}
                    className="calendar-nav-btn"
                  >
                    ›
                  </button>
                </div>

                <div className="available-dates-grid">
                  {availableDates
                    .filter(
                      (date) =>
                        date.getMonth() === currentMonth.getMonth() &&
                        date.getFullYear() === currentMonth.getFullYear()
                    )
                    .map((date, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`date-btn ${
                          selectedDate?.toDateString() === date.toDateString()
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => setSelectedDate(date)}
                      >
                        <span className="date-day">
                          {date.toLocaleDateString("en-US", { day: "numeric" })}
                        </span>
                        <span className="date-weekday">
                          {date.toLocaleDateString("en-US", {
                            weekday: "short",
                          })}
                        </span>
                      </button>
                    ))}
                </div>
              </div>

              {selectedDate && (
                <div className="time-slots">
                  <h4>Available Times for {formatDate(selectedDate)}</h4>
                  <div className="time-slots-grid">
                    {availableTimeSlots.map((time, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`time-slot-btn ${
                          selectedTime === time ? "selected" : ""
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="booking-section">
              <h3>Your Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your project or questions..."
                />
              </div>
            </div>

            <div className="booking-actions">
              <button type="button" className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={!selectedDate || !selectedTime}
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
