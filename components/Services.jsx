import { motion } from "framer-motion";

import { services } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeIn, textVariant } from "@/utils/motion";
import ServiceCard from "./ServiceCard";

function Services() {
  const { t } = useLanguage();
  const serviceIcons = services.slice(0, 4).map((service) => service.icon);

  return (
    <section className="services-section relative overflow-hidden px-3 pt-16 pb-8 sm:px-8 sm:py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 md:mb-20"
        >
          <p className="sectionSubText">{t.services.eyebrow}</p>
          <h2 className="sectionHeadText mt-2">{t.services.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ctnSecondaryLight dark:text-ctnSecondaryDark sm:text-base">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-6">
          {t.services.items.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              icon={serviceIcons[index]}
              {...service}
            />
          ))}
        </div>

        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-4 text-center sm:mt-20 sm:flex-row sm:justify-center sm:gap-6"
        >
          <p className="text-sm font-semibold text-ctnPrimaryLight dark:text-ctnPrimaryDark sm:text-base">
            {t.services.ctaText}
          </p>
          <a
            href="https://wa.me/201069033838"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {t.services.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
