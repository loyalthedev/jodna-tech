/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Tag from "./Tag";

const BlogCard = ({ data }) => {
  const { title, tags, category, imgsrc, id } = data;
  return (
    <Link
      to={`/blog/${id}`}
      className="article-card"
      style={{ textDecoration: "none", display: "block" }}
    >
      <div className="img-holder">
        <img src={imgsrc} alt={title} />
      </div>

      <div className="text-hold">
        <h2 style={{ color: "var(--text-primary)" }}>{title}</h2>
        {category && (
          <p className="category" style={{ color: "var(--accent-primary)" }}>
            {category}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="tag-hold">
            {tags.slice(0, 3).map((item, index) => (
              <Tag key={index} title={item} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;
