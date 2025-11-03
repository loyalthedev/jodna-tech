import { useState } from "react";
import Wrapper from "./Wrapper";
import { assets } from "../../public/assets/images";
import CustomButton from "./CustomButton";
import { Articles } from "../../Data";
import ArticleCard from "./ArticleCard";

function ArticlesBanner() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const buttonText = [
    "All Projects",
    "Digital Marketing",
    "Web Development",
    "Mobile Apps",
    "Branding",
    "Business Strategy",
  ];

  const filteredCategory =
    activeCategory === "All Projects"
      ? Articles
      : Articles.filter((category) => category.category === activeCategory);
  return (
    <Wrapper>
      <div className="container">
        <div className="top">
          <div className="search">
            <input type="text" placeholder="Search Articles..." />
            <button>
              <img src={assets.searchIcon} alt="search_icon" />
            </button>
          </div>
        </div>
        <div className="tab">
          <div className="tab-buttons">
            {buttonText.map((item, index) => (
              <CustomButton
                className={`button ${item === activeCategory ? "active" : ""}`}
                title={item}
                key={index}
                onClick={() => setActiveCategory(item)}
              />
            ))}
          </div>
          <div className="tab-content">
            {filteredCategory.map((item, index) => (
              <ArticleCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default ArticlesBanner;
