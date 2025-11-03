import { useState } from "react";
import { API_BASE_URL } from "../utils";

const techServices = [
  "General Inquiries",
  "Web Development",
  "Mobile App Development",
  "Desktop Application Development",
  "UI/UX Design",
  "E-commerce Solutions",
  "Software Consulting",
  "Cloud Solutions",
  "DevOps & CI/CD",
  "Database Management",
  "API Development & Integration",
  "Cybersecurity & Compliance",
  "Maintenance & Support",
  "Digital Transformation",
  "AI & Machine Learning Solutions",
  "Blockchain Development",
  "IoT Solutions",
  "AR/VR Development",
  "Quality Assurance & Testing",
  "Other",
];

const Contactbox = () => {
  const data = [
    {
      name: "WhatsApp Number",
      data: "+234 9068099899",
      link: "https://wa.me/2349068099899",
    },
    {
      name: "Email Address",
      data: "jodnatechnologies@gmail.com",
      link: "mailto:jodnatechnologies@gmail.com",
    },

    {
      name: "Location",
      data: "Port-Harcourt, Nigeria",
      link: "https://maps.google.com/?q=Port-Harcourt,Nigeria",
    },
  ];

  return (
    <div className="info-div">
      {data.map((item, index) => (
        <div key={index} className="info">
          <div className="text">
            <h5 className="info-title">{item.name}</h5>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="info-text"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.data}
              </a>
            ) : (
              <p className="info-text">{item.data}</p>
            )}
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
    file: null,
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setValues({ ...values, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitStatus(null);

    try {
      // Create FormData for file upload
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("company", values.company);
      formData.append("intservice", values.intservice);
      formData.append("message", values.message);

      if (values.file) {
        formData.append("file", values.file);
      }

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        body: formData,
      });

      const res = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });

        // Reset form
        setValues({
          name: "",
          email: "",
          phone: "",
          company: "",
          intservice: "",
          message: "",
          file: null,
        });
        setAgreedToTerms(false);

        // Clear file input
        const fileInput = document.getElementById("file");
        if (fileInput) fileInput.value = "";
      } else {
        throw error;
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="form">
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Status Message */}
          {submitStatus && (
            <div
              className={`status-message ${submitStatus.type}`}
              style={{
                padding: "12px",
                marginBottom: "20px",
                borderRadius: "4px",
                backgroundColor:
                  submitStatus.type === "success" ? "#d4edda" : "#f8d7da",
                color: submitStatus.type === "success" ? "#155724" : "#721c24",
                border: `1px solid ${
                  submitStatus.type === "success" ? "#c3e6cb" : "#f5c6cb"
                }`,
              }}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Name */}
          <div>
            <label htmlFor="name">Enter Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              disabled={loading}
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
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={loading}
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
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              disabled={loading}
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="company">
              Company Name (eg: Jodna Technologies)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={values.company}
              onChange={handleChange}
              placeholder="Enter your company name"
              disabled={loading}
            />
          </div>

          {/* Select Dropdown */}
          <div>
            <label htmlFor="intservice">Interested Service</label>
            <select
              id="intservice"
              name="intservice"
              value={values.intservice}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select an option</option>
              {techServices.map((service, index) => (
                <option
                  key={index}
                  value={service.toLowerCase().replace(/\s+/g, "-")}
                >
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div className="message">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              disabled={loading}
            ></textarea>
          </div>

          {/* File Upload */}
          <div id="file">
            <label htmlFor="file">Upload File</label>
            <input
              className="file"
              type="file"
              name="file"
              id="file"
              style={{ width: "100%" }}
              onChange={handleFileChange}
              disabled={loading}
            />
          </div>

          {/* Terms and Conditions */}
          {/* <div className="check" style={{ display: "flex" }}>
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              disabled={loading}
            />
            <p>I agree to all the terms and conditions</p>
          </div> */}

          {/* Submit Button */}
          <div>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
        <Contactbox />
      </section>
    </>
  );
};

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does JODNA technologies offer?",
      answer:
        "JODNA Technologies offers comprehensive web development, digital marketing, SEO optimization, mobile app development, and custom software solutions to help businesses grow their online presence and achieve their digital goals.",
    },
    {
      question:
        "Can JODNA technologies help improve my websites search engine ranking?",
      answer:
        "Yes! We specialize in SEO optimization using proven strategies including keyword research, on-page optimization, technical SEO, quality content creation, and link building to improve your search engine rankings and drive organic traffic.",
    },
    {
      question:
        "How long does it take to complete a website development project?",
      answer:
        "Project timelines vary based on complexity and requirements. A basic website typically takes 2-4 weeks, while complex web applications may take 8-12 weeks or more. We provide detailed timelines during the project planning phase.",
    },
    {
      question: "How does JODNA technologies ensure the success of a project?",
      answer:
        "We ensure project success through clear communication, agile methodology, regular progress updates, quality assurance testing, client feedback integration, and dedicated project management. Our team follows industry best practices and maintains transparency throughout the development process.",
    },
    {
      question:
        "Does JODNA technologies provide ongoing support maintenance after project completion?",
      answer:
        "Absolutely! We offer comprehensive post-launch support including regular updates, security patches, performance monitoring, bug fixes, feature enhancements, and 24/7 technical support. We have flexible maintenance packages tailored to your needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="title">
        <img src="assets/arrow.svg" alt="" />
        <p className="titles">Popular Topics</p>
        <h2 className="pride">
          Here are answers to common questions asked by our clients
        </h2>
      </div>

      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15902.389819791879!2d7.0634216434278505!3d4.838972603529294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd41a92a7d39%3A0xa5c51adf45dadfac!2sElelenwo%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1739383663770!5m2!1sen!2sng"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="JODNA Technologies Location"
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
      <section className="git-section">
        <div className="git-text">
          <h1>{h1}</h1>
          <p>{text}</p>
        </div>
      </section>
      <Form />
      <FAQAccordion />
      <Map />
    </>
  );
};
