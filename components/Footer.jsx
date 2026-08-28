import Link from "next/link";

import { socials } from "../constants";
import { useLanguage } from "@/contexts/LanguageContext";

function Footer() {
  const { t, isArabic } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t dark:border-white/10 border-black/10 px-6 py-8 sm:px-10">
      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between ${
          isArabic ? "sm:text-right" : "sm:text-left"
        }`}
      >
        <div>
          <p className="text-sm font-bold dark:text-ctnPrimaryDark text-ctnPrimaryLight">
            {t.nav.name}
          </p>
          <p className="mt-1 max-w-xs text-xs dark:text-ctnSecondaryDark text-ctnSecondaryLight">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={`footer-${social.id}`}
              className="w-5 h-5 opacity-80 transition-all hover:opacity-100 hover:-translate-y-1"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-[11px] dark:text-ctnSecondaryDark text-ctnSecondaryLight">
        © {year} {t.nav.name} — {t.footer.rights}
      </p>
    </footer>
  );
}

export default Footer;
