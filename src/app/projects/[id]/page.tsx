import { FC } from "react";
import projectData from "../../../data/project_data.json";

import styles from "./projects.module.scss";

import TypeWriter from "@/components/ui/Typewriter";
import VideoBox from "@/components/ui/VideoBox";
import IconLink from "@/components/ui/IconLink";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icons from "@/components/icons/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitHub, WebsiteIcon } from "@/components/icons/ButtonIcons";

interface ProjectPageProps {
  params: { id: string };
}

export interface IProject {
  id: string;
  description: string;
  name: string;
  text: string;
  url: string;
  image: string;
  video: string;
  build: string[];
  github: string;
}

const page: FC<ProjectPageProps> = ({ params }: ProjectPageProps) => {
  const project: IProject = projectData.find((prj) => prj.id === params.id)!;

  const { id, description, name, text, url, image, video, build, github } =
    project;

  return (
    <section
      id="project"
      className="flex item-center justify-center bg-gradient-to-t from-zinc-300 dark:bg-zinc-900 dark:from-zinc-900 px-10 min-h-screen pb-10"
    >
      <div className="flex flex-col space-y-5 lg:space-y-16">
        <div className="flex items-center justify-center pt-5">
          <TypeWriter
            className="text-4xl py-2 font-extrabold lg:text-6xl "
            text={`${name}`}
          />
        </div>
        <div className="grid items-center justify-center max-w-7xl  gap-8 lg:grid-cols-2 ">
          <div className="flex flex-col h-full space-y-6">
            <VideoBox image={image} video={video} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl">Built With</h3>
              <Icons icons={build} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
            <h3 className="text-2xl font-bold">{description}</h3>
            <p className="text-xl font-light">{text}</p>
            <div className="flex justify-evenly w-full space-x-4 items-center mt-3 text-sm">
              <a
                target="_blank"
                href={url}
                className="group btn border 1 border-zinc-700 bg-sky-500 flex flex-col hover:bg-sky-600"
              >
                <div className="h-10 w-10">
                  <WebsiteIcon />
                </div>
              </a>
              <a
                target="_blank"
                href={github}
                className=" group btn border 1 border-zinc-700 bg-orange-500 flex flex-col hover:bg-orange-600"
              >
                <div className="h-10 w-10 ">
                  <GitHub />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
