import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import UpArrow from "../public/assets/icons/up-arrow.svg";
import { useLanguage } from "@/contexts/LanguageContext";

function ScrollToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label={t.scrollTop}
          title={t.scrollTop}
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed z-40 bottom-40 right-4 md:bottom-28 md:right-10 flex h-10 w-10 items-center justify-center rounded-full dark:bg-bgSecondaryDark bg-white text-primary shadow-[0_10px_30px_rgba(0,0,0,0.18)] ring-1 ring-primary/30 backdrop-blur-sm md:h-11 md:w-11"
        >
          <span className="w-4 h-4">
            <UpArrow className="w-full h-full" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
