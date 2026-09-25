import KellesImg from "../../assets/KeellsImg.png";
import AfterYouImg from "../../assets/AfterYou.png";
import Fitness from "../../assets/Fit_Tracker.png";
import toolzEasyImage from "../../assets/ToolzEasy-preview.svg";
import smartBackpackImage from "../../assets/SmartBackpack-preview.svg";
import eventManagementImage from "../../assets/EventManagement-preview.svg";
import textileManagementImage from "../../assets/TextileManagement-preview.svg";

const projects = [
  {
    title: "ToolzEasy",
    short: "A static HTML and CSS site for free PDF, image, text, and utility tools.",
    description:
      "A static website built with HTML, CSS, and JavaScript that brings together free browser-based tools for PDF, images, text, and everyday tasks. Most file processing happens locally in the browser, so files are not uploaded.",
    tech: ["HTML", "CSS", "JavaScript", "Browser Tools"],
    image: toolzEasyImage,
    link: "https://toolzeasy.com/",
    linkLabel: "Visit ToolzEasy →",
  },
  {
    title: "Fitness Tracker",
    short: "Developed a mobile fitness tracker application to support users in achieving their health goals.",
    description:
      "Developed a mobile fitness tracker application to support users in achieving their health goals. Integrated features including personalized workout programs, nutrition plans, and real-time calorie tracking during activities like running and walking.",
    tech: ["Kotlin", "Firebase", "Java", "Android Studio"],
    image: Fitness,
    link: "https://github.com/yasithh1/Fitness_Tracker.git",
  },
  {
    title: "After You",
    short: "Plan your digital afterlife and decide what happens to your online accounts.",
    description:
      "A digital afterlife planning application built with React, Spring Boot, and MySQL. Users can manage digital accounts and subscriptions, assign a trusted executor and optional legal verifier, choose whether accounts should be deleted or transferred, and store recovery codes. Secure verification and legal proof-of-death checks support the execution process.",
    tech: ["React", "Spring Boot", "MySQL"],
    image: AfterYouImg,
    link: "https://github.com/hirunaPankaja/AfterYou.git",
  },
  {
    title: "Project Management System",
    short: "Created a project management system to handle personnel, property, and inventory data.",
    description:
      "Created a project management system to handle personnel, property, and inventory data. Created a responsive web interface using Java for the backend and React for the frontend.",
    tech: ["React", "Java", "MySQL", "Tailwind CSS"],
    image: KellesImg,
    link: "https://github.com/hirunaPankaja/project-management-system.git",
  },
  {
    title: "Event Management System",
    short: "Schedule events and manage attendee registration with a Java and MySQL system.",
    description:
      "An event management system built with Java, MySQL Server, and NetBeans. It supports event scheduling and attendee registration, with backend functionality implemented in Java and SQL.",
    tech: ["Java", "MySQL Server", "NetBeans"],
    image: eventManagementImage,
  },
  {
    title: "Textile Management System (Group)",
    short: "Manage textile inventory, employees, customers, and sales reporting.",
    description:
      "A group-built textile management system for tracking inventory, managing employees, and reporting sales. Contributions included integrated Crystal Reports, customer management, and stock-list management workflows.",
    tech: ["C#", "Visual Studio", "SQL Server", "Crystal Reports"],
    image: textileManagementImage,
  },  {
    title: "Smart Backpack",
    short: "An IoT backpack combining safety, health, and organization with mobile app control.",
    description:
      "An IoT-based smart backpack for students, hikers, and commuters. Smart sensors and modules connect with a mobile app to support safety, health, and organization.",
    tech: ["Arduino IDE", "ESP32 Libraries", "Flutter / React Native"],
    image: smartBackpackImage,
    link: "https://github.com/hirunaPankaja/Smart-Backpack.git",
  },
];

export default projects;





