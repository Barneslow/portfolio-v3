"use client";

import { Permanent_Marker } from "next/font/google";
import Link from "next/link";

import { motion, useCycle } from "framer-motion";
import { child, container } from "@/animations/nav-animations";
import { ThemeToggle } from "./ui/ThemeToggle";
import { MobileMenu } from "./ui/MobileMenu";

const marker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <motion.nav className="fixed backdrop-blur-sm px-2 md:px-4 bg-zinc-100 dark:bg-zinc-800 z-50 top-0 left-0 right-0 h-16 border-b border-slate-300 dark:slate-300 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between item-center">
        <Link
          href="/"
          className={`text-3xl text-sky-900 rounded-lg hover:underline dark:text-amber-300
            ${marker.className}`}
        >
          Barneslow
        </Link>
        <MobileMenu />
        <motion.ul
          variants={container}
          initial="initial"
          animate="animate"
          className="hidden md:flex gap-2 list-none"
        >
          <motion.li variants={child}>
            <ThemeToggle />
          </motion.li>
          <motion.li variants={child}>
            <a href="/#about" className="nav-btn">
              About
            </a>
          </motion.li>
          <motion.li variants={child}>
            <a href="/#skills" className="nav-btn">
              Skills
            </a>
          </motion.li>
          <motion.li variants={child}>
            <a href="/#projects" className="nav-btn">
              Projects
            </a>
          </motion.li>
          <motion.li variants={child}>
            <button className="nav-btn">Contact</button>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
