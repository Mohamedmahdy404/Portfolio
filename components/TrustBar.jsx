import Image from "next/image";
import { useState } from "react";
import { experiences } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./TrustBar.module.css";

const organizations = [
  { index: 0, name: "AIB" },
  { index: 2, name: "ITI" },
  { index: 3, name: "NVS Canada" },
  { index: 1, name: "Newulm Medical" },
];

export default function TrustBar() {
  const { t, isArabic } = useLanguage();
  const [paused, setPaused] = useState(false);
  const renderOrganizations = (duplicate = false) => (
    <ul className={styles.group} aria-hidden={duplicate ? "true" : undefined}>
      {organizations.map(({ index, name }) => (
        <li key={name} className={`${styles.card} bg-bgSecondaryLight dark:bg-bgSecondaryDark`}>
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-white">
            <Image src={experiences[index].icon} alt="" fill sizes="48px" className="object-contain p-1" />
          </div>
          <div dir={isArabic ? "rtl" : "ltr"} className="flex min-w-0 flex-1 flex-col gap-1 text-start">
            <p className={`text-[13px] font-bold leading-[18px] text-ctnPrimaryLight dark:text-ctnPrimaryDark ${isArabic ? "text-right" : "text-left"}`} dir="ltr">{name}</p>
            <p className="text-[11px] leading-4 text-ctnSecondaryLight dark:text-ctnSecondaryDark">{t.experience.items[index].company}</p>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-labelledby="professional-experience-title" dir={isArabic ? "rtl" : "ltr"}
      className="relative z-10 w-full bg-bgPrimaryLight px-5 pt-6 dark:bg-bgPrimaryDark sm:px-10 sm:pt-8">
      <div className="mx-auto mb-4 flex max-w-[1200px] items-center justify-between gap-4">
        <h2 id="professional-experience-title" className="text-base font-semibold text-ctnPrimaryLight dark:text-ctnPrimaryDark">
          {isArabic ? "مسيرتي مع المؤسسات" : "My professional journey"}
        </h2>
        <button
          type="button"
          onClick={() => setPaused((current) => !current)}
          aria-pressed={paused}
          className={`${styles.pauseButton} shrink-0 text-xs text-ctnSecondaryLight transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary dark:text-ctnSecondaryDark dark:hover:text-five`}
        >
          {isArabic ? (paused ? "تشغيل الحركة" : "إيقاف الحركة") : (paused ? "Resume motion" : "Pause motion")}
        </button>
      </div>
      <div className={styles.viewport}>
        <div className={styles.track} data-paused={paused}>
          {renderOrganizations()}
          {renderOrganizations(true)}
        </div>
      </div>
    </section>
  );
}
