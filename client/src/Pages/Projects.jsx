import React from "react";

import portfolioImage from "../assets/welcome.png";
import affirmImage from "../assets/affirm-app.png";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "This is my react portfolio website. You are currently looking at it!",
      image: portfolioImage,
      link: "https://66136a5819634e42fc18b784--bejewelled-dusk-d2cecf.netlify.app/projects",
      githubRepo: "https://github.com/landonkimber/react-portfolio",
    },
    {
      title: "Affirm",
      description:
        "This is a journaling app that allows users to write daily affirmations. This was a group project that I worked on with other developers.",
      image: affirmImage,
      link: "",
      githubRepo:
        "https://github.com/hyrumsdolan/Untitled-Affirmation-Journal/",
    },
  ];

  return (
    <main>
      <div className="w-screen h-screen">
        <div className="w-screen flex items-center bg-gradient-to-r from-rose-600 to-orange-500">
          <h1 className="text-4xl font-bold mb-6 mt-6 ml-[12.5%] text-white">
            My Projects
          </h1>
        </div>

        <div className="flex justify-center bg-gradient-to-r from-[#fdfdfd] to-[#fcf9f3] w-[100%] h-[100%]">
          <section className="w-4/5 mt-[5%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  githubRepo={project.githubRepo}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Projects;