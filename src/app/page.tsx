"use client";

import HeroText from "@/components/HeroText";
import SlideSwiper from "@/components/ui/SlideSwiper";
import DescriptionText from "@/components/DescriptionText";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import Work from "@/components/ui/Work";

import projectData from "../data/project_data.json";
import Image from "next/image";
import ComputerModelCanvas from "@/components/ui/ComputerModel";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative section-1 min-h-screen flex items-center"
      >
        {/* <div className="absolute bg-image h-full w-full top-0 bottom-0 left-0 right-0 opacity-20"></div> */}
        <div className="container flex items-center text-center flex-col-reverse mx-auto gap-6 p-6 lg:flex-row lg:text-left lg:gap-0">
          <HeroText />
          <div className="relative w-full rounded-2xl aspect-square overflow-hidden  md:w-96">
            <ComputerModelCanvas />
          </div>
          {/* <HeroImage /> */}
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="section-2">
        <h2 className="section-heading">About</h2>
        <div className="flex flex-col items-center justify-center my-5 h-full gap-10 p-6 lg:flex-row lg:text-left lg:my-10">
          <Image
            src="/defaultimage.png"
            alt="default image"
            quality={100}
            priority
            className="rounded-full border-2 border-zinc-800"
            width={400}
            height={400}
          />
          <DescriptionText
            heading="Hi, I'm Darrach, nice to meet you!"
            text={`I’m a junior web developer looking for a role in an exciting company. I focus on creating accessible, responsive websites using modern HTML, CSS, Javascript and PHP practices. I often use React when writing Javascript, but can adapt to whatever tools are required.
I’m based in Suffolk, UK, but I am happy to work remotely. When I’m not coding, I enjoy playing music and getting outdoors. Feel free to check out my work.`}
          />
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="section-1">
        <h2 className="section-heading">Skills</h2>
        <div className="flex flex-col items-center justify-center my-5 h-full lg:flex-row lg:my-10">
          <SlideSwiper />
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section-2">
        <h2 className="section-heading">Projects</h2>
        <div className="flex flex-col text-center items-center gap-8 justify-evenly my-5 lg:my-10">
          <DescriptionText
            heading="Check out some of my latest work"
            text={`My programming projects have taken me on a journey of continuous learning and growth. I've built dynamic web applications from scratch, learning new programming languages and frameworks as I go. Each project has been a thrilling challenge that's fueled my passion further!`}
          />
          <div className="container max-w-7xl">
            <Projects projects={projectData} />
          </div>
        </div>
      </section>

      {/* COLLAB */}

      <section id="collab" className="section-1">
        <Work />
      </section>
      <Footer />
    </>
  );
}
