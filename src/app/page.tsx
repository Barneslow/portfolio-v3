"use client";

import HeroText from "@/components/HeroText";
import SlideSwiper from "@/components/ui/SlideSwiper";
import DescriptionText from "@/components/DescriptionText";
import Projects from "@/components/ui/Projects";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import Work from "@/components/ui/Work";

import projectData from "../data/project_data.json";

export default function Home() {
  return (
    <>
      <section
        id="about"
        className="flex item-center justify-center bg-gradient-to-t from-zinc-300 dark:bg-zinc-900 dark:from-zinc-900 px-10"
      >
        <div className="flex flex-col text-center items-center justify-center gap-8 min-h-screen max-w-8xl mt-20 md:text-left md:flex-row md:mt-0">
          <HeroText />
          <HeroImage />
        </div>
      </section>
      <section
        id="skills"
        className="flex justify-center items-center text-center mx-auto min-h-screen bg-gradient-to-b from-zinc-300 dark:bg-zinc-900 dark:from-zinc-900 px-10 py-24 md:flex-col pt-20"
      >
        <div className="flex flex-col text-center items-center justify-evenly gap-12 min-h-screen w-full max-w-8xl md:text-left md:mt-0">
          <DescriptionText
            heading="Hi, I'm Darrach, nice to meet you!"
            text={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
          />
          <SlideSwiper />
        </div>
      </section>
      <section
        id="projects"
        className="flex justify-center items-center text-center mx-auto min-h-screen bg-gradient-to-t from-zinc-300 dark:bg-zinc-900 dark:from-zinc-900 md:flex-col pt-20 px-10"
      >
        <div className="flex flex-col text-center items-center justify-evenly gap-24 min-h-screen w-full max-w-8xl md:text-left md:mt-0 py-24">
          <DescriptionText
            heading="Check out some of my latest work"
            text={`My programming projects have taken me on a journey of continuous learning and growth. I've built dynamic web applications from scratch, learning new programming languages and frameworks as I go. Each project has been a thrilling challenge that's fueled my passion further!`}
          />
          <Projects projects={projectData} />
        </div>
      </section>

      <section
        id="collab"
        className="flex justify-center items-center text-center mx-auto min-h-screen bg-gradient-to-b from-zinc-300 dark:bg-zinc-900 dark:from-zinc-900 md:flex-col pt-20"
      >
        <Work />
      </section>
      <Footer />
    </>
  );
}
