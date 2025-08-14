import taskImg from "../../assets/workd.avif";
import umlImg from "../../assets/workd.avif";
import KellesImg from "../../assets/KeellsImg.png";
import AfterYouImg from "../../assets/AfterYou.png";
import Fitness from "../../assets/Fit_Tracker.png";

const projects = [
  

  {
    title: "Fitness Tracker",
    short: "Developed a mobile fitness tracker application to support users in achieving their health goals.",
    description:
      "Developed a mobile fitness tracker application to support users in achieving their health goals. Integrated features including personalized workout programs, nutrition plans, and real-time calorie tracking during activities like running and walking.",
    tech: ["Kotlin", "Firebase","Java","Android Studio"],
    image: Fitness,
    link: "https://github.com/yasithh1/uml-generator",
  },
    {
    title: "After You",
    short: "React , Node.js and MySql.",
    description:
      "A fully responsive portfolio built with React, featuring animated sections, smooth scroll, and GitHub Pages deployment. Designed to showcase frontend and backend skills.",
    tech: ["React", "MySQL", "Node.js"],
    image: AfterYouImg,
    link: "https://github.com/yasithh1/portfolio",
  },
   {
    title: "Project Management System",
    short: "Created a project management system to handle personnel, property, and inventory data.",
    description:
      "Created a project management system to handle personnel, property, and inventory data. created a responsive and effective web interface for managing important business data by using Java for the backend and React for the frontend.",
    tech: ["React", "Java", "MySQL","tailwind.css"],
    image: KellesImg,
    link: "https://github.com/yasithh1/uml-generator",
  },
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
    title: "Event Management System",
    short: "Generate UML diagrams from text prompts.",
    description:
      "A tool that converts natural language into UML diagrams using Mermaid.js. Built with Node.js and Express, ideal for quick prototyping and documentation.",
    tech: ["Node.js", "Mermaid.js", "Express"],
    image: umlImg,
    link: "https://github.com/yasithh1/uml-generator",
  }
];

export default projects;
