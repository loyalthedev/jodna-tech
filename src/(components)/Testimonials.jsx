import React, { useEffect, useRef } from "react";
import { assets } from "../../public/assets/images";
import { MdStar } from "react-icons/md";

const Testimonials = () => {
  const carouselRef = useRef(null);
  const testimonials = [
    {
      name: "Adewale Austin",
      location: "Abuja, Nigeria",
      image: "assets/adewale-austin.jpg",
      quote:
        "Our team of experts are equipped to propel your brand to new heights. Partner with us, let's guide you through every step.",
      date: "30 October 2024",
      rating: 5,
    },
    {
      name: "Sarah Abraham",
      location: "Ontario, Canada",
      image: "assets/sarah-abraham.jpg",
      quote:
        "Our team of experts are equipped to propel your brand to new heights. Partner with us, let's guide you through every step.",
      date: "30 October 2024",
      rating: 5,
    },
    {
      name: "Elijah Thompson",
      location: "Los Angeles, USA",
      image: "assets/elijah-thompson.jpg",
      quote:
        "A truly outstanding experience! The team is incredibly professional and results-driven.",
      date: "25 September 2024",
      rating: 5,
    },
    {
      name: "Fatima Bello",
      location: "Lagos, Nigeria",
      image: "assets/fatima-bello.jpg",
      quote:
        "I'm beyond satisfied with the service provided. Highly recommended for anyone looking to elevate their brand.",
      date: "15 October 2024",
      rating: 5,
    },
    {
      name: "Nathaniel Carter",
      location: "London, UK",
      image: "assets/nathaniel-carter.jpg",
      quote:
        "Exceptional service and attention to detail! They truly understand what it takes to create a powerful brand presence.",
      date: "5 November 2024",
      rating: 5,
    },
  ];

  const handleInfiniteScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
      carousel.scrollLeft = 0;
    } else {
      carousel.scrollLeft += 1;
    }
  };

  useEffect(() => {
    const interval = setInterval(handleInfiniteScroll, 8);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="tes-main">
      <img src={assets.motiff} alt="" />
      <div className="inner-tes">
        <div style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
          <span className="WWATitle">
            <img src={assets.GreenArrow} alt="Green Arrow" />
            <span style={{ fontWeight: 700 }}>Testimonial</span>
          </span>
          <h1 className="intro-text">
            Hear from our users who have saved thousands on their Startup and
            SaaS solution spend.
          </h1>
        </div>

        <div className="review-card-wrapper scrollbar-hide" ref={carouselRef}>
          {loopTestimonials.map((item, i) => (
            <ReviewCard
              key={i}
              name={item.name}
              location={item.location}
              image={item.image}
              quote={item.quote}
              date={item.date}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const ReviewCard = ({ name, location, image, quote, date, rating }) => {
  return (
    <div className="review-card">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", gap: "2rem" }}>
          <img src={assets.reviewImg} alt="" className="card-img" />
          <div>
            <h3 className="card-name">{name}</h3>
            <p className="card-location">{location}</p>
          </div>
        </div>

        <img src={assets.quoteIcon} alt="" />
      </div>
      <h2 className="quote-text">{quote}</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{date}</p>
        <div style={{ display: "flex", gap: "0.2rem" }}>
          {Array.from({ length: rating }).map((_, i) => (
            <MdStar key={i} style={{ color: "ffc966", fontSize: "2rem" }} />
          ))}
        </div>
      </div>
    </div>
  );
};
