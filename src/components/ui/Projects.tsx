import { useInView } from "react-intersection-observer";
import Project from "./Project";

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <main
      ref={ref}
      className="grid grid-cols-1 gap-6 xl:grid-cols-2 2xl:grid-cols-3"
    >
      <Project inView={inView} delay={0} />
      <Project inView={inView} delay={1} />
      <Project inView={inView} delay={2} />
      <Project inView={inView} delay={3} />
      <Project inView={inView} delay={4} />
      <Project inView={inView} delay={5} />
    </main>
  );
};

export default Projects;
