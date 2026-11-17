import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageContext";
import useDeferredCanvas from "@/utils/useDeferredCanvas";
import WhatsappIcon from "@/public/assets/icons/whatsapp.svg";
import RocketIcon from "@/public/assets/icons/rocket.svg";
import ArrowIcon from "@/public/assets/icons/up-arrow.svg";
import styles from "./Hero.module.css";

const ComputersCanvas = dynamic(() => import("./canvas/Computers"), { ssr: false });

function Hero({ loading, isMobile }) {
  const { t, isArabic } = useLanguage();
  const canvas = useDeferredCanvas();

  return (
    <section className="relative mx-auto flex w-full flex-col pt-28 sm:pt-32" dir={isArabic ? "rtl" : "ltr"}>
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 text-center sm:px-10">
        <h1 className="text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
          {t.hero.greeting}{" "}
          <span className="text-five">{t.hero.name}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 tracking-normal text-[#dfd9ff] sm:text-lg">
          {t.hero.description}
        </p>
        <div className={styles.actions}>
          <a href="https://wa.me/201069033838" target="_blank" rel="noopener noreferrer"
            className={`${styles.button} ${styles.primary}`}>
            <span className={styles.icon}><WhatsappIcon aria-hidden="true" className="h-5 w-5" /></span>
            <span className={styles.label}>{t.hero.ctaPrimary}</span>
            <ArrowIcon aria-hidden="true" className={`${styles.arrow} ${isArabic ? "-rotate-90" : "rotate-90"}`} />
          </a>
          <a href="#projects"
            className={`${styles.button} ${styles.secondary}`}>
            <span className={styles.icon}><RocketIcon aria-hidden="true" className="h-5 w-5" /></span>
            <span className={styles.label}>{t.hero.ctaSecondary}</span>
            <ArrowIcon aria-hidden="true" className={`${styles.arrow} ${isArabic ? "-rotate-90" : "rotate-90"}`} />
          </a>
        </div>
      </div>
      <div ref={canvas.ref} className="relative mt-2 h-[240px] w-full sm:h-[300px] lg:h-[360px]">
        {!loading && canvas.ready && <ComputersCanvas isMobile={isMobile} active={canvas.visible} />}
      </div>
    </section>
  );
}

export default Hero;
