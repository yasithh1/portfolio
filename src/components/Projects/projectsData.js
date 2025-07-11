import taskImg from "../../assets/workd.avif";
import portfolioImg from "../../assets/network.avif";
import umlImg from "../../assets/cloud.avif";
import AfterYouImg from "../../assets/AfterYou.png";

const projects = [
  {
    title: "Smart Backpack",
    short: "Flutter with react.",
    description:
      "A secure backend service for managing tasks with user authentication, role-based access, and PostgreSQL integration. Built with Spring Boot and deployed via Render.",
    tech: ["Flutter", "JWT", "PostgreSQL"],
    image: taskImg,
    link: "https://github.com/yasithh1/task-tracker-api",
  },
  {
    title: "After You",
    short: "React , Node.js and MySql.",
    description:
      "A fully responsive portfolio built with React, featuring animated sections, smooth scroll, and GitHub Pages deployment. Designed to showcase frontend and backend skills.",
    tech: ["React", "Framer Motion", "GitHub Pages"],
    image: AfterYouImg,
    link: "https://github.com/yasithh1/portfolio",
  },
  {
    title: "Event Management System",
    short: "Generate UML diagrams from text prompts.",
    description:
      "A tool that converts natural language into UML diagrams using Mermaid.js. Built with Node.js and Express, ideal for quick prototyping and documentation.",
    tech: ["Node.js", "Mermaid.js", "Express"],
    image: umlImg,
    link: "https://github.com/yasithh1/uml-generator",
  },
  {
    title: "Fitness Tracker",
    short: "Generate UML diagrams from text prompts.",
    description:
      "A tool that converts natural language into UML diagrams using Mermaid.js. Built with Node.js and Express, ideal for quick prototyping and documentation.",
    tech: ["Node.js", "Mermaid.js", "Express"],
    image: umlImg,
    link: "https://github.com/yasithh1/uml-generator",
  },
   {
    title: "Project Management System",
    short: "Generate UML diagrams from text prompts.",
    description:
      "A tool that converts natural language into UML diagrams using Mermaid.js. Built with Node.js and Express, ideal for quick prototyping and documentation.",
    tech: ["Node.js", "Mermaid.js", "Express"],
    image: umlImg,
    link: "https://github.com/yasithh1/uml-generator",
  },
];

export default projects;
