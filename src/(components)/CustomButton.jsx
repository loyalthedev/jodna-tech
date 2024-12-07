import React from "react";

function CustomButton({ className, title, onClick }) {
  return <div onClick={onClick} className={`custom-button ${className}`}>{title}</div>;
}

export default CustomButton;
