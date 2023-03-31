import { child, container } from "@/animations/nav-animations";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const Path = (props: any) => (
  <motion.path
    className="stroke-zinc-900 dark:stroke-zinc-100"
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <div className="flex space-x-4 md:hidden">
        <ThemeToggle />
        <button onClick={() => toggleOpen()} className="relative p-2 h-10 w-10">
          <motion.svg
            className="h-8 w-8 z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 23 23"
            animate={isOpen ? "open" : "closed"}
            initial={false}
          >
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </motion.svg>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{ duration: 0.3 }}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            className="fixed z-10 top-0 bottom-0 left-0 right-0 md:hidden p-10 pb-5 rounded-sm h-fit opacity-95 w-screen bg-zinc-50 border-b border-zinc-900 dark:bg-zinc-800 dark:border-zinc-50"
          >
            <motion.ul
              initial="initial"
              animate="animate"
              variants={container}
              className="flex flex-col uppercase divide-y divide-zinc-50 w-full text-center mt-10"
            >
              <motion.li
                variants={child}
                className="w-full py-3 hover:text-amber-400"
                onClick={() => toggleOpen()}
              >
                <a href="/#about">About</a>
              </motion.li>
              <motion.li
                variants={child}
                className="w-full py-3 hover:text-amber-400"
                onClick={() => toggleOpen()}
              >
                <a href="/#skills">Skills</a>
              </motion.li>
              <motion.li
                variants={child}
                className="w-full py-3 hover:text-amber-400"
                onClick={() => toggleOpen()}
              >
                <a href="/#projects">Projects</a>
              </motion.li>
              <motion.li
                variants={child}
                className="w-full py-3 uppercase hover:text-amber-400"
                onClick={() => toggleOpen()}
              >
                <button className="uppercase">Contact</button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
