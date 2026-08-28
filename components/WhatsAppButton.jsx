import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import WhatsappIcon from "../public/assets/icons/whatsapp.svg";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_LINK = "https://wa.me/201069033838";
const BUBBLE_SESSION_KEY = "portfolio-wa-bubble-shown";
const BUBBLE_DELAY_MS = 4500;
const BUBBLE_AUTO_HIDE_MS = 12000;

function WhatsAppButton() {
  const { t, isArabic } = useLanguage();
  const [ready, setReady] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => setReady(true), 900);
    return () => clearTimeout(revealTimer);
  }, []);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = window.sessionStorage.getItem(BUBBLE_SESSION_KEY) === "1";
    } catch (error) {
      alreadyShown = false;
    }

    if (alreadyShown) return undefined;

    const openTimer = setTimeout(() => {
      setShowBubble(true);
      try {
        window.sessionStorage.setItem(BUBBLE_SESSION_KEY, "1");
      } catch (error) {
        // sessionStorage can be unavailable (private mode); safe to ignore.
      }
    }, BUBBLE_DELAY_MS);

    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!showBubble) return undefined;
    const hideTimer = setTimeout(() => setShowBubble(false), BUBBLE_AUTO_HIDE_MS);
    return () => clearTimeout(hideTimer);
  }, [showBubble]);

  if (!ready) return null;

  return (
    <div
      dir="ltr"
      className="fixed z-40 bottom-24 right-4 md:bottom-8 md:right-10 flex flex-col items-end gap-3 safe-bottom"
    >
      <AnimatePresence>
        {showBubble && (
          <motion.div
            dir={isArabic ? "rtl" : "ltr"}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className={`relative w-[230px] xs:w-[270px] rounded-2xl dark:bg-bgSecondaryDark bg-white p-4 pr-9 shadow-[0_18px_50px_rgba(0,0,0,0.25)] ring-1 ring-black/5 dark:ring-white/10 ${
              isArabic ? "text-right pr-4 pl-9" : "text-left"
            }`}
          >
            <button
              type="button"
              onClick={() => setShowBubble(false)}
              aria-label={t.whatsappWidget.close}
              className={`absolute top-2 w-6 h-6 rounded-full flex items-center justify-center text-ctnSecondaryLight dark:text-ctnSecondaryDark hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${
                isArabic ? "left-2" : "right-2"
              }`}
            >
              ✕
            </button>
            <p className="text-sm font-bold text-ctnPrimaryLight dark:text-ctnPrimaryDark mb-1">
              {t.whatsappWidget.greeting}
            </p>
            <p className="text-xs leading-5 text-ctnSecondaryLight dark:text-ctnSecondaryDark mb-3">
              {t.whatsappWidget.message}
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white hover:bg-[#1ebe5a] transition-colors"
            >
              <span className="w-4 h-4 shrink-0">
                <WhatsappIcon className="w-full h-full" />
              </span>
              {t.whatsappWidget.cta}
            </a>
            <span
              className="absolute -bottom-1.5 right-8 w-3 h-3 rotate-45 dark:bg-bgSecondaryDark bg-white"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp}
        title={t.whatsapp}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setShowBubble(false)}
        className="relative flex md:w-14 md:h-14 h-12 w-12 items-center justify-center rounded-full bg-[#25D366] ring-2 ring-white/80 dark:ring-white/20 shadow-[0_8px_28px_rgba(37,211,102,0.45)]"
      >
        <span className="wa-ring absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
        <span className="relative z-10 w-7 h-7 md:w-8 md:h-8">
          <WhatsappIcon className="w-full h-full" />
        </span>
        <span
          className="absolute -top-1 -right-1 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-bgPrimaryDark"
          aria-hidden="true"
        >
          1
        </span>
      </motion.a>
    </div>
  );
}

export default WhatsAppButton;
