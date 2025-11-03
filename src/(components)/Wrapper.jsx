/* eslint-disable react/prop-types */
function Wrapper({ children, className }) {
  return <div className={`wrapper ${className}`}>{children}</div>;
}

export default Wrapper;
