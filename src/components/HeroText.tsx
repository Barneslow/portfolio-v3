"use client";

import { child, container } from "@/animations/herotext";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      className="flex flex-col space-y-4 max-w-5xl  text-zinc-900  dark:text-zinc-50 md:space-y-8 md:w-8/12"
    >
      <motion.h1
        variants={child}
        className="text-2xl font-extrabold uppercase md:text-6xl"
      >
        Designer, Marketer & FullStack Developer
      </motion.h1>
      <motion.h3 variants={child} className="text-xl font-bold md:text-2xl">
        I love to design beautiful, user-friendly interfaces and code simple,
        elegant projects
      </motion.h3>
      <motion.p variants={child} className="text-sm md:text-lg italic">
        Trying to make a positive impact on the world
      </motion.p>
    </motion.div>
  );
};

export default HeroText;
