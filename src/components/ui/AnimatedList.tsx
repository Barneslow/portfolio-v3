import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimatedList = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.9 });

  const container = {
    initial: {},
    animate: { transition: { staggerChildren: 0.25 } },
  };

  const child = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, opacity: { duration: 1.5 } },
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
      className="flex flex-col space-y-3 items-center w-full"
    >
      <motion.li
        variants={child}
        className="text-lg flex justify-evenly w-full"
      >
        <Image
          src={"/images/icons/javascript.svg"}
          width={100}
          height={100}
          alt="javascript logo"
          className="h-12 w-12 rounded-xl"
        />
        <Image
          src={"/images/icons/html.svg"}
          width={100}
          height={100}
          alt="html logo"
          className="h-12 w-12 rounded-xl"
        />
        <Image
          src={"/images/icons/css.svg"}
          width={100}
          height={100}
          alt="css logo"
          className="h-12 w-12 rounded-xl"
        />
      </motion.li>
      <motion.li
        variants={child}
        className="text-lg flex justify-evenly w-full"
      >
        <Image
          src={"/images/icons/react.svg"}
          width={100}
          height={100}
          alt="react logo"
          className="h-12 w-12 rounded-xl"
        />
        <Image
          src={"/images/icons/nextjs.svg"}
          width={100}
          height={100}
          alt="nextjs logo"
          className="h-12 w-12 rounded-xl"
        />
        <Image
          src={"/images/icons/react-native.svg"}
          width={100}
          height={100}
          alt="react native logo"
          className="h-12 w-12 rounded-sm"
        />
      </motion.li>
      <motion.li
        variants={child}
        className="text-lg flex justify-evenly w-full"
      >
        <Image
          src={"/images/icons/tailwind.svg"}
          width={100}
          height={100}
          alt="tailwindcss logo"
          className="h-12 w-12 rounded-sm"
        />
        <Image
          src={"/images/icons/nodejs.svg"}
          width={100}
          height={100}
          alt="node js logo"
          className="h-12 w-12 rounded-sm"
        />
        <Image
          src={"/images/icons/pug.svg"}
          width={100}
          height={100}
          alt="pug logo"
          className="h-12 w-12 rounded-sm"
        />
      </motion.li>
      <motion.li
        variants={child}
        className="text-lg flex justify-evenly w-full"
      >
        <Image
          src={"/images/icons/mongodb.svg"}
          width={100}
          height={100}
          alt="mongodb logo"
          className="h-12 w-12 rounded-sm"
        />
        <Image
          src={"/images/icons/firebase.svg"}
          width={100}
          height={100}
          alt="firebase logo"
          className="h-12 w-12 rounded-sm"
        />
        <Image
          src={"/images/icons/airtable.svg"}
          width={100}
          height={100}
          alt="airtable logo"
          className="h-12 w-12 rounded-sm"
        />
      </motion.li>
    </motion.ul>
  );
};

export default AnimatedList;
