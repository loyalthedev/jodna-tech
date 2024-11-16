import React, { useEffect, useRef, useState } from "react";

const ImpactSection = () => {
  const itemsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start sequential animation when the section comes into view
            triggerSequentialAnimation();
            observer.unobserve(entry.target); // Unobserve after animation starts
          }
        });
      },
      { threshold: 0.5 }
    );

    itemsRef.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const triggerSequentialAnimation = () => {
    itemsRef.current.forEach((item, index) => {
      setTimeout(() => {
        setCurrentIndex(index); // Highlight the current item

        // Stop the animation for the last item after two blinks
        if (index === itemsRef.current.length - 1) {
          setTimeout(() => setCurrentIndex(null), 3000); // Stop blinking after 2 cycles (1.5s per cycle)
        }
      }, index * 3000); // 3 seconds per item
    });
  };

  return (
    <section className="impact-section">
      {[
        "70+ Projects Done",
        "50+ Happy Clients",
        "98% Client Satisfaction",
      ].map((text, index) => (
        <div
          className={`impact-item ${currentIndex === index ? "sparkle" : ""}`}
          ref={(el) => (itemsRef.current[index] = el)}
          key={index}
        >
          <div className="circle">
            <p className="number">{text.split(" ")[0]}</p>
            <p className="label">{text.split(" ").slice(1).join(" ")}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImpactSection;
