import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "@/utils/motion";
import { useLanguage } from "@/contexts/LanguageContext";

function Hero({ loading, isMobile }) {
  const { t, isArabic } = useLanguage();

  return (
    <section
      className={`relative w-full h-[100svh] md:max-h-[800px] max-h-[600px] mx-auto flex flex-col`}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto paddingX flex items-start gap-5 ${isArabic ? "flex-row-reverse text-right" : "flex-row"}`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView={!loading && "show"}
          viewport={{ once: true, amount: 0.25 }}
        >
          <h1 className={`heroHeadText`}>
            {t.hero.greeting}{" "}
            <span className="dark:text-five text-primary">{t.hero.name}</span>
          </h1>
          <p className={`heroSubText mt-2 tracking-wide`}>
            <TypeAnimation
              key={isArabic ? "hero-ar" : "hero-en"}
              sequence={t.hero.roles}
              // preRenderFirstString={true}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", "spring")}
        initial="hidden"
        whileInView={!loading && "show"}
        viewport={{ once: true, amount: 0.25 }}
        className="w-full md:h-[800px] sm:h-[300px] h-[200px] absolute md:top-[170px] sm:top-[280px] top-[350px]"
      >
        <ComputersCanvas isMobile={isMobile} />
      </motion.div>

      <div className="absolute xs:bottom-10 bottom-32 left-1/2 justify-center items-center z-20 hidden md:flex">
        <a href="#about" aria-label={t.hero.scrollLabel}>
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#aaa6c3] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
