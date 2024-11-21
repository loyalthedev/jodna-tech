import React, { useEffect, useRef, useState } from "react";

const ImpactSection = () => {
  const itemsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counters, setCounters] = useState([0, 0, 0]); // For 70, 50, and 98
  const targets = [70, 50, 98]; // Target numbers

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation when section comes into view
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

        // Start counting for the current item
        incrementCounter(index);

        // Stop animation for the last item after it completes
        if (index === itemsRef.current.length - 1) {
          setTimeout(() => setCurrentIndex(null), 3000); // Stop blinking after 2 cycles (1.5s per cycle)
        }
      }, index * 3000); // 3 seconds per item
    });
  };

  const incrementCounter = (index) => {
    const interval = setInterval(() => {
      setCounters((prev) => {
        const updatedCounters = [...prev];
        if (updatedCounters[index] < targets[index]) {
          updatedCounters[index] += 1; // Increment the counter
        } else {
          clearInterval(interval); // Stop when target is reached
        }
        return updatedCounters;
      });
    }, 50); // Adjust speed of counting (50ms per increment)
  };

  return (
    <section className="impact-section">
      {[
        { label: "Projects Done", value: 70 },
        { label: "Happy Clients", value: 50 },
        { label: "Client Satisfaction", value: 98 },
      ].map((item, index) => (
        <div
          className={`impact-item ${currentIndex === index ? "sparkle" : ""}`}
          ref={(el) => (itemsRef.current[index] = el)}
          key={index}
        >
          <div className="circle">
            <p className="number">
              {index === 2 ? `${counters[index]}%` : `${counters[index]}+`}
            </p>
            <p className="label">{item.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImpactSection;
