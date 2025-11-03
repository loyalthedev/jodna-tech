import { useParams, useNavigate } from "react-router-dom";
import { assets } from "../../public/assets/images";
import useScrollAnimation from "../utils/useScrollAnimation";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sectionRef, isSectionVisible] = useScrollAnimation();

  // Mock blog data - in production, fetch from API or use the actual data source
  const blogPosts = [
    {
      id: 1,
      imgsrc: "assets/future.svg",
      title: "The Future of Web Development: What to Expect in 2025",
      date: "March 15, 2024",
      duration: "5 min read",
      impression: "1,324 views",
      content:
        "Discover the emerging trends that will shape web development in the coming year, from AI integration to new frameworks and tools that promise to revolutionize how we build applications.",
      fullContent: `
        <p>The landscape of web development is constantly evolving, and 2025 promises to bring exciting new technologies and methodologies that will transform how developers create web applications.</p>
        
        <h2>Artificial Intelligence Integration</h2>
        <p>AI is no longer just a buzzword—it's becoming an integral part of the development workflow. From AI-powered code generators to intelligent testing frameworks, developers can expect tools that significantly reduce development time while maintaining code quality.</p>
        
        <h2>New Frameworks and Libraries</h2>
        <p>Several emerging frameworks are gaining traction, offering better performance, improved developer experience, and enhanced capabilities. These frameworks focus on reducing complexity while increasing productivity.</p>
        
        <h2>WebAssembly Takes Center Stage</h2>
        <p>WebAssembly (WASM) continues to mature, enabling near-native performance for web applications. More developers are adopting WASM for computationally intensive tasks, opening new possibilities for web-based applications.</p>
        
        <h2>Progressive Web Apps Evolution</h2>
        <p>PWAs are becoming more powerful with new APIs and capabilities. Expect to see more native-like experiences delivered through web technologies, blurring the line between web and mobile apps.</p>
        
        <p>As we move forward, staying updated with these trends and adopting new tools strategically will be key to building modern, efficient web applications.</p>
      `,
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
      fullContent: `
        <p>Search Engine Optimization continues to evolve, and 2024 brings new strategies and techniques that can significantly improve your website's visibility and rankings.</p>
        
        <h2>AI-Powered Content Optimization</h2>
        <p>Modern SEO tools now leverage artificial intelligence to analyze content, identify optimization opportunities, and suggest improvements that align with search engine algorithms and user intent.</p>
        
        <h2>Technical SEO Fundamentals</h2>
        <p>Core web vitals, page speed optimization, and mobile-first indexing remain critical. However, new metrics and considerations are emerging that require attention to detail and continuous monitoring.</p>
        
        <h2>Content Strategy Evolution</h2>
        <p>The focus has shifted from keyword stuffing to creating valuable, comprehensive content that genuinely serves users' needs. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is more important than ever.</p>
        
        <h2>Local SEO Enhancement</h2>
        <p>For businesses serving local markets, optimizing for local search continues to be crucial. Updated Google Business profiles and location-based content strategies yield significant results.</p>
      `,
      author: "Mike Chen",
      category: "SEO",
      tags: ["SEO", "Marketing"],
    },
    {
      id: 3,
      imgsrc: "assets/social.svg",
      title: "Social Media Marketing: Best Practices for 2024",
      date: "March 13, 2024",
      duration: "5 min read",
      impression: "1,324 views",
      content:
        "Discover the emerging trends that will shape social media marketing in 2024...",
      fullContent: `
        <p>Social media marketing continues to evolve with new platforms, features, and strategies emerging regularly. Understanding these trends is crucial for effective digital marketing.</p>
        
        <h2>Video Content Dominance</h2>
        <p>Short-form video content, particularly on platforms like TikTok, Instagram Reels, and YouTube Shorts, continues to dominate engagement metrics. Brands must adapt their content strategy accordingly.</p>
        
        <h2>Authenticity and Engagement</h2>
        <p>Users crave authentic connections. Brands that prioritize genuine engagement over promotional content see better results in terms of reach and conversion.</p>
      `,
      author: "Sarah Johnson",
      category: "Marketing",
      tags: ["Marketing", "Social Media"],
    },
    {
      id: 4,
      imgsrc: "assets/react.svg",
      title: "Building Scalable React Applications: Best Practices",
      date: "March 12, 2024",
      duration: "5 min read",
      impression: "1,324 views",
      content:
        "Explore proven architectural patterns and best practices for building large scale react applications...",
      fullContent: `
        <p>React has become one of the most popular frameworks for building user interfaces, and as applications grow in complexity, following best practices becomes crucial.</p>
        
        <h2>Component Architecture</h2>
        <p>Organizing components effectively, using composition over inheritance, and maintaining a clear component hierarchy are essential for scalable applications.</p>
        
        <h2>State Management</h2>
        <p>Choosing the right state management solution—whether Context API, Redux, Zustand, or others—depends on your application's needs. Understanding when to use each approach is key.</p>
        
        <h2>Performance Optimization</h2>
        <p>Memoization, code splitting, lazy loading, and virtual scrolling are techniques that can significantly improve React application performance.</p>
      `,
      author: "Alex Rivera",
      category: "Web Dev",
      tags: ["Web Dev", "React"],
    },
  ];

  const blog = blogPosts.find((post) => post.id === Number(id));

  if (!blog) {
    return (
      <div
        className="blog-detail-not-found"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2rem",
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <h1>Blog Post Not Found</h1>
        <button onClick={() => navigate("/blog")} className="btn-professional">
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="blog-detail"
      style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}
    >
      <div className="blog-detail-container">
        <button onClick={() => navigate("/blog")} className="blog-back-btn">
          <img src={assets.backIcon || "/assets/back.svg"} alt="back" />
          <span>Back to Blogs</span>
        </button>

        <article className="blog-article">
          <div
            className={`blog-hero scroll-fade-in ${
              isSectionVisible ? "visible" : ""
            }`}
          >
            <img
              src={blog.imgsrc}
              alt={blog.title}
              className="blog-hero-image"
            />
            <div className="blog-hero-overlay">
              <div className="blog-meta">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>
                <span className="blog-duration">{blog.duration}</span>
              </div>
              <h1 className="blog-title">{blog.title}</h1>
              <div className="blog-author-info">
                <span>By {blog.author}</span>
                <span className="blog-views">{blog.impression}</span>
              </div>
            </div>
          </div>

          <div className="blog-content-wrapper">
            <div className="blog-content">
              <div
                className="blog-full-content"
                dangerouslySetInnerHTML={{
                  __html: blog.fullContent || blog.content,
                }}
              />

              <div className="blog-tags">
                {blog.tags?.map((tag, index) => (
                  <span key={index} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="blog-cta-section">
                <h3>Ready to Transform Your Digital Presence?</h3>
                <p>
                  Schedule a consultation with our experts to discuss how we can
                  help your business grow.
                </p>
                <button
                  className="btn-professional"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("openBookingModal"));
                  }}
                >
                  Book a Consultation
                </button>
              </div>
            </div>

            <aside className="blog-sidebar">
              <div className="sidebar-card">
                <h3>Related Articles</h3>
                <div className="related-articles">
                  {blogPosts
                    .filter(
                      (post) =>
                        post.id !== blog.id && post.category === blog.category
                    )
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <div
                        key={relatedPost.id}
                        className="related-article-card"
                        onClick={() => navigate(`/blog/${relatedPost.id}`)}
                      >
                        <img src={relatedPost.imgsrc} alt={relatedPost.title} />
                        <div>
                          <h4>{relatedPost.title}</h4>
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
