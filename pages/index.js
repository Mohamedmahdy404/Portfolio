import { useEffect, useState } from "react";
import Head from "next/head";

import {
  About,
  BuildWithUs,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "@/components";
import HeroBackground from "@/components/HeroBackground";
import EarthContainer from "@/components/EarthContainer";
import PlayerContainer from "@/components/PlayerContainer";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import WhyMe from "@/components/WhyMe";
import { projects } from "@/constants";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import dynamic from "next/dynamic";
import useDeferredCanvas from "@/utils/useDeferredCanvas";
const StarsCanvas = dynamic(() => import("@/components/canvas/Stars"), { ssr: false });

function App({ loading }) {
  const { t } = useLanguage();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const openProject = (name) => {
    const index = projects.findIndex((project) => project.name === name);
    if (index >= 0) setSelectedProjectIndex(index);
  };
  const contactCanvas = useDeferredCanvas();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isMobile, setIsMobile] = useState(null);

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
      <TrustBar />
      <section className="relative z-0 flex md:flex-row flex-col-reverse w-full h-full overflow-hidden">
        <About />
        {isMobile === false && <PlayerContainer isMobile={isMobile} />}
      </section>
      <Services />
      <Experience />
      <Tech />
      <Works selectedIndex={selectedProjectIndex} onSelectProject={setSelectedProjectIndex} />
      <WhyMe onOpenProject={openProject} />
      <BuildWithUs />
      <Feedbacks onOpenProject={openProject} />
      <section ref={contactCanvas.ref} className="relative z-0 flex md:flex-row justify-between flex-col-reverse w-full h-full overflow-x-hidden sm:p-8 p-2 pb-8">
        <Contact />
        <EarthContainer isMobile={isMobile} />
        {contactCanvas.ready && <StarsCanvas active={contactCanvas.visible} />}
      </section>
      <Footer />
      <WhatsAppButton />
      </main>
    </>
  );
}

export default App;
