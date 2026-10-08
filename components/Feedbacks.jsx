import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectReference from "./ProjectReference";
import styles from "./ClientSections.module.css";

export default function Feedbacks({ onOpenProject }) {
  const { t, direction } = useLanguage();
  const reduceMotion = useReducedMotion();
  const content = t.feedback;
  const hasDrafts = content.items.some((item) => item.draft);

  return (
    <section id="feedback" dir={direction} aria-labelledby="feedback-title" className="relative px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-8 max-w-3xl md:mb-12">
          <p className="sectionSubText">{content.eyebrow}</p>
          <h2 id="feedback-title" className="sectionHeadText mt-2">{content.title}</h2>
          {hasDrafts && <p className="mt-5 border-s-2 border-primary/50 ps-4 text-sm leading-7 text-ctnPrimaryLight dark:text-ctnPrimaryDark">{content.draftNotice}</p>}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((item, index) => (
            <motion.div
              key={item.projectName}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
              className="min-w-0"
            >
              <article className={`${styles.review} flex h-full flex-col bg-bgSecondaryLight p-4 dark:bg-bgSecondaryDark sm:p-5`} style={{ "--review-delay": `${index * -2}s` }}>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold leading-6 text-ctnPrimaryLight dark:text-ctnPrimaryDark">{item.name}</p>
                    <p className="text-xs leading-5 text-ctnSecondaryLight dark:text-ctnSecondaryDark">{item.role}</p>
                  </div>
                  <span aria-hidden="true" className="h-7 text-4xl leading-none text-primary/60">&ldquo;</span>
                </div>
                <blockquote className="flex-1 text-[13px] leading-6 text-ctnPrimaryLight dark:text-ctnPrimaryDark">{item.text}</blockquote>
                <div className="mt-4 border-t border-primary/15 pt-3">
                  <ProjectReference projectName={item.projectName} label={content.openProject} onOpenProject={onOpenProject} />
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
