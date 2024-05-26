import React, { useRef, useState } from "react";
import dashboard from "../assets/manuel-dashboard.png";
import nyk from "../assets/nyk.png";
import { ImEmbed2 } from "react-icons/im";
import Project from "../components/Project";

export default function Projects() {
  const [project, setProject] = useState({
    title: "Manuel's Pharmacy Inventory System",
    description:
      " A fullstack inventory system that helps the client to automate their inventory. The web app has a various features consist ofdashboard, sales transactions (POS), User Management , ProductManagement , Container/Shelves Management , Purchase tosupplier, Supplier Management, Request from the pharmacist and Reports.",
    technologies: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "ExpressJs",
      },
      {
        id: 3,
        name: "NodeJs",
      },
      {
        id: 4,
        name: "MySql",
      },
      {
        id: 5,
        name: "Bootstrap",
      },
    ],
    img: dashboard,
    liveView: "https://manuel-pharmacy-inventory.netlify.app/",
    github: "https://github.com/PalermoJ12/manuels-pharmacy",
  });
  const [project1, setProject1] = useState({
    title: "Automated Asset Management System",
    description:
      " A multi-platform web application created to improve the administration and monitoring of organizational assets. The system uses a microservice architectural approach, which improves maintainability and enables for smooth connection with other systems. This project entailed moving from manual monitoring methods to a completely automated system, which resulted in greater efficiency and accuracy.",
    technologies: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Laravel",
      },
      {
        id: 3,
        name: "Sanctum",
      },
      {
        id: 4,
        name: "Flutter",
      },
      {
        id: 5,
        name: "MySql",
      },
      {
        id: 6,
        name: "Tailwind",
      },
      {
        id: 7,
        name: "Shadcn",
      },
    ],
    img: nyk,
    liveView: "https://manuel-pharmacy-inventory.netlify.app/",
    github: "https://github.com/jerichopalermo/manuel-pharmacy-inventory",
  });

  return (
    <>
      <div className="w-full flex justify-center font-poppins h-1/2 my-24 ">
        <div className="w-3/4 relative">
          <Project
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            img={project.img}
            github={project.github}
          />
          <Project
            title={project1.title}
            description={project1.description}
            technologies={project1.technologies}
            img={project1.img}
          />
        </div>
      </div>
    </>
  );
}
