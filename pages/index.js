import { useEffect, useState } from "react";

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
import WhatsappIcon from "./../public/assets/icons/whatsapp.svg";
import Services from "@/components/Services";

function App({ loading }) {
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
      <a
        href="https://wa.me/201069033838"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send me a message on WhatsApp"
        title="Message me on WhatsApp"
        className="fixed z-40 md:w-12 md:h-12 h-11 w-11 p-1 bottom-8 md:right-10 right-8 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <WhatsappIcon />
      </a>
    </main>
  );
}

export default App;
