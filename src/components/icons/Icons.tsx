"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Icons = ({ icons }: { icons: string[] }) => {
  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 0.25, delayChildren: 1 } },
  };

  const child = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.25, type: "spring", bounce: 0.3 },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap gap-2"
      variants={container}
      initial="initial"
      animate="animate"
    >
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          variants={child}
          className="border border-zinc-700 px-2 py-1 rounded-lg bg-zinc-50"
        >
          <Image
            className="h-12 w-12 "
            src={`/images/icons/${icon.toLowerCase()}.svg`}
            alt="random-text"
            width={100}
            height={100}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Icons;
