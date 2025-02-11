import React from "react";
import { assets } from "../../public/assets/images";
import { achievments, ourValues, teamsData } from "../data/data";

const AboutPage = () => {
  return (
    <div className="about">
      <div
        className="about-section"
        style={{
          backgroundImage: `url(${assets.aboutHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "100vh",
        }}
      >
        <div className="transparent"></div>

        <div className="about-hero">
          <div className="about-text">
            <h1>About Jodna Technology</h1>
            <p>
              At Jodna Technology, we connect businesses with top freelance
              talent in tech and business, driving innovation and success with
              skilled professionals tailored to your needs.
            </p>
          </div>
          <div className="about-heroImg">
            <img src={assets.aboutHeroImage} alt="about hero image" />
          </div>
        </div>
      </div>
      {/* our story section */}
      <section className="ourStory-container">
        <div className="story-img">
          <img src={assets.aboutStoryImage} alt="" />
        </div>

        <div className="text-container">
          <div className="sub-title">
            <img src={assets.dashedArrow} alt="" />
            <h3>What We've Done</h3>
          </div>
          <h1 className="heading">
            We pride ourselves on our commitment to excellence.
          </h1>
          <p className="text">
            Jodna Technology was founded to connect businesses with the top
            freelance talent in technology and business. Since our inception,
            we've grown into a trusted global platform, bridging the gap between
            companies' needs and skilled professionals, helping businesses
            succeed and freelancers thrive in a fast-evolving world. Our
            solutions have helped countless businesses transform their digital
            presence and achieve unprecedented growth.
          </p>
        </div>
      </section>

      {/* our values section */}
      <section className="ourValues-section">
        <div className="sub-title">
          <img src={assets.dashedArrow} alt="" />
          <h3>What We've Done</h3>
        </div>
        <h1 className="heading">
          Our core values are the foundation of everything we strive to achieve.
        </h1>

        <div className="values-container">
          {ourValues.map((value, index) => (
            <div key={index} className="value-grid">
              <img src={value.img} alt="value icon" />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* achievement section */}
      <section className="achievement-section">
        <div className="sub-title">
          <img src={assets.dashedArrow} alt="" />
          <h3>What We've Done</h3>
        </div>

        <h1 className="heading">
          Our path has been defined by key milestones and achievements.
        </h1>

        <div className="achievement-container">
          {achievments.map((item, index) => (
            <div key={index} className="achievement-grid">
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* teams section */}
      <section className="teams-section">
        <div className="sub-title">
          <img src={assets.dashedArrow} alt="" />
          <h3>What We've Done</h3>
        </div>
        <h1 className="heading">
          We come together as a team to deliver the best services to our
          clients.
        </h1>
        <div className="team-container">
          {teamsData.map((team, index) => (
            <div key={index}>
              <div>
                <img src={team.img} alt="Image Of Team" />
              </div>
              <div className="text">
                <h3>{team.name}</h3>
                <p>{team.postition}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="joinUs-section">
        <div className="joinUs-container">
          <div className="text">
            <h1 className="heading">Join us at Jodna Technology!</h1>
            <p>
              Ready for growth and innovation? Join Jodna Technology and connect
              with top talent to shape the future. Whether you're a freelancer
              seeking opportunities or a business in need of skilled talent,
              we're here to connect you with success.
            </p>
            <button className="join-btn">
              Explore Our Services
              <img src={assets.arrowRight} alt="" />
            </button>
          </div>
          <div className="joinUs-img">
            <img src={assets.joinUsImg} alt="Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
