import styles from "./ConceptWorkspace.module.css";
import BusinessConcepts from "./BusinessConcepts";
import EducationConcepts from "./EducationConcepts";

export default function ConceptWorkspace({ concept, language, compact = false }) {
  const data = concept.workspace;
  if (concept.previewFamily === "education") return <EducationConcepts concept={concept} language={language} compact={compact} />;
  if (data.layout) return <BusinessConcepts concept={concept} language={language} compact={compact} />;
  return (
    <div className={`${styles.workspace} ${compact ? styles.compact : ""}`} aria-hidden={compact ? true : undefined} dir={language === "ar" ? "rtl" : "ltr"} style={{ "--concept-accent": concept.palette[0], "--concept-surface": concept.palette[1] }}>
      <aside className={styles.sidebar}>
        <strong className={styles.brand}>{data.brand[language]}</strong>
        <div className={styles.nav}>
          {data.nav[language].map((label, index) => <span key={label} className={index === 1 ? styles.active : ""}>{label}</span>)}
        </div>
      </aside>
      <div className={styles.main}>
        <div className={styles.heading}><strong>{data.title[language]}</strong><span>{language === "ar" ? "نظرة عامة" : "Overview"}</span></div>
        <div className={styles.stats}>
          {data.stats[language].map((label, index) => <div key={label}><span>{label}</span><strong>{data.values[index]}</strong></div>)}
        </div>
        <div className={styles.table}>
          <div className={styles.tableHead}>{data.columns[language].map(label => <span key={label}>{label}</span>)}</div>
          {data.rows[language].map((row, index) => <div className={styles.row} key={index}>{row.map((value, column) => <span key={column} className={column === 2 ? styles.status : ""}>{value}</span>)}</div>)}
        </div>
        <div className={styles.activity}>
          <span>{language === "ar" ? "ملخص النشاط" : "Activity summary"}</span>
          <div className={styles.bars} aria-hidden="true">{[40, 65, 52, 82, 68, 95, 75, 88].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div>
        </div>
      </div>
    </div>
  );
}
