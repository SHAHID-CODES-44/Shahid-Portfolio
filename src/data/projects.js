// src/data/projects.js
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
const projects = [
  {
    title: "Goa-Tourism-Site",
    imageSrc: project1,
    description:
      "Goa Heritage Hub is a tourism website that helps users explore Goa’s heritage sites with maps, routes, and destination info.",
    skills: ["MySQL", "Express", "React", "Node"],
    demo: "https://goa-tourism-site.vercel.app/",
    source: "https://github.com/SHAHID-CODES-44/GOA-TOURISM-SITE",
  },
  {
    title: "E-Library",
    imageSrc: project2,
    description:
      "A library management system allowing students to reserve books and admins to manage bookings, approvals, and book inventory efficiently.",
    skills: ["HTML", "CSS", "PHP", "MySQL"],
    demo: "http://localhost/E_Library/index.php",
    source: "https://github.com/SHAHID-CODES-44/E_Library",
  },
  {
    title: "Netflix Clone",
    imageSrc: project3,
    description:
      "This project is a Website with React-based practice interface to improve frontend skills by creating a multi-step subscription flow with styled components and logic.",
    skills: ["React"],
    demo: "https://shahid-codes-44.github.io/NetflixClone/",
    source: "https://github.com/SHAHID-CODES-44/NetflixClone",
  },
  {
    title: "Figma, CampusKart",
    imageSrc: project4,
    description:
      "CampusKart is a student-focused e-commerce app that helps college students find and buy essentials easily and affordably.",
    skills: ["Figma"],
    demo:
      "https://www.figma.com/proto/vt7AU0PNIVIYQNpRuhgEzv/UI-UX-Experiments?page-id=82%3A19&node-id=398-944&p=f&viewport=560%2C97%2C0.29&t=Ktl7xswxdj0KWhUw-1&scaling=scale-down&content-scaling=fixed",
    source:
      "https://www.figma.com/design/vt7AU0PNIVIYQNpRuhgEzv/Experiment-Project?node-id=82-19&t=MCFwYLtMkMSf4hAL-1",
  },
];

export default projects;
