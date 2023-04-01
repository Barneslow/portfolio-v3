"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  ChartIcon,
  CodeIcon,
  LearningIcon,
  PaintBrushIcon,
  StackIcon,
} from "../icons/SkillsIcons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

import SkillCard from "../SkillCard";

export default function SlideSwiper() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Pagination]}
      pagination={{
        clickable: true,
      }}
      centeredSlides
      className="mySwiper"
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <SkillCard
          index={0}
          color={{
            light: "text-green-800",
            dark: "dark:text-green-300",
            borderLight: "border-green-800",
            borderDark: "dark:border-green-300",
          }}
          heading="Things I enjoy designing"
          description="Minimalistic content structure with clean, colourful design patterns.
        Varied animations to a page to life!"
          title="Designer"
          categories="UX, UI, Web, Apps, Logos"
          list={[
            "Framer Motion",
            "React-Native-Reanimated",
            "Photoshop",
            "Tailwind / CSS / Sass",
            "Figma",
          ]}
          children={<PaintBrushIcon />}
        />
      </SwiperSlide>

      <SwiperSlide>
        <SkillCard
          index={1}
          color={{
            light: "text-blue-800",
            dark: "dark:text-blue-300",
            borderLight: "border-blue-800",
            borderDark: "dark:border-blue-300",
          }}
          title="Developer"
          description=" Writing elegant, legible and reusable code. Imagination and creation!
        Tackling problems and finding solutions!"
          build={[
            "javascript",
            "html",
            "css",
            "react",
            "nextjs",
            "react-native",
            "tailwind",
            "nodejs",
            "typescript",
            "mongodb",
            "firebase",
            "aws",
          ]}
          children={<CodeIcon />}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard
          index={2}
          color={{
            light: "text-red-800",
            dark: "dark:text-red-300",
            borderLight: "border-red-800",
            borderDark: "dark:border-red-300",
          }}
          heading="Platforms Used"
          description="Running million dollar social media campaigns. Designing, analysing
          and scaling across all major platforms"
          title="Marketer"
          categories="Facebook, Snapchat, Tiktok, Twitter, Instagram"
          list={[
            "Photoshop / PremierPro / Canva",
            "Unbounce / ClickFunnels",
            "Internal campaign managers",
            "Wordpress",
            "Voluum",
          ]}
          children={<ChartIcon />}
        />
      </SwiperSlide>

      <SwiperSlide>
        <SkillCard
          index={0}
          color={{
            light: "text-purple-800",
            dark: "dark:text-purple-300",
            borderLight: "border-purple-800",
            borderDark: "dark:border-purple-300",
          }}
          description="Reformed MERN stack enthusiasit. NEXTJS serverless with AWS/Google Cloud platform. Most comfortable using NOSQL databases but utilise SQL for smaller applications"
          title="Development Stacks"
          build={[
            "nextjs",
            "prisma",
            "typescript",
            "mongodb",
            "express",
            "nodejs",
            "airtable",
            "firebase",
            "aws",
          ]}
          children={<StackIcon />}
        />
      </SwiperSlide>

      <SwiperSlide>
        <SkillCard
          index={0}
          color={{
            light: "text-yellow-600",
            dark: "dark:text-yellow-300",
            borderLight: "border-yellow-600",
            borderDark: "dark:border-yellow-300",
          }}
          description="With the constantly evolving world of web technologies, there's so much to learn, and I'm excited to dive in."
          title="Wishlist Learning"
          build={["python", "aws", "threejs", "svelte", "django", "jest"]}
          children={<LearningIcon />}
        />
      </SwiperSlide>
    </Swiper>
  );
}
