import styles from "./DesktopConcepts.module.css";

const copy = {
  ar: {
    pointOfSale: "نقطة البيع", inventory: "المنتجات والمخزون", search: "ابحث باسم المنتج أو الباركود", categories: ["الكل", "ملابس", "إكسسوارات"], stock: "متوفر", add: "إضافة", cart: "سلة البيع", sale: "عملية بيع جديدة", customer: "عميل نقدي", total: "الإجمالي", subtotal: "قيمة المنتجات", discount: "خصم", pay: "تحصيل المبلغ", currency: "ج.م.", connected: "متصل بالمخزون", receipt: "إيصال 1028", units: "قطع في السلة", register: "صندوق 1", counter: "بيع مباشر",
    invoices: "الفواتير", document: "مستند الفاتورة", invoiceTitle: "فاتورة", invoiceNumber: "رقم الفاتورة", issueDate: "تاريخ الإصدار", date: "14 أكتوبر", billedTo: "فاتورة إلى", company: "شركة المثال", draft: "معاينة المستند", paid: "تم التحصيل", item: "البيان", quantity: "الكمية", price: "السعر", amount: "القيمة", services: ["تطوير واجهة الموقع", "تحديث المحتوى"], collection: "متابعة التحصيل", collected: "فواتير محصلة", outstanding: "فواتير قيد المتابعة", payment: "حالة الدفع", balance: "المتبقي", invoiceNote: "شكرًا لتعاملكم معنا", documentReady: "جاهزة للطباعة", client: "العميل",
    calendar: "جدول الفريق", today: "اليوم", month: "أكتوبر", weekDays: ["ح", "ن", "ث", "ر", "خ", "ج", "س"], weekStrip: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"], members: ["عضو الفريق 1", "عضو الفريق 2", "عضو الفريق 3"], servicesLabel: "الخدمات", serviceTypes: ["استشارة", "متابعة", "جلسة خاصة"], confirmed: "مؤكد", pending: "بانتظار التأكيد", available: "فترة متاحة", duration: "45 دقيقة", appointments: "موعدًا", confirmedCount: "مؤكدًا", availableCount: "فترات متاحة", dayView: "عرض اليوم", times: ["09:00", "10:00", "11:00", "12:00"],
  },
  en: {
    pointOfSale: "Point of sale", inventory: "Products & stock", search: "Search products or scan a barcode", categories: ["All", "Clothing", "Accessories"], stock: "in stock", add: "Add", cart: "Current sale", sale: "New transaction", customer: "Walk-in customer", total: "Total", subtotal: "Subtotal", discount: "Discount", pay: "Collect payment", currency: "EGP", connected: "Inventory connected", receipt: "Receipt 1028", units: "items in cart", register: "Register 1", counter: "Counter sale",
    invoices: "Invoices", document: "Invoice document", invoiceTitle: "INVOICE", invoiceNumber: "Invoice number", issueDate: "Issued on", date: "14 October", billedTo: "Bill to", company: "Example Company", draft: "Document preview", paid: "Payment received", item: "Description", quantity: "Qty", price: "Price", amount: "Amount", services: ["Website interface development", "Content updates"], collection: "Collection overview", collected: "invoices paid", outstanding: "invoices pending", payment: "Payment status", balance: "Balance due", invoiceNote: "Thank you for your business", documentReady: "Ready to print", client: "Customer",
    calendar: "Team schedule", today: "Today", month: "October", weekDays: ["S", "M", "T", "W", "T", "F", "S"], weekStrip: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], members: ["Team member 1", "Team member 2", "Team member 3"], servicesLabel: "Services", serviceTypes: ["Consultation", "Follow-up", "Private session"], confirmed: "Confirmed", pending: "Awaiting confirmation", available: "Available slot", duration: "45 minutes", appointments: "appointments", confirmedCount: "confirmed", availableCount: "available slots", dayView: "Day view", times: ["09:00", "10:00", "11:00", "12:00"],
  },
};

function Stock({ data, labels, language }) {
  const prices = [240, 180, 620, 480];
  return (
    <div className={styles.stock}>
      <header className={styles.stockHeader}><strong>{data.brand[language]}</strong><span>{labels.pointOfSale}</span><span className={styles.connection}>{labels.connected}</span><b>{labels.register}</b></header>
      <div className={styles.stockSplit}>
        <section className={styles.catalog}>
          <div className={styles.catalogHeading}><strong>{labels.inventory}</strong><span>128 SKU</span></div>
          <div className={styles.search}><span aria-hidden="true">⌕</span>{labels.search}<i className={styles.barcode} aria-hidden="true" /></div>
          <div className={styles.filters}>{labels.categories.map((category, index) => <span key={category} className={index === 0 ? styles.selectedFilter : ""}>{category}</span>)}</div>
          <div className={styles.products}>{data.rows[language].map((row, index) => <article className={styles.product} key={row[0]}><div className={styles.productIdentity}><span className={styles.productMark} aria-hidden="true">{["C", "B", "S", "J"][index]}</span><span dir="ltr">SKU A10{index + 1}</span><span className={styles.productPlus} aria-hidden="true">+</span></div><strong>{row[0]}</strong><span className={styles.stockCount}>{row[1]} {labels.stock}</span><div className={styles.productPrice}><b>{prices[index]} <small>{labels.currency}</small></b><i className={styles.barcode} aria-hidden="true" /></div></article>)}</div>
          <footer className={styles.stockFooter}><span className={styles.connection}>{labels.connected}</span><span>{labels.counter}</span></footer>
        </section>
        <aside className={styles.checkout}><div className={styles.checkoutHeading}><span>{labels.sale}</span><strong>{labels.cart}</strong><small>{labels.receipt}</small></div><div className={styles.customer}>{labels.customer}</div><div className={styles.cartLines}>{data.rows[language].slice(0, 2).map((row, index) => <div className={styles.cartLine} key={row[0]}><div><strong>{row[0]}</strong><span>{prices[index]} {labels.currency}</span></div><span className={styles.quantity} dir="ltr">− <b>1</b> +</span></div>)}</div><p className={styles.cartCount}>2 {labels.units}</p><div className={styles.totals}><div><span>{labels.subtotal}</span><b>420</b></div><div><span>{labels.discount}</span><b>0</b></div><div className={styles.grandTotal}><strong>{labels.total}</strong><b>420 <small>{labels.currency}</small></b></div></div><div className={styles.pay}>{labels.pay}<span aria-hidden="true">✓</span></div></aside>
      </div>
    </div>
  );
}

function Invoices({ data, labels, language }) {
  return (
    <div className={styles.invoices}>
      <header className={styles.invoiceHeader}><strong>{data.brand[language]}</strong><div>{data.nav[language].slice(1).map((item, index) => <span key={item} className={index === 0 ? styles.invoiceNavActive : ""}>{item}</span>)}</div><span className={styles.documentStatus}>{labels.documentReady}</span></header>
      <div className={styles.invoiceSplit}>
        <aside className={styles.invoiceList}><div className={styles.invoiceListHeading}><strong>{labels.invoices}</strong><span>64</span></div>{data.rows[language].map((row, index) => <article className={`${styles.invoiceItem} ${index === 0 ? styles.invoiceSelected : ""}`} key={row[0]}><strong>{row[0]}</strong><span>{labels.client} {index + 1}</span><div><b>{row[1]}</b><span>{row[2]}</span></div></article>)}<div className={styles.collection}><strong>{labels.collection}</strong><div><b>52</b><span>{labels.collected}</span></div><div><b>12</b><span>{labels.outstanding}</span></div><div className={styles.collectionBar}><span /></div></div></aside>
        <div className={styles.documentWorkspace}><div className={styles.documentToolbar}><span>{labels.draft}</span><span dir="ltr">A4 · 100%</span></div><section className={styles.paper}><header className={styles.paperHeading}><div><span>{labels.document}</span><strong>{labels.invoiceTitle}</strong></div><span className={styles.paid}>{labels.paid}</span></header><div className={styles.invoiceMeta}><div><span>{labels.billedTo}</span><strong>{labels.company}</strong></div><div><span>{labels.invoiceNumber}</span><strong dir="ltr">INV-1042</strong><span>{labels.date}</span></div></div><div className={styles.invoiceTable}><div className={styles.invoiceTableHead}><span>{labels.item}</span><span>{labels.quantity}</span><span>{labels.price}</span><span>{labels.amount}</span></div>{labels.services.map((service, index) => <div className={styles.invoiceTableRow} key={service}><strong>{service}</strong><span>{index === 0 ? 1 : 2}</span><span>{index === 0 ? "1,800" : "300"}</span><b>{index === 0 ? "1,800" : "600"}</b></div>)}</div><div className={styles.invoiceTotal}><span>{labels.total}</span><strong>2,400 <small>{labels.currency}</small></strong></div><div className={styles.invoiceBalance}><span>{labels.balance}</span><b>0 {labels.currency}</b></div><footer className={styles.paperFooter}><span>{labels.invoiceNote}</span><i className={styles.barcode} aria-hidden="true" /></footer></section></div>
      </div>
    </div>
  );
}

function Appointments({ data, labels, language }) {
  const bookings = [{ member: 0, slot: 0, client: 0 }, { member: 1, slot: 1, client: 1 }, { member: 2, slot: 2, client: 2 }, { member: 0, slot: 3, client: 3 }];
  return (
    <div className={styles.appointments}>
      <header className={styles.scheduleHeader}><strong>{data.brand[language]}</strong><span>{labels.calendar}</span><div className={styles.viewSwitch}><span>{labels.dayView}</span><span>{labels.today}</span></div></header>
      <div className={styles.scheduleSplit}>
        <aside className={styles.scheduleSidebar}><div className={styles.monthTitle}><strong>{labels.month}</strong><span aria-hidden="true">‹　›</span></div><div className={styles.monthGrid}>{labels.weekDays.map((day, index) => <b key={`${day}-${index}`}>{day}</b>)}{Array.from({ length: 28 }, (_, index) => <span key={index} className={index === 13 ? styles.selectedDate : ""}>{index + 1}</span>)}</div><h4>{labels.servicesLabel}</h4><div className={styles.serviceLegend}>{labels.serviceTypes.map((type, index) => <span key={type}><i className={styles[`legend${index}`]} />{type}</span>)}</div><div className={styles.dailyCount}><b>16</b><span>{labels.appointments}</span></div></aside>
        <section className={styles.planner}><div className={styles.weekStrip}>{labels.weekStrip.map((day, index) => <div className={index === 2 ? styles.weekSelected : ""} key={day}><span>{day}</span><strong>{12 + index}</strong></div>)}</div><div className={styles.memberHeaders}><span />{labels.members.map((member, index) => <div key={member}><i aria-hidden="true">{index + 1}</i><span>{member}</span></div>)}</div><div className={styles.dayPlanner}><div className={styles.hours}>{labels.times.map(time => <span key={time}>{time}</span>)}</div>{labels.members.map((member, memberIndex) => <div className={styles.memberColumn} key={member}>{labels.times.map((time, slot) => { const booking = bookings.find(item => item.member === memberIndex && item.slot === slot); return <div className={styles.timeSlot} key={time}>{booking ? <article className={`${styles.booking} ${styles[`booking${booking.client % 3}`]}`}><span>{data.rows[language][booking.client][1]}</span><strong>{data.rows[language][booking.client][0]}</strong><small>{labels.serviceTypes[booking.client % 3]}</small></article> : memberIndex === 1 && slot === 3 ? <div className={styles.availableSlot}>{labels.available}</div> : null}</div>; })}</div>)}</div><footer className={styles.plannerFooter}><span><b>12</b> {labels.confirmedCount}</span><span><b>4</b> {labels.availableCount}</span><span>{labels.duration}</span></footer></section>
      </div>
    </div>
  );
}

const layouts = { stock: Stock, invoices: Invoices, appointments: Appointments };

export default function DesktopConcepts({ concept, language, compact = false }) {
  const data = concept.workspace;
  const Layout = layouts[data.layout];
  return <div className={`${styles.scene} ${compact ? styles.compact : ""}`} data-desktop-layout={data.layout} aria-hidden={compact ? true : undefined} dir={language === "ar" ? "rtl" : "ltr"}><Layout data={data} labels={copy[language]} language={language} /></div>;
}
