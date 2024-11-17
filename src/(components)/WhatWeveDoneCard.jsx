import "../styles/whatWeveDoneCard.scss";

const WhatWeveDoneCard = ({ image, title, subTitle, frameWork }) => {
  return (
    <div className="card_Container">
      <div className="image-container">
        <img className="" src={image} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
        <div className="frameWork">
          {frameWork.map((fw, index) => (
            <span className="span" key={index}>
              {fw}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeveDoneCard;
