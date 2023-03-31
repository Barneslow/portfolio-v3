"use client";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./VideoBox.module.scss";

type VideoBoxProps = {
  image: string;
  video: string;
};

const VideoBox = ({ image, video }: VideoBoxProps) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  };
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="group relative flex overflow-hidden rounded-xl border border-zinc-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        alt="dummy text"
        src={`/images/${image}`}
        width="0"
        height="0"
        sizes="100vw"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full group-hover:opacity-0 duration-1000"
      />

      <video
        ref={videoRef}
        src={`/videos/${video}`}
        className="h-full w-full"
        muted
      />
    </motion.div>
  );
};

export default VideoBox;
