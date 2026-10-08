import Image from "next/image";
import styles from "./EducationConcepts.module.css";

const copy = {
  ar: {
    duration: "45 دقيقة",
    brand: "مدارك", nav: ["مساحة التعلم", "دوراتي", "المسارات", "الشهادات"], welcome: "رحلتك التعليمية", heading: "خطوة جديدة نحو مهارتك القادمة", resume: "استكمل التعلم", current: "تصميم واجهات المستخدم", lesson: "الدرس 6: المكونات ونظام التصميم", progress: "اكتمل 60% من المسار", next: "دوراتك التالية", courses: ["أساسيات البرمجة", "تصميم المنتجات"], meta: ["12 درسًا · مستوى مبتدئ", "8 دروس · مستوى متوسط"], path: "مسارك هذا الأسبوع", milestones: ["أساسيات التصميم", "المكونات", "مشروع تطبيقي"], completed: "مكتمل", studying: "قيد الدراسة", upcoming: "التالي", minutes: "18 دقيقة", video: "معاينة درس مسجل",
    academy: "أفق", academyNav: ["الجدول", "المجموعات", "الواجبات"], week: "جدول الأسبوع", date: "12–16 أكتوبر", live: "الحصص المباشرة", days: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"], subjects: ["اللغة العربية", "الرياضيات", "اللغة الإنجليزية", "مهارات القراءة"], group: "المجموعة أ", groupB: "المجموعة ب", session: "الحصة القادمة", topic: "اللغة العربية: القراءة والفهم", time: "اليوم · 10:00–10:45", students: "16 طالبًا في المجموعة", attendance: "متابعة الحضور", present: "حاضر", absent: "غائب", pending: "لم يسجل بعد", assignments: "الواجبات", assignment: "تدريب القراءة", submitted: "12 من 16 تم تسليمها", room: "قاعة الحصة", names: ["طالب 1", "طالب 2", "طالب 3"],
  },
  en: {
    duration: "45 minutes",
    brand: "Madarik", nav: ["Learning space", "My courses", "Paths", "Certificates"], welcome: "Your learning journey", heading: "Take the next step in your skills", resume: "Continue learning", current: "User interface design", lesson: "Lesson 6: Components and design systems", progress: "60% of your path completed", next: "Up next for you", courses: ["Programming basics", "Product design"], meta: ["12 lessons · Beginner", "8 lessons · Intermediate"], path: "Your path this week", milestones: ["Design basics", "Components", "Practice project"], completed: "Completed", studying: "In progress", upcoming: "Up next", minutes: "18 minutes", video: "Recorded lesson preview",
    academy: "Afaq", academyNav: ["Schedule", "Groups", "Assignments"], week: "Weekly schedule", date: "12–16 October", live: "Live classes", days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], subjects: ["Arabic", "Mathematics", "English", "Reading skills"], group: "Group A", groupB: "Group B", session: "Next class", topic: "Arabic: Reading and comprehension", time: "Today · 10:00–10:45", students: "16 students in this group", attendance: "Attendance", present: "Present", absent: "Absent", pending: "Not checked in", assignments: "Assignments", assignment: "Reading practice", submitted: "12 of 16 submitted", room: "Classroom", names: ["Student 1", "Student 2", "Student 3"],
  },
};

function Courses({ labels }) {
  return <div className={styles.learning}>
    <aside className={styles.sidebar}><strong>{labels.brand}</strong>{labels.nav.map((label, index) => <span key={label} className={index === 0 ? styles.navActive : ""}>{label}</span>)}<div className={styles.pathNote}><b dir="ltr">3 / 5</b><span>{labels.path}</span></div></aside>
    <div className={styles.courseBody}>
      <header className={styles.learningHeading}><span>{labels.welcome}</span><strong>{labels.heading}</strong></header>
      <section className={styles.continue}><div className={styles.video}><span>{labels.video}</span><div className={styles.designCanvas} aria-hidden="true"><div /><div /><div /></div><span className={styles.play} aria-hidden="true">▷</span><small>{labels.minutes}</small></div><div className={styles.lessonInfo}><span>{labels.resume}</span><strong>{labels.current}</strong><p>{labels.lesson}</p><div className={styles.progress}><span /></div><small>{labels.progress}</small></div></section>
      <h4>{labels.next}</h4><div className={styles.courseGrid}>{labels.courses.map((course, index) => <article className={styles.course} key={course}><div className={`${styles.cover} ${index === 1 ? styles.designCover : ""}`}><Image src={index === 0 ? "/assets/tech/python.svg" : "/assets/tech/figma.svg"} width={36} height={36} alt="" /></div><div><strong>{course}</strong><span>{labels.meta[index]}</span></div></article>)}</div>
      <section className={styles.path}><h4>{labels.path}</h4><div>{labels.milestones.map((milestone, index) => <article key={milestone}><i aria-hidden="true">{index === 0 ? "✓" : index + 1}</i><strong>{milestone}</strong><span>{[labels.completed, labels.studying, labels.upcoming][index]}</span></article>)}</div></section>
    </div>
  </div>;
}

function Academy({ labels }) {
  const events = [{ day: 0, slot: 0, subject: 0 }, { day: 1, slot: 1, subject: 1 }, { day: 2, slot: 0, subject: 2 }, { day: 3, slot: 2, subject: 3 }, { day: 4, slot: 1, subject: 0 }];
  return <div className={styles.academy}>
    <header className={styles.academyHeader}><strong>{labels.academy}</strong><div>{labels.academyNav.map((label, index) => <span className={index === 0 ? styles.activeTab : ""} key={label}>{label}</span>)}</div><span className={styles.teacher} aria-hidden="true">A</span></header>
    <div className={styles.academyBody}><div className={styles.scheduleHeading}><div><span>{labels.live}</span><strong>{labels.week}</strong></div><span>{labels.date}</span></div>
      <div className={styles.academySplit}><section className={styles.calendar}><div className={styles.days}><span />{labels.days.map((day, index) => <div key={day}><span>{day}</span><strong>{12 + index}</strong></div>)}</div><div className={styles.weekGrid}><div className={styles.times}>{["10:00", "12:00", "14:00"].map(time => <span key={time}>{time}</span>)}</div>{labels.days.map((day, dayIndex) => <div className={styles.dayColumn} key={day}>{[0, 1, 2].map(slot => { const event = events.find(item => item.day === dayIndex && item.slot === slot); return <div className={styles.calendarSlot} key={slot}>{event && <article className={`${styles.classEvent} ${event.subject % 2 ? styles.goldEvent : ""}`}><strong>{labels.subjects[event.subject]}</strong><span>{dayIndex % 2 ? labels.groupB : labels.group}</span><small>{labels.duration}</small></article>}</div>; })}</div>)}</div></section>
        <aside className={styles.session}><span className={styles.sessionLabel}>{labels.session}</span><strong>{labels.topic}</strong><p>{labels.time}</p><span className={styles.studentCount}>{labels.students}</span><div className={styles.classroom}><span aria-hidden="true">▷</span><strong>{labels.room}</strong></div><h4>{labels.attendance}</h4>{labels.names.map((name, index) => <div className={styles.attendance} key={name}><span>{name}</span><span className={index === 0 ? styles.present : ""}>{[labels.present, labels.absent, labels.pending][index]}</span></div>)}</aside>
      </div><footer className={styles.assignment}><strong>{labels.assignments}</strong><span>{labels.assignment}</span><div className={styles.assignmentProgress}><span /></div><span>{labels.submitted}</span></footer>
    </div>
  </div>;
}

export default function EducationConcepts({ concept, language, compact = false }) {
  const labels = copy[language];
  return <div className={`${styles.scene} ${compact ? styles.compact : ""}`} data-education-layout={concept.workspace.layout} dir={language === "ar" ? "rtl" : "ltr"} aria-hidden={compact ? true : undefined}>{concept.workspace.layout === "courses" ? <Courses labels={labels} /> : <Academy labels={labels} />}</div>;
}
