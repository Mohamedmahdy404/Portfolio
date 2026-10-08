import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import PlanningIcon from "@/public/assets/icons/problem-solving.svg";
import DataIcon from "@/public/assets/icons/backend.svg";
import LiveIcon from "@/public/assets/icons/full-stack.svg";
import LaunchIcon from "@/public/assets/icons/freelance.svg";
import ProjectReference from "./ProjectReference";
import styles from "./ClientSections.module.css";

const icons = [PlanningIcon, DataIcon, LiveIcon, LaunchIcon];

export default function WhyMe({ onOpenProject }) {
  const { t, direction } = useLanguage();
  const reduceMotion = useReducedMotion();
  const content = t.whyMe;

  return (
    <section id="why-me" dir={direction} aria-labelledby="why-me-title" className="relative px-5 pt-16 sm:px-8 md:pt-24">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-8 max-w-3xl md:mb-12">
          <p className="sectionSubText">{content.eyebrow}</p>
          <h2 id="why-me-title" className="sectionHeadText mt-2">{content.title}</h2>
          <p className="mt-5 text-sm leading-8 text-ctnSecondaryLight dark:text-ctnSecondaryDark sm:text-base">{content.intro}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {content.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.projectName}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.06 }}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className={`${styles.benefit} flex min-w-0 flex-col bg-bgSecondaryLight p-5 dark:bg-bgSecondaryDark sm:p-7`}
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-bgPrimaryLight p-3 dark:bg-bgPrimaryDark">
                    <Icon aria-hidden="true" className="h-full w-full" />
                  </span>
                  <h3 className="flex min-h-[56px] items-center text-lg font-bold leading-7 text-ctnPrimaryLight dark:text-ctnPrimaryDark sm:text-xl">{item.title}</h3>
                </div>
                <p className="text-sm leading-8 text-ctnSecondaryLight dark:text-ctnSecondaryDark sm:text-base">{item.description}</p>
                <div className="mt-6 flex-1 border-s-2 border-primary/50 ps-4">
                  <p className="mb-2 text-xs font-semibold text-primary dark:text-five">{content.example}</p>
                  <p className="text-sm leading-7 text-ctnSecondaryLight dark:text-ctnSecondaryDark">{item.proof}</p>
                </div>
                <div className="mt-6 border-t border-primary/15 pt-4">
                  <ProjectReference projectName={item.projectName} label={content.openProject} onOpenProject={onOpenProject} withPreview />
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
