import { useEffect, useRef, useState } from 'react';

export const useParallax = (speed = 0.5, offset = 0) => {
  const elementRef = useRef(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate if element is in viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        // Calculate scroll progress (-1 to 1)
        const scrollProgress = 1 - (elementTop + offset) / (windowHeight + elementHeight);
        
        // Apply parallax transform with smooth easing
        const translateY = (scrollProgress - 0.5) * speed * 100;
        setTransform(translateY);
      } else {
        // Reset transform when out of viewport
        setTransform(0);
      }
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [speed, offset]);

  return [elementRef, transform];
};

export default useParallax;

