import "../styles/whoWeAreSectionCard.scss";

const WhoWeAreSectionCard = ({ img, text, title, bgColor }) => {
  return (
    <div className={`${bgColor} cardContainer`}>
      <img className="icon" src={img} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default WhoWeAreSectionCard;
