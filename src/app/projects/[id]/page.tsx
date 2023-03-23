import { FC } from "react";
import projectData from "../../../data/project_data.json";

import styles from "./projects.module.scss";

import TypeWriter from "@/components/ui/Typewriter";
import VideoBox from "@/components/ui/VideoBox";
import IconLink from "@/components/ui/IconLink";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icons from "@/components/ui/Icons";

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
      className="flex item-center justify-center bg-gradient-to-t from-zinc-300 dark:bg-zinc-900 dark:from-zinc-900 px-10 min-h-screen mt-24"
    >
      <div
        key="test"
        // transition={{ duration: 0.5 }}
        // exit={{ x: "-100vw" }}
        className={styles.container}
      >
        <div className={styles.header}>
          <TypeWriter className={styles.heading} text={`${name}`} />
        </div>

        <div className={styles["content-box"]}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <VideoBox image={image} video={video} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <h3>Built With</h3>
              <Icons icons={build} />
            </div>
          </div>
          <div
            className={styles["text-container"]}
            // transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className={styles["sub-heading"]}>{description}</h3>
            <p className={styles.text}>{text}</p>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <IconLink
                linkClass={styles.link}
                icon={faFileLines}
                url={url}
                text={`Visit ${name} here!`}
              />
              <IconLink
                linkClass={styles.link}
                icon={faGithub}
                url={github}
                text="Source Code!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
