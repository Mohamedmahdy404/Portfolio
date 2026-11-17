import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ArrowIcon from "@/public/assets/icons/up-arrow.svg";
import WhatsappIcon from "@/public/assets/icons/whatsapp.svg";
import styles from "./ProjectDemos.module.css";

const demos = [{
  id: "droosy",
  href: "https://droosy.runasp.net/",
  teacherImage: "/assets/demos/droosy-teacher-desktop.jpg",
  studentImage: "/assets/demos/droosy-student.jpg",
}];

const copy = {
  ar: {
    eyebrow: "نماذج تفاعلية من عملي",
    title: "جرّب بنفسك.",
    intro: "استكشف منصات عملية، وجرّب كيف يمكن لفكرتك أن تعمل.",
    available: "متاح للتجربة",
    launch: "جرّب المنصة",
    request: "اطلب منصتك",
    note: "تجربة مباشرة ببيانات توضيحية",
    newTab: "يفتح في تبويب جديد",
    teacher: "لوحة المدرّس",
    student: "دروس الطالب",
    preview: "معاينة فعلية من داخل دروسي",
    projects: {
      droosy: {
        name: "دروسي",
        category: "منصة المدرّس الخصوصي",
        description: "اختر دور المدرّس أو الطالب أو وليّ الأمر، واستكشف المنصة بنفسك.",
        features: ["دروس وواجبات", "اختبارات إلكترونية", "متابعة الطلاب"],
        whatsapp: "مرحبًا محمد، جرّبت منصة دروسي وأرغب في مناقشة بناء منصة تعليمية تناسب مشروعي.",
      },
    },
  },
  en: {
    eyebrow: "Interactive projects",
    title: "Try it yourself.",
    intro: "Explore working platforms and see how an idea can become a practical experience.",
    available: "Live demo",
    launch: "Try the platform",
    request: "Build your platform",
    note: "An interactive experience with sample data",
    newTab: "Opens in a new tab",
    teacher: "Teacher workspace",
    student: "Student courses",
    preview: "A real preview from inside Droosy",
    projects: {
      droosy: {
        name: "Droosy",
        category: "Private tutoring platform",
        description: "Explore the platform as a teacher, student, or parent.",
        features: ["Lessons & assignments", "Online exams", "Student progress"],
        whatsapp: "Hello Mohamed, I tried Droosy and would like to discuss an education platform for my project.",
      },
    },
  },
};

function DemoPreview({ demo, labels }) {
  return (
    <div className={styles.previews}>
      <figure className={styles.teacherPreview}>
        <figcaption><span className="sm:hidden">{labels.student}</span><span className="hidden sm:inline">{labels.teacher}</span></figcaption>
        <a href={demo.href} target="_blank" rel="noopener noreferrer" className={styles.previewLink} aria-label={`${labels.launch} · ${labels.preview} · ${labels.newTab}`}>
          <div className={styles.windowBar} aria-hidden="true"><span><i /><i /><i /></span><b>droosy.runasp.net</b></div>
          <picture>
            <source media="(max-width: 639px)" srcSet={demo.studentImage} width={390} height={382} />
            <Image src={demo.teacherImage} alt={labels.preview} width={480} height={552} sizes="(max-width: 639px) 90vw, (max-width: 1023px) 50vw, 330px" className={styles.screenshot} />
          </picture>
        </a>
      </figure>
      <figure className={styles.studentPreview}>
        <figcaption>{labels.student}</figcaption>
        <a href={demo.href} target="_blank" rel="noopener noreferrer" className={styles.previewLink} aria-label={`${labels.launch} · ${labels.student} · ${labels.newTab}`}>
          <div className={styles.windowBar} aria-hidden="true"><span><i /><i /><i /></span><b>DROOSY</b></div>
          <Image src={demo.studentImage} alt={`${labels.preview} · ${labels.student}`} width={390} height={382} sizes="(max-width: 1023px) 42vw, 280px" className={styles.screenshot} />
        </a>
      </figure>
    </div>
  );
}

export default function ProjectDemos() {
  const { isArabic } = useLanguage();
  const labels = copy[isArabic ? "ar" : "en"];
  const reduceMotion = useReducedMotion();

  return (
    <section id="project-demos" aria-labelledby="project-demos-title" dir={isArabic ? "rtl" : "ltr"} className="relative bg-bgPrimaryLight px-4 pb-12 pt-8 text-ctnPrimaryLight dark:bg-bgPrimaryDark dark:text-ctnPrimaryDark sm:px-8 md:px-16 md:pb-20 md:pt-12">
      <div className="mx-auto max-w-[1160px]">
        <header className="mb-7 max-w-3xl sm:mb-9">
          <p className="sectionSubText">{labels.eyebrow}</p>
          <h2 id="project-demos-title" className="sectionHeadText mt-2">{labels.title}</h2>
          <p className="mt-4 text-sm leading-7 text-ctnSecondaryLight dark:text-ctnSecondaryDark sm:text-base">{labels.intro}</p>
        </header>
        <div className="grid gap-7">
          {demos.map((demo) => {
            const project = labels.projects[demo.id];
            return (
              <motion.article key={demo.id} aria-labelledby={`demo-${demo.id}-title`} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduceMotion ? 0 : 0.45 }} className={`${styles.demo} bg-bgSecondaryLight dark:bg-bgSecondaryDark`}>
                <div className={styles.introduction}>
                  <span className={styles.available}><i aria-hidden="true" />{labels.available}</span>
                  <h3 id={`demo-${demo.id}-title`} className={styles.name}>{project.name}</h3>
                  <p className={styles.category}>{project.category}</p>
                  <p className="mt-4 text-sm leading-7 text-ctnSecondaryLight dark:text-ctnSecondaryDark sm:text-base sm:leading-8">{project.description}</p>
                  <ul className={styles.features}>{project.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
                </div>
                <DemoPreview demo={demo} labels={labels} />
                <div className={styles.actions}>
                  <a href={demo.href} target="_blank" rel="noopener noreferrer" className={`${styles.launch} bg-primary text-white hover:bg-tertiary`}>
                    {labels.launch}<ArrowIcon aria-hidden="true" className={`h-4 w-4 shrink-0 ${isArabic ? "-rotate-90" : "rotate-90"}`} /><span className="sr-only">{labels.newTab}</span>
                  </a>
                  <a href={`https://wa.me/201069033838?text=${encodeURIComponent(project.whatsapp)}`} target="_blank" rel="noopener noreferrer" className={styles.request}>
                    <WhatsappIcon aria-hidden="true" className="h-5 w-5 shrink-0" />{labels.request}<span className="sr-only">{labels.newTab}</span>
                  </a>
                  <p className="text-center text-xs leading-6 text-ctnSecondaryLight dark:text-ctnSecondaryDark">{labels.note}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
