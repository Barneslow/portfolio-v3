"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import AnimatedList from "./ui/AnimatedList";

type BorderColor = {
  light: string;
  dark: string;
  borderLight: string;
  borderDark: string;
};

interface SkillCardProps {
  children: ReactNode;
  title: string;
  description: string;
  heading?: string;
  categories?: string;
  color: BorderColor;
  list?: string[];
  build?: string[];
  index: number;
}

const SkillCard = ({
  children,
  title,
  description,
  categories,
  color,
  heading,
  list,
  build,
  index,
}: SkillCardProps) => {
  const hidden = {
    opacity: 0,
    y: 50,
  };

  const visible = {
    opacity: 1,
    y: 0,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        duration: 1,
        type: "spring",
        bounce: 0.5,
        delay: index * 0.25,
      }}
      variants={{
        visible,
        hidden,
      }}
      className={`flex flex-col items-center justify-center w-fit text-center p-2 space-y-4 ${color.borderLight} border-t-8 shadow-2xl rounded-lg bg-zinc-100 dark:bg-zinc-700 ${color.borderDark}`}
    >
      <div className="w-24 h-24 p-2 bg-zinc-50 rounded-3xl border-black border-2">
        {children}
      </div>
      <h4 className={`text-2xl font-extrabold ${color.light} ${color.dark}`}>
        {title}
      </h4>
      <p className="max-w-sm text-lg tracking-wide">{description}</p>
      <h5
        className={`text-xl font-extrabold ${color.light} border-b border-zinc-300 ${color.dark}`}
      >
        {heading}
      </h5>
      <p className="text-md">{categories}</p>
      <h5
        className={`text-xl font-extrabold ${color.light} border-b border-zinc-300 ${color.dark}`}
      >
        Tools
      </h5>

      {build ? (
        <AnimatedList list={build} />
      ) : (
        <ul className="flex flex-col space-y-2">
          {list?.map((item) => (
            <li className="text-md">{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default SkillCard;
