import React, { useState, useEffect } from "react";
import Header from "../(components)/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../(components)/Footer";
import Preloader from "../components/Preloader";
import BookingModal from "../(components)/BookingModal";
import BookingCTA from "../(components)/BookingCTA";

const MainLayout = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenBooking = () => {
      setIsBookingModalOpen(true);
    };

    window.addEventListener('openBookingModal', handleOpenBooking);
    return () => {
      window.removeEventListener('openBookingModal', handleOpenBooking);
    };
  }, []);

  return (
    <div className="main-layout">
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
      <BookingCTA onClick={() => setIsBookingModalOpen(true)} />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default MainLayout;
