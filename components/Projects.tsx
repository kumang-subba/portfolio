"use client";
import { ProjectType, projectData } from "@/lib/data";
import Project from "./Project";
import { stagger, useAnimate } from "framer-motion";
import ProjectDetail from "./ProjectDetail";
import { useProjectViewStore } from "@/lib/projectViewStore";
import { useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
type Project = {
  title: string;
  id: string;
  description: string;
  fullImage: string;
  demo: string;
  repo: string;
};
type currentProject = ProjectType | null | undefined;
const Projects = () => {
  const [scope, animate] = useAnimate();

  const { fullScreenProject, inProjectView } = useProjectViewStore();
  const currentProject: currentProject = projectData.find((project) => project.id === inProjectView);
  useEffect(() => {
    if (fullScreenProject) {
      animate([
        [
          ".project-title",
          {
            opacity: 0,
            // x: "-200px",
          },
          {
            duration: 0.3,
            delay: stagger(0.05),
          },
        ],
        [
          ".fullscreen-project",
          {
            opacity: 1,
            scale: 1,
            pointerEvents: "auto",
          },
          { at: "<" },
        ],
        [
          `.active-card`,
          {
            opacity: 0,
            scale: 0,
          },
          { at: "<" },
        ],
      ]);
    } else {
      animate([
        [
          ".project-title",
          {
            opacity: 1,
            x: 0,
          },
          {
            duration: 0.3,
            delay: stagger(0.05),
          },
        ],
        [
          ".fullscreen-project",
          {
            opacity: 0,
            scale: 0.5,
            pointerEvents: "none",
          },
          { at: "<" },
        ],
        [
          `.active-card`,
          {
            opacity: 1,
            scale: 1,
          },
          { at: "<" },
        ],
      ]);
    }
  }, [fullScreenProject, animate]);
  const CurrentCard = ProjectCard[currentProject?.id as keyof typeof ProjectCard];
  return (
    <div className="max-w-6xl px-4 mx-auto">
      <h1 className="text-center font-bold uppercase text-2xl md:text-4xl lg:text-6xl leading-loose pt-8">Projects</h1>
      <div ref={scope}>
        {currentProject && (
          <ProjectDetail
            id={currentProject.id}
            imageSrc={currentProject.fullImage}
            title={currentProject.shortTitle}
            description={currentProject.description}
            logo={currentProject.logo}
            demo={currentProject.demo}
            repo={currentProject.repo}
          />
        )}
        <div className="flex w-full gap-2 md:gap-20 items-start">
          <div className="w-full py-[10vh] md:py-[50vh]">
            <ul>
              {projectData.map((project) => (
                <li key={project.id}>
                  <Project id={project.id}>{project.title}</Project>
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky top-0 left-0 flex h-screen w-full items-center justify-center">
            <div className="w-full aspect-square bg-inherit rounded-2xl relative">
              {currentProject && <CurrentCard id={currentProject?.id as string} isFullScreen={!!fullScreenProject} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
