"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "iPromise's Portfolio Website",
    description: "Translated the client's vision into a visually appealing and user-friendly website design using Next.js components, CSS modules, and responsive design techniques.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/high5dev/ipromise",
    previewUrl: "https://ipromise.vercel.app",
  },
  {
    id: 2,
    title: "Minimalist iframe with MERN stack",
    description: "Full stack website development for Minimalist iframe. Built with MERN stack, integrated with AI image analysis for skincare from haut.ai",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/high5dev/mm-iframe",
    previewUrl: "https://mm-iframe.onrender.com/",
  },
  {
    id: 3,
    title: "Mymanager admin panel with MERN stack",
    description: "Full stack website development for Next Level Media. Mainly focusing on frontend, implementing pixel-perfect",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/high5dev/mm-formbuilder",
    previewUrl: "https://mymanager.com/",
  },
  {
    id: 4,
    title: "Torontovka's advertising platform",
    description: "Participate in UI developement with Angular/Typescript. Collaborate with backend developers, Performance Optimization, Bug fixing, Node module update for security",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/high5dev/torontovka",
    previewUrl: "https://torontovka.com/",
  },
  {
    id: 5,
    title: "Mobile and Web push notification",
    description: "Designed and maintained backend services using Node.js and Python. iZooto chatbot implemenataion.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/high5dev/izooto-plugin",
    previewUrl: "https://panel.izooto.com/",
  },
  {
    id: 6,
    title: "Food ordering platform with Blazor",
    description: "Implementing responsive design and pixel perfect for mobile browsing, get familar with C# and .NET frameworks",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/high5dev/mesinkasir-restuarant",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
