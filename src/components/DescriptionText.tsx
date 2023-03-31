import { useInView } from "framer-motion";
import { useRef } from "react";

type DescriptionText = {
  heading: string;
  text: string;
};

const DescriptionText = ({ heading, text }: DescriptionText) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const options = {
    transform: isInView ? "none" : "translateY(20px)",
    opacity: isInView ? 1 : 0,
    transition: "all 2s",
  };

  return (
    <div
      className="flex flex-col items-center space-y-9 text-center md:text-left"
      style={options}
      ref={ref}
    >
      <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 md:text-4xl">
        {heading}
      </h2>
      <p className="max-w-4xl text-md md:text-xl text-zinc-900 mx-auto text-center tracking-widest dark:text-zinc-50 ">
        {text}
      </p>
    </div>
  );
};

export default DescriptionText;
