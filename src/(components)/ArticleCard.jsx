import React from "react";
import Tag from "./Tag";
import { assets } from "../../public/assets/images";
import { Link } from "react-router-dom";

function ArticleCard({ data }) {
  // console.log(data)
  const { title, tags, category, Image, id } = data;
  return (
    <div className="article-card">
      <Link to={`/portfolio/details/${id}`}>
        {" "}
        <div className="img-holder">
          <img src={Image} alt="" />
        </div>
      </Link>

      <div className="text-hold">
        <Link to={`/portfolio/details/${title}`}>
          <h2>{title}</h2>
        </Link>
        <p className="category">{category}</p>
        <div className="tag-hold">
          {tags.map((item, index) => (
            <Tag key={index} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
