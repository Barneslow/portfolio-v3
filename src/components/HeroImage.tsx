"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 1.5,
          delay: 2,
          opacity: {
            duration: 2.5,
          },
        }}
        className="border-zinc-900 rounded-full overflow-hidden border-8 dark:border-zinc-50 "
      >
        <Image
          src="/defaultimage.png"
          alt="default image"
          quality={100}
          priority
          style={{ objectFit: "cover" }}
          width={400}
          height={400}
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;
