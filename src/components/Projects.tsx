"use client";

import { IProject } from "@/app/projects/[id]/page";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Project from "./Project";

type ProjectsProps = {
  projects: IProject[];
};

const Projects = ({ projects }: ProjectsProps) => {
  // const [startIndex, setStartIndex] = useState(0);
  // const [renderedItems, setRenderedItems] = useState<IProject[]>(
  //   projects.slice(0, 6)
  // );

  const [startIndex, setStartIndex] = useState(0);

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  function renderItems(array) {
    const renderedItems = array.slice(0, startIndex + 6);
    return (
      <AnimatePresence initial={false}>
        {inView &&
          renderedItems.map((item, index) => (
            <motion.div
              key={item.id}
              transition={{
                duration: 1,
                delay: (index - startIndex) * 0.25,
                y: 0,
              }}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <Project delay={index} project={item} />
            </motion.div>
          ))}
      </AnimatePresence>
    );
  }

  function handleButtonClick() {
    setStartIndex(startIndex + 6);
  }

  return (
    <main
      ref={ref}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 "
    >
      {renderItems(projects)}
      <button onClick={handleButtonClick}>Load More</button>
    </main>
  );
};

export default Projects;
