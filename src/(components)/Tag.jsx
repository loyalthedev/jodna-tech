
function Tag({title, className}) {
  return (
    <div className={`tag ${className}`}>
      <span>{title}</span>
    </div>
  );
}

export default Tag