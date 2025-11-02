import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader preloader-${theme}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          <img src="/assets/logo.svg" alt="Jodna Technologies" />
        </div>
        <div className="preloader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="preloader-progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="preloader-text">Loading amazing experiences...</p>
      </div>
    </div>
  );
};

export default Preloader;

