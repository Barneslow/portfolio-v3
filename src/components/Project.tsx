import { IProject } from "@/app/projects/[id]/page";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type ProjectProps = {
  delay: number;
  // inView: boolean;
  project: IProject;
};

const Project = ({ delay, project }: ProjectProps) => {
  // const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       opacity: 1,
  //       scale: 1,
  //       y: 0,
  //       transition: {
  //         duration: 0.5,
  //         delay: delay * 0.25,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({ opacity: 0, scale: 0.95, y: 10 });
  //   }
  // }, [inView, delay, animation]);

  //   let color = "var(--blue)";

  //   if (index === 0) {
  //     color = "var(--gold)";
  //   }
  //   if (index === 1) {
  //     color = "var(--silver)";
  //   }

  //   if (index === 2) {
  //     color = "var(--bronze)";
  //   }

  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg  aspect-video bg-slate-900 border-2 border-zinc-900 dark:border-zinc-50"
      // animate={animation}
      // ref={ref}
    >
      <Image
        alt="dummy text"
        src={`/images/${project.image}`}
        width={100}
        height={100}
        sizes="100vw"
        className="w-full h-full"
      />
      <div className="absolute flex flex-col space-y-2 p-3 lg:p-6 items-center justify-center top-0 bottom-0 right-0 left-0 duration-300 opacity-0 bg-gradient-to-br from-indigo-600 to-purple-900 group-hover:opacity-100 group-hover:scale-105">
        <p className="text-white text-center">{project.description}</p>
        <Link
          href={`/projects/${project.id}`}
          className="px-10 py-2 bg-zinc-900 text-zinc-50 rounded-3xl hover:bg-zinc-50 hover:text-zinc-900 duration-200"
        >
          See More
        </Link>
      </div>
    </motion.div>
  );
};

export default Project;
