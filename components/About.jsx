import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "@/contexts/LanguageContext";

function About() {
  const { t, isArabic } = useLanguage();
  const overviewSocials = socials.filter((social) => social.id !== "whatsapp");

  return (
    <section
      className={`md:my-36 md:w-2/3 w-full h-full p-8 md:mt-[40svh] xl:mt-[150px] ${isArabic ? "xl:mr-36 lg:mr-12 text-right" : "xl:ml-36 lg:ml-12"}`}
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>{t.about.eyebrow}</p>
        <h2 className={"sectionHeadText text-white"}>{t.about.title}</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          {t.about.body}
        </div>
        {/* removed single-email row: socials contains email icon already */}
        <div className="flex gap-5 items-center">
          {overviewSocials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <a
          href="/document/Mohamed-Yasser-Resume.pdf"
          download
          className="inline-flex w-fit rounded-md bg-tertiary px-7 py-2 font-semibold text-white transition-colors hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-five"
          aria-label={t.about.resumeLabel}
        >
          {t.about.resume}
        </a>
      </motion.div>
    </section>
  );
}

export default About;
