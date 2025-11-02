// import { assets } from "../public/assets/images";
import React, { useState } from "react";
import { Articles } from "../../Data";
import { assets } from "../../public/assets/images";
import CustomButton from "../(components)/CustomButton";
import ArticleCard from "../(components)/ArticleCard";
import BlogCard from "../(components)/BlogCard";

const BlogSite = () => {
  const [searchQuery, setSearchQuery] = useState(""); // For storing the search input
  const blogPosts = [
    {
      id: 1,
      imgsrc: "assets/future.svg",
      title: "The Future of Web Development: What to Expect in 2025",
      date: "March 15, 2022",
      duration: "5 min read",
      impression: "1,324 views",
      content:
        "Discover the emerging trends that will shape web dev in the coming year, from AI integration to new frameworks and tools that promise to...",
      author: "Sarah Johnson",
      category: "Web Development",
      tags: ["Web Dev", "Trends", "AI"],
    },
    {
      id: 2,
      imgsrc: "assets/seo.svg",
      title: "Mastering SEO: Advanced Techniques for 2024",
      date: "March 14, 2024",
      duration: "5 min read",
      impression: "2,156 views",
      content:
        "Learn the latest SEO strategies that are driving results in 2024. From AI powered content optimization to technical SEO improvements that...",
      author: "Mike Chen",
      category: "SEO",
      tags: ["SEO", "Marketing"],
    },
    {
      imgsrc: "assets/social.svg",
      id: 3,
      title: "The Future of Web Development: What to Expect in 2025",
      date: "March 15, 2022",
      duration: "5 min read",
      impression: "1,324 views",
      content:
        "Discover the emerging trends that will shape web dev in the coming year, from AI integration to new frameworks and tools that promise to...",
      author: "Sarah Johnson",
      category: "Marketing",
      tags: ["Marketing", "Social Media"],
    },
    {
      id: 4,
      imgsrc: "assets/react.svg",
      title: "Building Scalable React Applications: Best Practices",
      date: "March 15, 2022",
      duration: "5 min read",
      impression: "1,324 views",
      content:
        "Explore proven architectural patterns and best practice for building large scale react applications that remain maintainable and performant as they grow...",
      author: "Alex Rivera",
      category: "Web Dev",
      tags: ["Web Dev", "React"],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const buttonText = [
    "All",
    "SEO",
    "Industry News",
    "AI",
    "Web Dev",
    "Trends",
    "Marketing",
    "UX Design",
  ];

  const filteredCategory =
    activeCategory === "All"
      ? Articles
      : Articles.filter((category) => category.category === activeCategory);

  // Filter blog posts based on the search query
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="service-page" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div
        className="service-hero"
        style={{
          backgroundImage: `url(${assets.servicesHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          paddingInline: "3rem",
        }}
      >
        <h1 style={{ color: 'var(--text-primary)' }}>Stay Ahead in Digital Innovation</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Explore our latest thoughts, trends, and tips on digital marketing and
          web development
        </p>
      </div>
      <div className="container" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="top">
          <div className="search">
            <input type="text" placeholder="Search Blogs..." />
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
            {blogPosts.map((item, index) => (
              <BlogCard key={item.id || index} data={{ ...item, tags: item.tags || [] }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSite;

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  searchBar: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  blogContainer: {
    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },
  blogPost: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
};
