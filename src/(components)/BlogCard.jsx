import React from "react";
import { Link } from "react-router-dom";
import Tag from "./Tag";

const BlogCard = ({ data }) => {
  const { title, tags, category, imgsrc, id } = data;
  return (
    <div className="article-card">
      {/* <Link to={`/portfolio/details/${id}`}> */}
      {/* {" "} */}
      <div className="img-holder">
        <img src={imgsrc} alt="" />
      </div>
      {/* </Link> */}

      <div className="text-hold">
        {/* <Link to={`/portfolio/details/${title}`}> */}
        <h2>{title}</h2>
        {/* </Link> */}
        {/* <p className="category">{category}</p> */}
        <div className="tag-hold">
          {/* {tags.map((item, index) => (
            <Tag key={index} title={item} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
