import { motion } from "framer-motion";

import { services } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { textVariant } from "@/utils/motion";
import ServiceCard from "./ServiceCard";

function Services() {
  const { t } = useLanguage();
  const serviceIcons = services.slice(0, 4).map((service) => service.icon);

  return (
    <section className="services-section relative overflow-hidden px-3 py-16 sm:px-8 sm:py-24 md:py-32">
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
      </div>
    </section>
  );
}

export default Services;
