import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLanguage } from "@/contexts/LanguageContext";

function ExperienceCard({ experience, theme, isArabic }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          theme !== "dark"
            ? "linear-gradient(90deg, rgba(224,234,240,1) 0%, rgba(232,239,243,1) 50%, rgba(224,234,240,1) 100%)"
            : "linear-gradient(90deg, rgba(33,33,52,1) 0%, rgba(39,39,61,1) 50%, rgba(33,33,52,1) 100%)",
        color: theme !== "dark" ? "#7e8c9f" : "#e5e6e9",
        boxShadow: "0 1px 2px 0 rgb(128, 77, 238)",
      }}
      contentArrowStyle={
        isArabic
          ? { borderLeft: `7px solid ${theme !== "dark" ? "#e0eaf0" : "#2b2b42"}` }
          : { borderRight: `7px solid ${theme !== "dark" ? "#e0eaf0" : "#2b2b42"}` }
      }
      style={{
        boxShadow: "0 1px 2px 0 rgb(128, 77, 238 / 0.05)",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, backgroundColor: "#e0eaf0" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-[60%] h-[60%] relative">
            <Image
              src={experience.icon}
              alt={experience.company_name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className={`mt-5 list-disc space-y-2 ${isArabic ? "mr-5" : "ml-5"}`}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[14px] tracking-wide ${isArabic ? "pr-1" : "pl-1"}`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

function Experience() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t, isArabic } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.section className="w-full p-8 mt-20">
      <motion.div variants={textVariant()}>
        <p className={`sectionSubText text-center`}>{t.experience.eyebrow}</p>
        <h2 className={`sectionHeadText text-center`}>{t.experience.title}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={theme === "dark" ? "#7e8c9f" : "#8c9db1"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={{
                ...experience,
                title: t.experience.items[index].title,
                company_name: t.experience.items[index].company,
                date: t.experience.items[index].date,
                points: t.experience.items[index].points,
              }}
              theme={theme}
              isArabic={isArabic}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
}

export default SectionWrapper(Experience, "work");
