import taskImg from "../../assets/workd.avif";
import portfolioImg from "../../assets/network.avif";
import umlImg from "../../assets/cloud.avif";

const projects = [
  {
    title: "Task Tracker API",
    short: "Spring Boot REST API with JWT.",
    description:
      "A secure backend service for managing tasks with user authentication, role-based access, and PostgreSQL integration. Built with Spring Boot and deployed via Render.",
    tech: ["Spring Boot", "JWT", "PostgreSQL"],
    image: taskImg,
    link: "https://github.com/yasithh1/task-tracker-api",
  },
  {
    title: "Animated Portfolio",
    short: "React portfolio with Framer Motion and GitHub Pages.",
    description:
      "A fully responsive portfolio built with React, featuring animated sections, smooth scroll, and GitHub Pages deployment. Designed to showcase frontend and backend skills.",
    tech: ["React", "Framer Motion", "GitHub Pages"],
    image: portfolioImg,
    link: "https://github.com/yasithh1/portfolio",
  },
  {
    title: "UML Generator",
    short: "Generate UML diagrams from text prompts.",
    description:
      "A tool that converts natural language into UML diagrams using Mermaid.js. Built with Node.js and Express, ideal for quick prototyping and documentation.",
    tech: ["Node.js", "Mermaid.js", "Express"],
    image: umlImg,
    link: "https://github.com/yasithh1/uml-generator",
  },
];

export default projects;
