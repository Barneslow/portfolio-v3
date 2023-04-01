import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimatedList = ({ list }: { list: string[] }) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15 } },
  };

  const child = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, opacity: { duration: 0.5 } },
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
    <motion.ul
      ref={ref}
      animate={animation}
      variants={container}
      initial="initial"
      className="grid grid-cols-3 gap-4 w-full"
    >
      {list.map((item, index) => (
        <motion.li
          variants={child}
          className="text-lg flex justify-evenly w-full"
          key={index}
        >
          <Image
            src={`/images/icons/${item}.svg`}
            width={100}
            height={100}
            alt={`${item} logo`}
            className="h-12 w-12 rounded-xl dark:bg-zinc-50 dark:p-1"
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default AnimatedList;
