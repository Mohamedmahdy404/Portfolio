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

      <motion.div
        variants={fadeIn("up", "spring", 0.6, 0.9)}
        initial="hidden"
        whileInView={!loading && "show"}
        viewport={{ once: true, amount: 0.25 }}
        className="absolute inset-x-0 bottom-6 xs:bottom-8 sm:bottom-24 z-20 flex justify-center px-4"
      >
        <div className="grid w-full max-w-[440px] grid-cols-2 items-center justify-center gap-2 sm:flex sm:w-auto sm:max-w-none sm:gap-4">
          <a
            href="https://wa.me/201069033838"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-sweep inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-3 py-2.5 text-[11px] font-bold text-white shadow-[0_12px_35px_rgba(128,77,238,0.4)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(128,77,238,0.55)] xs:px-4 xs:text-xs sm:px-6 sm:py-3 sm:text-base"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-primary/80 bg-[#212134] px-3 py-2.5 text-[11px] font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:border-five/70 xs:px-4 xs:text-xs sm:px-6 sm:py-3 sm:text-base"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
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
