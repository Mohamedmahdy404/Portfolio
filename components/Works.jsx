import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import truncateText from "@/utils/truncate";
import GithubLogo from "./../public/assets/icons/github.svg";
import RocketLogo from "./../public/assets/icons/rocket.svg";

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) {
  const CHAR_LIMIT = 280;

  const hasSourceCode =
    source_code_link && source_code_link !== "#";
  const hasDemo =
    deployed_link && deployed_link !== "#";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[590px] shadow-sm shadow-primary"
      >
        <div className="relative w-full h-[230px]">
          <div className="w-full h-full rounded-2xl relative overflow-hidden">
            <Image
              src={image}
              alt={`${name} project image`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
            {hasDemo && (
              <div
                onClick={() => window.open(deployed_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Live Demo"
              >
                <RocketLogo className="w-1/2 h-1/2 mr-[2px]" />
              </div>
            )}

            {hasSourceCode && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Source Code"
              >
                <GithubLogo className="w-2/3 h-2/3" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
            {truncateText(description, CHAR_LIMIT)}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

function Works() {
  return (
    <section className="xl:my-36 md:mx-36 p-8" id="projects">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="sectionSubText">My work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          These projects showcase my practical skills and experience, including
          public and private work. They demonstrate my ability to build complete
          solutions, manage data and media, and deliver scalable, real-world
          applications.
        </motion.p>
      </div>

      <div className="md:mt-20 mt-10 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Works;
