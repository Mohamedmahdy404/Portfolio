import { useEffect, useState } from "react";
import Head from "next/head";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "@/components";
import HeroBackground from "@/components/HeroBackground";
import EarthContainer from "@/components/EarthContainer";
import PlayerContainer from "@/components/PlayerContainer";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { useLanguage } from "@/contexts/LanguageContext";

function App({ loading }) {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} key="desc" />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="twitter:title" content={t.meta.title} />
        <meta property="twitter:description" content={t.meta.description} />
      </Head>
      <main className="relative z-0 w-full h-full">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <HeroBackground />
        <Hero loading={loading} isMobile={isMobile} />
      </div>
      <section className="relative z-0 flex md:flex-row flex-col-reverse w-full h-full overflow-hidden">
        <About />
        {!isMobile && <PlayerContainer isMobile={isMobile} />}
      </section>
      <Services />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <section className="relative z-0 flex md:flex-row justify-between flex-col-reverse w-full h-full overflow-x-hidden sm:p-8 p-2 pb-8">
        <Contact />
        <EarthContainer isMobile={isMobile} />
        <StarsCanvas />
      </section>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      </main>
    </>
  );
}

export default App;
