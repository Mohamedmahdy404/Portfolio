import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageContext";
import useDeferredCanvas from "@/utils/useDeferredCanvas";

const ComputersCanvas = dynamic(() => import("./canvas/Computers"), { ssr: false });

function Hero({ loading, isMobile }) {
  const { t, isArabic } = useLanguage();
  const canvas = useDeferredCanvas();

  return (
    <section className="relative mx-auto flex w-full flex-col pt-28 sm:pt-32" dir={isArabic ? "rtl" : "ltr"}>
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 text-center sm:px-10">
        <p className="mb-4 text-sm font-semibold text-five sm:text-base">{t.nav.name}</p>
        <h1 className="text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
          {t.hero.greeting}{" "}
          <span className="text-five">{t.hero.name}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 tracking-normal text-[#dfd9ff] sm:text-lg">
          {t.hero.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="https://wa.me/201069033838" target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base">
            {t.hero.ctaPrimary}
          </a>
          <a href="#projects"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/40 bg-[#212134] px-5 py-3 text-sm font-bold text-white transition hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base">
            {t.hero.ctaSecondary}
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
