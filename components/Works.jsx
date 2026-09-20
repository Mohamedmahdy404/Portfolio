import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import truncateText from "@/utils/truncate";
import GithubLogo from "./../public/assets/icons/github.svg";
import RocketLogo from "./../public/assets/icons/rocket.svg";
import { useLanguage } from "@/contexts/LanguageContext";

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  images,
  source_code_link,
  deployed_link,
  labels,
}) {
  const CHAR_LIMIT = 280;
  const slides = images?.length ? images : [image];
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [carouselCycle, setCarouselCycle] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  const hasSourceCode =
    source_code_link && source_code_link !== "#";
  const hasDemo =
    deployed_link && deployed_link !== "#";

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const syncPreferences = () => {
      setReduceMotion(reducedMotionQuery.matches);
      setIsCoarsePointer(coarsePointerQuery.matches);
    };

    syncPreferences();
    reducedMotionQuery.addEventListener("change", syncPreferences);
    coarsePointerQuery.addEventListener("change", syncPreferences);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncPreferences);
      coarsePointerQuery.removeEventListener("change", syncPreferences);
    };
  }, []);

  useEffect(() => {
    if (slides.length < 2 || carouselPaused || reduceMotion) return undefined;

    const interval = window.setInterval(() => {
      setSlideDirection(1);
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [slides.length, carouselPaused, reduceMotion, carouselCycle]);

  const showSlide = (nextSlide, direction = nextSlide >= activeSlide ? 1 : -1) => {
    setSlideDirection(direction);
    setActiveSlide((nextSlide + slides.length) % slides.length);
    setCarouselCycle((cycle) => cycle + 1);
  };

  const handleSwipeEnd = (_, info) => {
    setCarouselPaused(false);

    const passedDistanceThreshold = Math.abs(info.offset.x) > 24;
    const passedVelocityThreshold = Math.abs(info.velocity.x) > 250;
    if (!passedDistanceThreshold && !passedVelocityThreshold) return;

    const direction = info.offset.x < 0 ? 1 : -1;
    showSlide(activeSlide + direction, direction);
  };

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
          <div
            className="w-full h-full rounded-xl md:rounded-2xl relative overflow-hidden shine-sweep touch-pan-y"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
            onFocusCapture={() => setCarouselPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setCarouselPaused(false);
              }
            }}
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={slides[activeSlide]}
                initial={reduceMotion ? false : { opacity: 0, x: slideDirection * 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, x: slideDirection * -16 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
                drag={slides.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                dragMomentum={false}
                onDragStart={() => setCarouselPaused(true)}
                onDragEnd={handleSwipeEnd}
                style={{ touchAction: "pan-y" }}
                className="absolute inset-0 cursor-grab select-none active:cursor-grabbing"
              >
                <Image
                  src={slides[activeSlide]}
                  alt={`${name} — ${labels.imageLabel} ${activeSlide + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 370px"
                  className="object-cover"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {slides.length > 1 && (
              <div className="absolute bottom-1.5 left-1/2 z-20 flex -translate-x-1/2 items-center rounded-full bg-black/55 px-1 py-0.5 backdrop-blur-sm md:bottom-2">
                {slides.map((slide, slideIndex) => (
                  <button
                    type="button"
                    key={slide}
                    onClick={() => showSlide(slideIndex)}
                    className="flex h-5 w-5 items-center justify-center focus:outline-none"
                    aria-label={`${labels.showImage} ${slideIndex + 1} — ${name}`}
                    aria-current={activeSlide === slideIndex ? "true" : undefined}
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all ${
                        activeSlide === slideIndex ? "w-4 bg-white" : "w-1.5 bg-white/55"
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="absolute inset-0 flex justify-between m-2 md:m-3 card-img_hover">
            {hasDemo && (
              <a
                href={deployed_link}
                target="_blank"
                rel="noopener noreferrer"
                className="black-gradient w-8 h-8 md:w-10 md:h-10 rounded-full flex justify-center items-center cursor-pointer"
                title={labels.liveDemo}
                aria-label={`${labels.openLive} ${name}`}
              >
                <RocketLogo className="w-1/2 h-1/2 mr-[2px]" />
              </a>
            )}

            {hasSourceCode && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="black-gradient w-8 h-8 md:w-10 md:h-10 rounded-full flex justify-center items-center cursor-pointer"
                title={labels.sourceCode}
                aria-label={`${labels.openSource} ${name}`}
              >
                <GithubLogo className="w-2/3 h-2/3" />
              </a>
            )}
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
      </Tilt>
    </motion.div>
  );
}

function Works() {
  const { t } = useLanguage();

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
          />
        ))}
      </div>
    </section>
  );
}

export default Works;
