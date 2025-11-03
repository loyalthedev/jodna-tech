import Wrapper from "../(components)/Wrapper";
import { assets } from "../../public/assets/images";
import { Articles, detailsData } from "../../Data";
import Tag from "../(components)/Tag";
import CustomButton from "../(components)/CustomButton";
import { useNavigate, useParams } from "react-router-dom";

function PortfolioDetails() {
  const params = useParams();
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }

  const product = Articles.find((item) => item.id == params.id);
  const { title, tags, category, Image } = product;
  const MetricsData = [
    {
      title: "Sales Increase",
      value: "+40%",
    },
    {
      title: "Bounce Rate Reduction",
      value: "-28%",
    },
    {
      title: "Mobile Conversion",
      value: "+63%",
    },
  ];
  return (
    <div className="portfolio-details">
      <Wrapper className="">
        <span className={"top"} onClick={handleBack}>
          <img src={assets.backIcon} alt="back arrow" />
          <h3>Back to Portfolio</h3>
        </span>
      </Wrapper>
      <div className="img-holder">
        <img src={Image} alt="" />
      </div>

      <Wrapper>
        <div className="del">
          <h2 className="name">{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elementum congue a est
            potenti. Orci convallis vehicula semper at dictum lacus tincidunt
            netus eget. A justo est orci metus commodo leo. Diam mi urna arcu
            ornare venenatis massa sit cras aliquet.
          </p>
        </div>

        <div className="description">
          {detailsData.map((data, index) => {
            const { heading, subHeading, icon, tags: istag } = data;
            return (
              <div key={index} className="item">
                <span className="imgContainer">
                  <img src={icon} alt="" />
                </span>

                <div className="text-hold">
                  <p>{heading}</p>
                  <h3>{subHeading}</h3>
                  {istag && (
                    <div className="tag-hold">
                      {tags.map((item, index) => (
                        <Tag key={index} title={item} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="details content">
          <div className="challenge">
            <h3>The Challenge</h3>
            <p>
              XYZ Corp faced significant challenges with their existing
              e-commerce platform, including:
            </p>
            <ul>
              <li>Poor mobile responsiveness leading to lost sales</li>
              <li>Complex checkout process causing cart abandonment</li>
              <li>Limited integration capabilities with marketing tools</li>
            </ul>
          </div>
        </div>

        <div className="our-approach content">
          <h3>Our Approach</h3>
          <p>
            We implemented a comprehensive strategy focused on user experience
            and performance:
          </p>
        </div>

        <div className="our-solution content">
          <h3>The Solution</h3>
          <p>
            Our team delivered a modern, scalable e-commerce platform that
            addressed all key challenges:
          </p>

          <div className="process">
            <div className="img-hold">
              <CustomButton title="Before" />
              <img src={assets.beforeImg} alt="" />
            </div>
            <div className="img-hold after">
              <CustomButton title="After" />
              <img src={assets.afterImg} alt="" />
            </div>
          </div>
          <div className="key-metrics">
            <h2>Key Metrics</h2>
            <div className="holder">
              {MetricsData.map((item, index) => (
                <div className="item" key={index}>
                  <h5>{item.title}</h5>
                  <h3>{item.value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="start-project">
        <h3>Start Your Project</h3>
        <p>
          Ready to transform your business? Let's create something amazing
          together.
        </p>
        <button>
          Contact Us <img src={assets.SmallGreenArrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default PortfolioDetails;
