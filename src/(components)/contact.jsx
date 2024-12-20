import { useState } from "react";
import Header from "./Navbar";
import { Footer } from "./Navbar";
const Contactbox = () => {
  const data = [
    {
      imgsrc: "assets/.svg",
      name: "Phone Number",
      data: "23",
    },
    {
      imgsrc: "assets/.svg",
      name: "Email Address",
      data: "jodnatechnologies@gmail.com",
    },
    {
      imgsrc: "assets/.svg",
      name: "Quick Contact",
      data: "mararaba",
    },
    {
      imgsrc: "assets/.svg",
      name: "Location",
      data: "Port-Harcourt, Nigeria",
    },
  ];
  return (
    <div className="info-div">
      {data.map((data, index) => (
        <div
          key={index}
          className="info"
        >
          <img
            className="info-img"
            src={data.imgsrc}
            alt=""
          />
          <div className="text">
            <h5 className="info-title">{data.name}</h5>
            <p className="info-text">{data.data}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    intservice: "",
    message: "",
    file: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("url", values);
    console.log(values);
  };
  const ResetFun = () => {
    setValues({ name: "", email: "", phone: "" });
  };
  return (
    <>
      <section className="form">
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name">Enter Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="company">Company Name (ex Google)</label>
            <input
              type="text"
              id="company"
              name="company"
              value={values.company}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your company name"
            />
          </div>

          {/* Select Dropdown */}
          <div>
            <label htmlFor="intservice">Interested Service</label>
            <select
              id="intservice"
              name="intservice"
              value={values.company}
              onChange={(e) => handleChange(e)}
              required
            >
              <option value="">Select an option</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="sales">Sales</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="message">
            <label htmlFor="Project Brief / Message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={(e) => handleChange(e)}
              placeholder="Write your message here..."
              // rows="5"
              required
            ></textarea>
          </div>
          <div id="file">
            <label htmlFor="file">Upload File</label>
            <input
              className="file"
              type="file"
              value={values.file}
              name="file"
              id="file"
            />
          </div>
          <div className="check">
            <input
              type="checkbox"
              name=""
              id=""
            />
            <p>I agree to all the terms and conditions</p>
          </div>
          {/* Submit Button */}
          <div>
            <button type="submit">Submit</button>
            {/* <button
              type="reset"
              onClick={ResetFun}
            ></button> */}
          </div>
        </form>
        <Contactbox />
      </section>
    </>
  );
};

// import "./FAQAccordion.css"; // Import the CSS for styling

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // List of FAQs
  const faqs = [
    {
      question: "What services does JODNA technologies offer?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question:
        "Can JODNA technologies help improve my websites search engine ranking?",
      answer:
        "React creates a virtual DOM to efficiently update and render only the necessary parts of the UI.",
    },
    {
      question:
        "How lond does it take to complete a website development project?",
      answer: "Components are reusable building blocks in React applications.",
    },
    {
      question: "How does JODNA technologies ensure the success of a project?",
      answer: "State allows you to manage dynamic data in a component.",
    },
    {
      question:
        "Does JODNA technologies provide ongoing support maintenance after project completion?",
      answer:
        "You can use CSS media queries or libraries like TailwindCSS, Bootstrap, or Styled Components.",
    },
  ];

  // Toggle the active FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Collapse if already active
  };

  return (
    <div className="faq-container">
      <div className="title">
        <img
          src="assets/arrow.svg"
          alt=""
        />
        <p className="titles">Popular Topics</p>
        <h2 className="pride">
          Here are answers to common questions asked by our clients
        </h2>
      </div>

      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
          >
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="arrow">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941608468385!3d37.77492977975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f222b69%3A0xa9bd51793d9fbdde!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1670909379123!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export const Contact = () => {
  const h1 = "Get in Touch";
  const text =
    "We're here to help you with your web development, digital marketing and business growth needs. Contact us today to start the conversation.";
  return (
    <>
      <Header></Header>
      <section className="git-section">
        <div className="git-text">
          <h1>{h1}</h1>
          <p>{text}</p>
        </div>
      </section>
      <Form />
      <FAQAccordion />
      <Map />
      <Footer />
    </>
  );
};
