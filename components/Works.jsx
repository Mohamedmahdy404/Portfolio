import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import truncateText from "@/utils/truncate";
import DetailsIcon from "./../public/assets/icons/up-arrow.svg";
import ProjectLinks from "./ProjectLinks";
import ProjectDetails from "./ProjectDetails";
import { useLanguage } from "@/contexts/LanguageContext";

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
  app_store_link,
  labels,
  onDetails,
}) {
  const CHAR_LIMIT = 280;
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const syncPreferences = () => {
      setIsCoarsePointer(coarsePointerQuery.matches);
    };

    syncPreferences();
    coarsePointerQuery.addEventListener("change", syncPreferences);

    return () => {
      coarsePointerQuery.removeEventListener("change", syncPreferences);
    };
  }, []);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="h-full w-full"
    >
      <Tilt
        tiltEnable={!isCoarsePointer}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="dark:bg-bgSecondaryDark bg-bgSecondaryLight flex h-full w-full flex-col rounded-xl p-3 shadow-sm shadow-primary md:rounded-2xl md:p-5"
      >
        <div className="relative w-full h-[105px] xs:h-[120px] md:h-[230px]">
          <div className="relative h-full w-full overflow-hidden rounded-xl shine-sweep md:rounded-2xl">
            <Image
              src={image}
              alt={`${name} — ${labels.imageLabel}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 370px"
              className="object-cover"
            />
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 m-2 md:m-3 card-img_hover">
            <ProjectLinks project={{ name, deployed_link, app_store_link, source_code_link }} labels={labels} compact />
          </div>
        </div>

        <div className="mt-3 md:mt-5">
          <h3 className="min-h-[36px] break-words text-[14px] font-bold leading-tight text-ctnPrimaryLight dark:text-ctnPrimaryDark xs:text-[15px] md:min-h-[58px] md:text-[24px]">
            {name}
          </h3>
          <p className="mt-2 line-clamp-5 overflow-hidden text-[11px] leading-relaxed text-ctnSecondaryLight dark:text-ctnSecondaryDark md:text-[14px]">
            {truncateText(description, CHAR_LIMIT)}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 md:mt-4 md:gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[10px] xs:text-[11px] md:text-[14px] leading-tight break-words ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="mt-auto pt-4 md:pt-5">
          <button
            type="button"
            onClick={onDetails}
            aria-haspopup="dialog"
            aria-label={`${labels.openDetails} ${name}`}
            className="group flex min-h-[44px] w-full items-center justify-between gap-2 rounded-lg border border-primary/40 bg-primary/15 px-3 py-2 text-[11px] font-bold text-ctnPrimaryLight transition-colors hover:border-primary hover:bg-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-ctnPrimaryDark xs:text-xs md:px-4 md:text-sm"
          >
            <span>{labels.details}</span>
            <DetailsIcon aria-hidden="true" className="h-3 w-3 shrink-0 rotate-90 text-primary transition-transform group-hover:translate-y-0.5 dark:text-five" />
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
}

function Works({ selectedIndex, onSelectProject }) {
  const { t } = useLanguage();
  const localizeProject = (project, index) => ({
    ...project,
    ...t.projects.items[index],
    originalName: project.name,
  });

  return (
    <section className="xl:my-36 md:mx-36 p-4 md:p-8" id="projects">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="sectionSubText">{t.projects.eyebrow}</p>
        <h2 className="sectionHeadText">{t.projects.title}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {t.projects.intro}
        </motion.p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1160px] auto-rows-fr grid-cols-2 items-stretch gap-3 xs:gap-4 md:mt-20 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            name={t.projects.items[index]?.name || project.name}
            description={t.projects.items[index]?.description || project.description}
            tags={t.projects.items[index]?.tags || project.tags}
            labels={t.projects}
            onDetails={() => onSelectProject(index)}
          />
        ))}
      </div>
      {selectedIndex !== null && (
        <ProjectDetails
          key={selectedIndex}
          project={localizeProject(projects[selectedIndex], selectedIndex)}
          onClose={() => onSelectProject(null)}
        />
      )}
    </section>
  );
}

export default Works;
