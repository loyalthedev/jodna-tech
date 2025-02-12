// import { assets } from "../public/assets/images";
import Header from "./Navbar";
import { useState } from "react";
// import { useState } from "react";

// values components
function Values() {
  const divData = [
    {
      imgsrc: "assets/transparency.svg",
      title: "Transparency",
      text: "We foster trust through clear communication and transparency ensuring both businesses and freelancers can collaborate with confidence.",
    },
    {
      imgsrc: "assets/excellence.svg",
      title: "Excellence",
      text: "We are committed to delivering top-tier talent and high-qality solutions meeting unique the needs of each project with expertise and precision.",
    },
    {
      imgsrc: "assets/innovation.svg",
      title: "Innovation",
      text: "We stay ahead of industry trends, connecting businesses with cutting-edge skills and embracing the latest technologies and business strategies.",
    },
    {
      imgsrc: "assets/empowerment.svg",
      title: "Empowerment",
      text: "We empower freelancers by providing them opportunities to grow and suceed, while helping business access the best global talent.",
    },
    {
      imgsrc: "assets/inclusion.svg",
      title: "Inclusion",
      text: "We believe in fostering a diverse and inclusive platform where talent from all backgrounds can thrive and contribute to innovative solutions.",
    },
    {
      imgsrc: "assets/client.svg",
      title: "Client-Centric",
      text: "We put our clients needs at the forefront, ensuring customized solutions that align with their business goals and deliver meaningful results.",
    },
  ];
  // divData.map((data, index) => (
  //   <div key={index} className="value-div">
  //     <img
  //       src={data.imgsrc}
  //       alt=""
  //     />
  //     <h3>{data.title}</h3>
  //     <p>{data.text}</p>
  //   </div>
  // ));
  return (
    <section className="value-section">
      <div className="title">
        <img src="assets/arrow.svg" alt="" />
        <p className="titles">Our Values</p>
      </div>
      <h2 className="pride">
        Our Core Values are the foundation of everything we strive to achieve.
      </h2>
      <div className="value-box">
        {divData.map((data, index) => (
          <div key={index} className="value-div">
            <img className="value-img" src={data.imgsrc} alt="" />
            <h3 className="value-title">{data.title}</h3>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// achievements component
// const Achievements = () => {
//   const data = [
//     {
//       imgsrc: "assets/succli.svg",
//       title: "Successful Client Projects",
//       text: "Completed numerous, high-quality projects for businesses, delivering measurable results in technology and business services.",
//     },
//     {
//       imgsrc: "assets/innovsol.svg",
//       title: "Innovative Solutions and Impact",
//       text: "Pioneered innovative solutions for businesses by matching them with cutting-edge skills, helping them stay ahead in the competitive market.",
//     },
//     {
//       imgsrc: "assets/glonet.svg",
//       title: "Global Network Expansion",
//       text: "Built a diverse global network of talented frrelancers, providing businesses access to top expertise accross industries and regions.",
//     },
//     {
//       imgsrc: "assets/growem.svg",
//       title: "Growth and Empowerment",
//       text: "Helped freelancers develop their careers by connecting them with meaningful work opportunities and providing skill-building resources.",
//     },
//   ];

//   return (
//     <section className="achieve-section">
//       <div className="title">
//         <img
//           src="assets/arrow.svg"
//           alt=""
//         />
//         <p className="titles">Our Achievements</p>
//       </div>
//       <h2 className="pride">
//         Our path has been defined by key milestones and achievements
//       </h2>
//       <div className="achieve-box">
//         {data.map((data, index) => (
//           <div
//             key={index}
//             className="achieve-div"
//           >
//             <img
//               className="achieve-img"
//               src={data.imgsrc}
//               alt=""
//             />
//             <h3 className="achieve-title">{data.title}</h3>
//             <p className="achieve-text">{data.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
// team component
// const Team = () => {
//   const data = [
//     {
//       imgsrc: "assets/moses.svg",
//       name: "Moses",
//       role: "CEO",
//     },
//     {
//       imgsrc: "assets/halima.svg",
//       name: "Halimah",
//       role: "Admin",
//     },
//     {
//       imgsrc: "assets/bishop.svg",
//       name: "Bishop",
//       role: "CTO",
//     },
//   ];

//   return (
//     <section className="team-section">
//       <div className="title">
//         <img
//           src="assets/arrow.svg"
//           alt=""
//         />
//         <p className="titles">Meet Our Team</p>
//       </div>
//       <h2 className="pride">
//         We come together as a team to deliver the best services to our clients
//       </h2>
//       <div className="team-box">
//         {data.map((data, index) => (
//           <div
//             key={index}
//             className="team-div"
//           >
//             <img
//               className="team-img"
//               src={data.imgsrc}
//               alt=""
//             />
//             <h3 className="achieve-title">{data.name}</h3>
//             <p className="achieve-text">{data.role}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
// final component

// const Joinus = () => {
//   return (
//     <section className="join-section">
//       <Header />
//       <div className="join-page-text">
//         <h1>Join us at Jodna Technologies!</h1>
//         <p>
//           Ready for growth and innovation? Join Jodna Technologies and connect
//           with top talent to shape the future. Whether you're a freelancer
//           seeking opportunities or a business in need of skilled talent, we're
//           here to connect you with success.
//         </p>
//         <button className="join-btn">
//           <p>Explore our Services</p>
//           <img
//             src="assets/arrow2.svg"
//             alt=""
//           />
//         </button>
//       </div>
//       <img
//         src="assets/join.svg"
//         alt=""
//         className="join-img"
//       />
//     </section>
//   );
// };
// const Searchbar = () => {
//   const data = ['All', 'SEO', 'Industry News', 'AI', 'Web Dev']
//   return (
//     <>
//       <section className="search">
//         <input
//           type="text"
//           className="search-bar"
//         />
//         <div className="topics"></div>
//       </section>
//     </>
//   );
// }

const BlogSite = () => {
  const [searchQuery, setSearchQuery] = useState(""); // For storing the search input
  const [blogPosts] = useState([
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
    },
  ]);

  // Filter blog posts based on the search query
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div className="title">
        <img src="assets/arrow.svg" alt="" />
        <p className="titles">Popular Topics</p>
        {/* <h2 className="pride">
          Here are answers to common questions asked by our clients
        </h2> */}
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search blog posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchBar}
      />

      {/* Blog Posts */}
      <div style={styles.blogContainer}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} style={styles.blogPost}>
              <img src="{post.imgsrc}" alt="" />
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p>{post.date}</p>
              <p>{post.duration}</p>
            </div>
          ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </div>
  );
};

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

// main comonent
const Aboutus = () => {
  // const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      <section className="hero-section">
        <div className="hero-page-text">
          <h1>Stay Ahead in Digital Innovation</h1>
          <p>
            Explore our latest thoughts, trends, and tips on digital marketing
            and web development.
          </p>
        </div>
        {/* <img
          src="assets/about.svg"
          alt=""
          className="hero-img"
        /> */}
      </section>
      {/* <Searchbar/> */}
      <BlogSite />

      {/* <Values /> */}
      {/* <Achievements /> */}
      {/* <Team /> */}
      {/* <Joinus /> */}
    </>
  );
};
export default Aboutus;
