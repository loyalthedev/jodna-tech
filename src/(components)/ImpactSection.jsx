import React, { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";

const ImpactSection = () => {
  const itemsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start sequential animation when section comes into view
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

        // Start the CountUp animation
        const numberElement = item.querySelector(".number");
        const endValue = parseInt(numberElement.dataset.value, 10);
        const countUp = new CountUp(numberElement, endValue, {
          duration: 2,
        });
        if (!countUp.error) countUp.start();

        // Stop animation for the last item after two blinks
        if (index === itemsRef.current.length - 1) {
          setTimeout(() => setCurrentIndex(null), 2000); // Stop blinking after 2 cycles (1s per cycle)
        }
      }, index * 2000); // 3 seconds per item
    });
  };

  return (
    <section className="impact-section">
      {[
        { label: "Projects Done", value: 70, suffix: "+" },
        { label: "Happy Clients", value: 50, suffix: "+" },
        { label: "Client Satisfaction", value: 98, suffix: "%" },
      ].map((item, index) => (
        <div
          className={`impact-item ${currentIndex === index ? "sparkle" : ""}`}
          ref={(el) => (itemsRef.current[index] = el)}
          key={index}
        >
          <div className="circle">
            <span className="suffix">
              <span className="number" data-value={item.value}>
                0
              </span>
              {item.suffix}
            </span>
            <p className="label">{item.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImpactSection;
