"use-client";

import { motion, useAnimation } from "framer-motion";
import { ChartIcon, CodeIcon, PaintBrushIcon } from "../icons/SkillsIcons";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function SlideSwiper() {
  const animation = useAnimation();

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 0.5 } },
  };

  const child = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else {
      animation.start("initial");
    }
  }, [animation, inView]);

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="initial"
      animate={animation}
      className="flex flex-col overfollow-scroll space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0 "
    >
      <motion.div
        variants={child}
        className="flex flex-col items-center justify-center h-full text-center p-5 space-y-4 border-t-green-800 border-t-8 shadow-md rounded-lg bg-zinc-50 dark:bg-zinc-700 dark:border-t-green-500"
      >
        <div className="w-24 h-24 p-2 bg-zinc-50 rounded-3xl border-black border-2">
          <PaintBrushIcon />
        </div>
        <h4 className="text-3xl font-extrabold text-green-800 dark:text-green-500">
          Designer
        </h4>
        <p className="max-w-md text-lg">
          Minimalistic content structure with clean, colourful design patterns.
          Varied animations to a page to life!
        </p>
        <h5 className="text-2xl font-extrabold text-green-800 border-b-2 border-zinc-300  dark:text-green-500">
          Things I enjoy designing
        </h5>
        <p className="text-lg">UX, UI, Web, Apps, Logos</p>
        <h5 className="text-2xl font-extrabold text-green-800 border-b-2 border-zinc-300  dark:text-green-500">
          Tools Used
        </h5>
        <ul className="flex flex-col space-y-2">
          <li className="text-lg">Framer Motion</li>
          <li className="text-lg">React-Native-Reanimated</li>
          <li className="text-lg">Tailwind / CSS / Sass</li>
          <li className="text-lg">Figma</li>
          <li className="text-lg">Photoshop</li>
        </ul>
      </motion.div>

      <motion.div
        variants={child}
        className="flex flex-col items-center justify-center h-full text-center p-5 space-y-4 border-t-blue-800 border-t-8 shadow-md rounded-lg bg-zinc-50 dark:bg-zinc-700 dark:border-t-blue-500"
      >
        <div className="w-24 h-24 p-2 bg-zinc-50 rounded-3xl border-black border-2">
          <CodeIcon />
        </div>
        <h4 className="text-3xl font-extrabold text-blue-800 dark:text-blue-500">
          Developer
        </h4>
        <p className="max-w-md text-lg">
          Writing elegant, legible and reusable code. Imagination and creation!
          Tackling problems and finding solutions!
        </p>
        <h5 className="text-2xl font-extrabold text-blue-800 border-b-2 border-zinc-300  dark:text-blue-500">
          Tools Used
        </h5>
        <ul className="flex flex-col space-y-2">
          <li className="text-lg">Javascript / HTML / CSS</li>
          <li className="text-lg">React / NextJS</li>
          <li className="text-lg">React-Native</li>
          <li className="text-lg">NodeJS</li>
          <li className="text-lg">MongoDB / Airtable / Firebase</li>
          <li className="text-lg">Pug</li>
        </ul>
      </motion.div>

      <motion.div
        variants={child}
        className="flex flex-col items-center justify-center h-full text-center p-5 space-y-4 border-t-red-800 border-t-8 shadow-md rounded-lg bg-zinc-50 dark:bg-zinc-700 dark:border-t-red-500"
      >
        <div className="w-24 h-24 p-2 bg-zinc-50 rounded-3xl border-black border-2">
          <ChartIcon />
        </div>
        <h4 className="text-3xl font-extrabold text-red-800 dark:text-red-500">
          Marketer
        </h4>
        <p className="max-w-md text-lg">
          Running million dollar social media campaigns. Designing, analysing
          and scaling across all major platforms.
        </p>
        <h5 className="text-2xl font-extrabold text-red-800 border-b-2 border-zinc-300  dark:text-red-500">
          Plaforms used
        </h5>
        <p className="text-lg">
          Facebook, Snapchat, Tiktok, Twitter, Instagram
        </p>
        <h5 className="text-2xl font-extrabold text-red-800 border-b-2 border-zinc-300  dark:text-red-500">
          Tools Used
        </h5>
        <ul className="flex flex-col space-y-2">
          <li className="text-lg">Photoshop / PremierPro / Canva</li>
          <li className="text-lg">Unbounce / ClickFunnels</li>
          <li className="text-lg">Internal campaign managers</li>
          <li className="text-lg">Wordpress</li>
          <li className="text-lg">Voluum</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
