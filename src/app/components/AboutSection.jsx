"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        <ul className="list-disc pl-6">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>PHP</li>
          <li>Python</li>
          <li>C#</li>
          <li>Ruby</li>
          <li>Golang</li>
          <li>Erlang</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>React</li>
          <li>React Native</li>
          <li>Angular</li>
          <li>Vue</li>
          <li>Laravel</li>
          <li>CodeIgniter</li>
          <li>Django</li>
          <li>Blazor</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>Node.js</li>
          <li>Express</li>
          <li>APIs</li>
          <li>RESTful APIs</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>Postman</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>AWS</li>
          <li>Azure</li>
          <li>Docker</li>
          <li>Vercel</li>
          <li>Heroku</li>
          <li>Nginx</li>
          <li>Apache</li>
          <li>Linux Server</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>Git</li>
          <li>Agile</li>
          <li>Jira</li>
          <li>Agora</li>
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Microsoft Office</li>
          <li>Kanban</li>
        </ul>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="list-disc pl-2">
        <strong>Master&apos;s in Software Engineering</strong><br/>
        <span>07/2014</span><br/>
         Shanghai Jiaotong University
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript Intern from HackerRank</li>
        <li>Software Engineer Intermediate from HackerRank</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "communication",
    content: (
      <ul className="list-disc pl-2">
        <li>Chinese</li>
        <li>English</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="Cai" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I bring extensive experience in both frontend and backend development,
            adept at turning ideas into reality in fast-paced, deadline-driven environments.
            My technical expertise covers a broad spectrum including React, Node.js,
            Python, and cloud platforms such as AWS and Azure. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("communication")}
              active={tab === "communication"}
            >
              {" "}
              Languages{" "}
            </TabButton>
          </div>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
