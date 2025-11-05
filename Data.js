import { assets } from "./public/assets/images";

export const Articles = [
  {
    id: 1,
    Image: assets.branding,
    title: "Brand Identity for Google",
    category: "Branding",
    tags: ["Adobe Creative Suite", "Figma", "Photoshop"],
    intro: "Through thoughtful design, storytelling, and consistency, we shape brand experiences that leave lasting impressions. Whether you’re launching something new or reinventing your image, we ensure every color, word, and detail reflects your purpose and vision.",
    details:{
     challenge:[
      " No unified brand voice or story",
      "Outdated logo and visuals",
      "Low customer recognition and engagement"
     ],
     approach:[
      "We conducted deep brand discovery sessions to understand their mission, values, and target audience. From there, we created a strategic foundation for a cohesive and memorable identity. ",
     ],
     solution:[
      "We crafted a bold, modern visual system — including a new logo, color palette, typography, and messaging framework — that positioned Nova Labs as an innovative, trustworthy brand with a voice that resonates.",
     ],
    },
  },
  {
    id: 2,
    Image: assets.article2Img,
    title: "Custom CRM Development",
    category: "Web Development",
    tags: ["MySQL", "Laravel", "Node.js"],
    intro: " We craft data-driven marketing strategies that engage, nurture, and retain your audience — turning casual visitors into loyal advocates. From personalized email campaigns and social storytelling to performance-driven advertising, every move is built around understanding your customers and speaking their language.",
    details:{
      challenge:[
        "Low customer loyalty and engagement",
        "No CRM system for tracking interactions",
        "Missed upsell and retention opportunities",
      ],
      approach:[
        "We implemented a CRM platform and developed personalized communication workflows — from onboarding to follow-up campaigns.",
      ],
      solution:[
       "With automated emails, segmentation, and data-driven insights, BrightPath boosted retention by 45% and strengthened long-term customer relationships.",
      ],
    },
  },
  {
    id: 3,
    Image: assets.mobile,
    title: "Mobile App for FitTrack",
    category: "Mobile Development",
    tags: ["React Native", "Firebase", "Redux"],
    intro:" Your audience lives on mobile — and your brand should too.With our Mobile App Development service, we bring your ideas to life through user-friendly, high-performing apps that deliver seamless experiences on every device.",
    details:{
      challenge:[
        "Poor app performance and loading speed",
        "Unclear UX flow",
        "Limited real-time tracking features",
      ],
      approach:[
        "We focused on user-centric design, integrating modern mobile frameworks and APIs for seamless data sync and community features.",
      ],
      solution:[
       "We launched a cross-platform app with intuitive navigation, progress tracking, and gamified experiences — resulting in a 60% increase in active users within 3 months.",
      ],
    },
  },
  {
    id: 4,
    Image: assets.seo,
    title: "SEO Optimization for Soel",
    category: "Digital Marketing",
    tags: ["SEMrush", "Ahrefs", "Google Analytics"],
    intro: "Through a blend of data-driven keyword research, technical excellence, and compelling content, we help your website climb search rankings, attract the right audience, and convert clicks into loyal customers. ",
    details:{
      challenge: [
        "Low keyword visibility",
        "Poor site structure and slow loading speed",
        "Weak backlink profile",
      ],
      approach:[
         "We performed a full SEO audit, restructured on-page content, and implemented a keyword and backlink strategy aligned with their audience’s search intent."
      ],
      solution:[
       "Within 8 weeks, Soel Beauty ranked on the first page for 15+ targeted keywords, increased organic traffic by 180%, and saw a steady growth in online sales."
      ],
    },
  },
  {
    id: 5,
    Image: assets.article5Img,
    title: "Marketing Campaign for ABC",
    category: "Digital Marketing",
    tags: ["Google Analytics", "Facebook Ads", "MailChimp"],
    intro: "Our Digital Marketing solutions are built to help you reach the right audience, at the right time, with the right message.",
    details: {
      challenge: [
        "Inconsistent visuals and unclear messaging",
        "Weak emotional connection with audience",
        "Low brand recall",
      ],
      approach:
        "We conducted brand discovery to build a unified voice and story that resonates.",
      solution:
        "Delivered a cohesive visual identity, logo system, and messaging that elevated market perception.",
    },
  },
  {
    id: 6,
    Image: assets.article6Img,
    title: "E-commerce Website for Corp",
    category: "Web Development",
    tags: ["React", "MongoDB", "Node.js"],
    intro: "We create fast, secure, and scalable e-commerce platforms that make shopping effortless and conversion-driven. From intuitive product navigation to seamless checkout flows, every element is designed to turn browsers into buyers. ",
     details: {
      challenge: [
        "Poor mobile responsiveness leading to lost sales",
        "Complex checkout process causing cart abandonment",
        "Limited integration capabilities with marketing tools",
      ],
      approach:
        "We implemented a comprehensive strategy focused on user experience and performance.",
      solution:
        "Our team delivered a modern, scalable e-commerce platform that addressed all key challenges.",
    },
  },
];

export const FeedbackData = [
  {
    image: assets.user1Img,
    name: "Adewale Austin",
    country: "Abuja, Nigeria",
    details:
      "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
    date: "30 October 2024",
  },
  {
    image: assets.user2Img,
    name: "Sarah Abraham",
    country: "Ontario, Canada",
    details:
      "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
    date: "30 October 2024",
  },
  {
    image: assets.user3Img,
    name: "Adewale Austin",
    country: "Abuja, Nigeria",
    details:
      "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
    date: "30 October 2024",
  },
];

export const detailsData = [
  {
    icon: assets.clientIcon,
    heading: "Client",
    subHeading: "Corp Corporation",
  },
  {
    icon: assets.industryIcon,
    heading: "Industry",
    subHeading: "Retail & E-commerce",
  },
  {
    icon: assets.techStackIcon,
    heading: "Tech Stack",
    tags: true,
  },
  {
    icon: assets.durationIcon,
    heading: "Duration",
    subHeading: "2 Months",
  },
];
