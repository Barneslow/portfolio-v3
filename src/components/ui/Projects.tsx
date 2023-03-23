"use client";

import { IProject } from "@/app/projects/[id]/page";
import { useInView } from "react-intersection-observer";
import Project from "./Project";

type ProjectsProps = {
  projects: IProject[];
};

const Projects = ({ projects }: ProjectsProps) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <main
      ref={ref}
      className="grid grid-cols-1 gap-6 xl:grid-cols-2 2xl:grid-cols-3"
    >
      {projects.map((prj, index) => (
        <Project inView={inView} delay={index} project={prj} />
      ))}
    </main>
  );
};

export default Projects;
