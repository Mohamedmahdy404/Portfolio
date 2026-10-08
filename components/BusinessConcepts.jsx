import styles from "./BusinessConcepts.module.css";

const copy = {
  ar: {
    pipeline: "لوحة المبيعات", period: "هذا الشهر", stages: ["تواصل أولي", "عرض سعر", "تفاوض"],
    leads: [["فرع جديد", "اشتراك سنوي"], ["توريد منتجات", "توريد فرع"], ["خدمة شهرية", "تجديد تعاقد"]],
    values: ["18,500 ج.م.", "12,000 ج.م.", "24,000 ج.م."], followUp: "متابعة هذا الأسبوع", assigned: "فريق المبيعات", opportunities: "فرصة نشطة",
    control: "مركز التشغيل", live: "متابعة الطلبات", queue: "قائمة العمل", order: "طلب 2301", owner: "المسؤول: فريق التشغيل", progress: "مسار التنفيذ",
    steps: ["استلام الطلب", "تجهيز المتطلبات", "التنفيذ", "التسليم"], stepNotes: ["تم التسجيل 09:10", "اكتملت المراجعة", "قيد العمل الآن", "بانتظار الإكمال"],
    capacity: "توزيع العمل اليوم", ready: "جاهزة للتسليم", active: "قيد التنفيذ", shifts: ["الفترة الصباحية", "الفترة المسائية", "فريق الدعم"],
    directory: "دليل الفريق", members: "أعضاء الفريق", permissions: "مصفوفة الصلاحيات", roles: ["مدير قسم", "مشرف", "موظف"], actions: ["عرض", "تعديل", "اعتماد"],
    departments: ["المبيعات", "التشغيل", "الإدارة", "الدعم"], policy: "الوصول حسب الدور", policyText: "لكل دور نطاق واضح من الصلاحيات.", invitations: "دعوات معلقة", access: "مسموح", blocked: "غير مسموح",
  },
  en: {
    pipeline: "Sales pipeline", period: "This month", stages: ["New contact", "Proposal", "Negotiation"],
    leads: [["New branch", "Annual plan"], ["Product supply", "Branch supply"], ["Monthly service", "Renewal"]],
    values: ["EGP 18,500", "EGP 12,000", "EGP 24,000"], followUp: "Follow up this week", assigned: "Sales team", opportunities: "active opportunities",
    control: "Operations centre", live: "Request tracking", queue: "Work queue", order: "Request 2301", owner: "Owner: Operations", progress: "Execution timeline",
    steps: ["Received", "Preparation", "Execution", "Delivery"], stepNotes: ["Logged at 09:10", "Review complete", "In progress", "Awaiting completion"],
    capacity: "Today's workload", ready: "ready for delivery", active: "in progress", shifts: ["Morning shift", "Evening shift", "Support team"],
    directory: "Team directory", members: "Team members", permissions: "Permission matrix", roles: ["Manager", "Supervisor", "Staff"], actions: ["View", "Edit", "Approve"],
    departments: ["Sales", "Operations", "Admin", "Support"], policy: "Role-based access", policyText: "Each role has a clearly defined access scope.", invitations: "pending invitations", access: "Allowed", blocked: "Not allowed",
  },
};

function Pipeline({ data, labels, language }) {
  return (
    <>
      <header className={styles.crmHeader}>
        <strong>{data.brand[language]}</strong>
        <div>{data.nav[language].slice(1).map((item, index) => <span key={item} className={index === 1 ? styles.selectedNav : ""}>{item}</span>)}</div>
        <span className={styles.profile} aria-hidden="true">M</span>
      </header>
      <div className={styles.crmBody}>
        <div className={styles.pipelineHeading}><div><strong>{labels.pipeline}</strong><span>38 {labels.opportunities}</span></div><span>{labels.period}</span></div>
        <div className={styles.pipeline}>
          {labels.stages.map((stage, index) => (
            <section className={styles.stage} key={stage}>
              <div className={styles.stageHeading}><strong>{stage}</strong><span>{[14, 9, 15][index]}</span></div>
              <div className={styles.stageRule} />
              {labels.leads[index].map((lead, leadIndex) => (
                <article className={styles.lead} key={lead}>
                  <span className={styles.leadCategory}>{labels.assigned}</span>
                  <strong>{lead}</strong>
                  <b dir="auto">{labels.values[(index + leadIndex) % 3]}</b>
                  <div className={styles.leadFooter}><span>{labels.followUp}</span><i aria-hidden="true">{index + leadIndex + 1}</i></div>
                </article>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

function Operations({ data, labels, language }) {
  return (
    <div className={styles.operations}>
      <aside className={styles.opsRail}><strong>{data.brand[language]}</strong>{data.nav[language].map((item, index) => <span className={index === 1 ? styles.railActive : ""} key={item}>{item}</span>)}</aside>
      <div className={styles.opsMain}>
        <header className={styles.opsHeader}><div><span>{labels.live}</span><strong>{labels.control}</strong></div><span className={styles.liveDot} aria-hidden="true" /></header>
        <div className={styles.opsSummary}><span><b>32</b> {labels.active}</span><div className={styles.progressBar}><span /></div><span><b>16</b> {labels.ready}</span></div>
        <div className={styles.opsSplit}>
          <section className={styles.queue}><h4>{labels.queue}</h4>{data.rows[language].map((row, index) => <article className={`${styles.ticket} ${index === 0 ? styles.selectedTicket : ""}`} key={row[0]}><span className={styles.ticketMarker} aria-hidden="true" /><div><strong>{row[0]}</strong><span>{row[1]}</span></div><span className={styles.ticketStatus}>{row[2]}</span></article>)}</section>
          <section className={styles.orderDetail}><span className={styles.detailLabel}>{labels.progress}</span><strong>{labels.order}</strong><p>{labels.owner}</p><ol className={styles.timeline}>{labels.steps.map((step, index) => <li key={step} className={index < 2 ? styles.complete : index === 2 ? styles.current : ""}><span className={styles.stepDot} aria-hidden="true" /><div><strong>{step}</strong><span>{labels.stepNotes[index]}</span></div></li>)}</ol></section>
        </div>
        <div className={styles.shiftRow}><span>{labels.capacity}</span>{labels.shifts.map((shift, index) => <div key={shift}><span>{shift}</span><div style={{ "--shift-progress": `${[80, 56, 35][index]}%` }} /></div>)}</div>
      </div>
    </div>
  );
}

function Access({ data, labels, language }) {
  const access = [[true, true, true], [true, true, false], [true, false, false]];
  return (
    <>
      <header className={styles.teamHeader}><strong>{data.brand[language]}</strong><div>{data.nav[language].slice(1).map((item, index) => <span className={index === 0 ? styles.teamActive : ""} key={item}>{item}</span>)}</div><span>42</span></header>
      <div className={styles.teamBody}>
        <div className={styles.teamHeading}><strong>{labels.directory}</strong><span>4 {labels.invitations}</span></div>
        <div className={styles.accessSplit}>
          <section className={styles.members}><h4>{labels.members}</h4><div className={styles.memberGrid}>{data.rows[language].map((row, index) => <article key={row[0]} className={styles.member}><span className={styles.avatar} aria-hidden="true">{language === "ar" ? "ع" : "M"}{index + 1}</span><strong>{row[0]}</strong><span>{row[1]}</span><span className={styles.department}>{labels.departments[index]}</span></article>)}</div></section>
          <section className={styles.permissions}><h4>{labels.permissions}</h4><div className={styles.matrix}><div className={styles.matrixHead}><span /><span>{labels.actions[0]}</span><span>{labels.actions[1]}</span><span>{labels.actions[2]}</span></div>{labels.roles.map((role, index) => <div className={styles.matrixRow} key={role}><strong>{role}</strong>{access[index].map((allowed, column) => <span key={column} className={allowed ? styles.allowed : styles.denied} aria-label={`${role}: ${labels.actions[column]} ${allowed ? labels.access : labels.blocked}`}>{allowed ? "✓" : "−"}</span>)}</div>)}</div><div className={styles.policy}><span className={styles.policyMark} aria-hidden="true">✓</span><div><strong>{labels.policy}</strong><p>{labels.policyText}</p></div></div></section>
        </div>
      </div>
    </>
  );
}

export default function BusinessConcepts({ concept, language, compact }) {
  const data = concept.workspace;
  const labels = copy[language];
  const layouts = { pipeline: Pipeline, operations: Operations, access: Access };
  const Layout = layouts[data.layout];
  return <div className={`${styles.scene} ${data.layout === "access" ? styles.access : ""} ${compact ? styles.compact : ""}`} data-concept-layout={data.layout} aria-hidden={compact ? true : undefined} dir={language === "ar" ? "rtl" : "ltr"}><Layout data={data} labels={labels} language={language} /></div>;
}
