const localized = (ar, en) => ({ ar, en });

const workspaceConcept = (id, title, description, features, palette, workspace) => ({
  id,
  title,
  description,
  features,
  palette,
  previewKind: "workspace",
  workspace,
});

export const websitePath = {
  id: "websites",
  label: localized("مواقع ويب", "Websites"),
  icon: "web",
  groups: [{
    id: "websites",
    label: localized("مواقع ويب", "Websites"),
    accent: "#57cbb8",
    concepts: [
      {
        id: "company-site",
        title: localized("حضور احترافي لشركتك", "A professional company presence"),
        description: localized("موقع يعرّف بشركتك وخدماتها، وينظّم المعلومات التي يحتاجها العميل للوصول إلى جهة التواصل المناسبة.", "A company website that presents your services clearly and helps visitors reach the right contact."),
        features: localized(["عرض الخدمات", "طلبات واستفسارات", "تجربة متجاوبة"], ["Service catalogue", "Enquiries", "Responsive experience"]),
        palette: ["#102d42", "#38b7cd", "#ffffff", "#e8f1f5"],
        image: "/assets/projects/screenshots/moussa-shipping-desktop.jpg",
        mobileImage: "/assets/projects/screenshots/moussa-shipping-mobile.jpg",
        reference: true,
      },
      {
        id: "academy-site",
        title: localized("أكاديمية تصل إلى طلابها", "An academy that reaches its students"),
        description: localized("واجهة تعليمية تعرض البرامج والفئات المناسبة لكل برنامج، وتسهّل معرفة التفاصيل والتواصل للتسجيل.", "An education website presenting programmes and helping families find details and enquire about enrolment."),
        features: localized(["برامج تعليمية", "معلومات لأولياء الأمور", "استفسارات التسجيل"], ["Learning programmes", "Parent information", "Enrolment enquiries"]),
        palette: ["#234c3c", "#f3bd68", "#ffffff", "#eef5ef"],
        image: "/assets/projects/screenshots/ayah-online-desktop.jpg",
        mobileImage: "/assets/projects/screenshots/ayah-online-mobile.jpg",
        reference: true,
      },
      {
        id: "managed-site",
        title: localized("موقع يمكنك إدارته", "A website you can manage"),
        description: localized("موقع لشركتك مع لوحة تحكم لتحديث الخدمات والنصوص والصور، حتى يبقى محتواك مواكبًا لعملك.", "A company website with a private control panel for updating services, text, and images as your business evolves."),
        features: localized(["لوحة تحكم خاصة", "تحديث الخدمات والصور", "إدارة المحتوى"], ["Private control panel", "Service and image updates", "Content management"]),
        palette: ["#10221e", "#61bc86", "#ffffff", "#e6efeb"],
        image: "/assets/projects/screenshots/middle-east-desktop.jpg",
        mobileImage: "/assets/projects/screenshots/middle-east-mobile.jpg",
        reference: true,
      },
    ],
  }],
};

export const mobilePath = {
  id: "mobile",
  label: localized("تطبيقات موبايل", "Mobile apps"),
  icon: "mobile",
  groups: [{
    id: "mobile",
    label: localized("تطبيقات موبايل", "Mobile apps"),
    accent: "#6aa8ee",
    concepts: [
      {
        id: "ride-app",
        title: localized("حجوزات وتتبع مباشر", "Bookings and live tracking"),
        description: localized("تطبيق للخدمات أو التوصيل يجمع طلب الخدمة ومتابعة حالتها، مع خدمات خلفية تربط العميل بفريق التشغيل.", "A service or delivery app connecting bookings and live status with the backend your operations team needs."),
        features: localized(["طلب الخدمة", "متابعة مباشرة", "إدارة الطلبات"], ["Service requests", "Live status", "Order management"]),
        palette: ["#1176bb", "#74c8ff", "#ffffff", "#e9f4fc"],
        image: "/assets/projects/screenshots/paxi-go-1.webp",
        detailImages: ["/assets/projects/screenshots/paxi-go-1.webp", "/assets/projects/screenshots/paxi-go-2.webp"],
        previewKind: "mobile",
        reference: true,
      },
      {
        id: "care-app",
        title: localized("رعاية وحجوزات أسهل", "Care and simpler bookings"),
        description: localized("تطبيق يساعد المستخدم على اكتشاف الخدمات الصحية واختيار الموعد المناسب وإرسال طلبه في خطوات واضحة.", "An app that helps users explore healthcare services, choose appointments, and submit a clear booking request."),
        features: localized(["دليل الخدمات", "حجز المواعيد", "طلبات زيارات منزلية"], ["Service directory", "Appointment booking", "Home visit requests"]),
        palette: ["#136ab8", "#42b7d8", "#ffffff", "#eff7fb"],
        image: "/assets/projects/screenshots/ulm-care-1.webp",
        detailImages: ["/assets/projects/screenshots/ulm-care-1.webp", "/assets/projects/screenshots/ulm-care-2.webp"],
        previewKind: "mobile",
        reference: true,
      },
    ],
  }],
};

export const desktopPath = {
  id: "desktop",
  label: localized("برامج ديسكتوب", "Desktop software"),
  icon: "desktop",
  groups: [{
    id: "desktop",
    label: localized("برامج ديسكتوب", "Desktop software"),
    accent: "#57b9a0",
    concepts: [
      workspaceConcept("stock", localized("المخزون والمبيعات", "Stock and sales"), localized("برنامج يجمع منتجات المتجر وحركة المخزون والمبيعات، مع استيراد وتصدير البيانات لتقليل العمل المتكرر.", "A desktop workspace for products, stock movements, and sales, with data import and export."), localized(["مخزون ومنتجات", "مبيعات وفواتير", "استيراد وتصدير Excel"], ["Products and stock", "Sales and invoices", "Excel import and export"]), ["#157f70", "#e7f4f0", "#ffffff", "#e6a75a"], {
        brand: localized("مخزني", "Stockdesk"), title: localized("المخزون", "Inventory"), nav: localized(["نظرة عامة", "المنتجات", "المبيعات", "التقارير"], ["Overview", "Products", "Sales", "Reports"]),
        stats: localized(["المنتجات", "طلبات اليوم", "تحتاج إلى توريد"], ["Products", "Today's orders", "Low stock"]), values: ["128", "24", "6"],
        columns: localized(["المنتج", "الكمية", "الحالة"], ["Product", "Quantity", "Status"]),
        rows: localized([["قميص قطني", "42", "متوفر"], ["حقيبة يومية", "18", "متوفر"], ["حذاء رياضي", "4", "مخزون منخفض"], ["سترة خفيفة", "26", "متوفر"]], [["Cotton shirt", "42", "In stock"], ["Everyday bag", "18", "In stock"], ["Trainers", "4", "Low stock"], ["Light jacket", "26", "In stock"]]),
      }),
      workspaceConcept("invoices", localized("فواتير منظمة", "Organized invoicing"), localized("واجهة للفواتير والعملاء والتحصيل، تساعد فريقك على متابعة المستحقات والوصول إلى السجلات بسرعة.", "An invoicing and customer workspace for tracking balances and finding records quickly."), localized(["فواتير وعملاء", "متابعة التحصيل", "بحث وتقارير"], ["Invoices and customers", "Collection tracking", "Search and reports"]), ["#466ed1", "#edf1fb", "#ffffff", "#54b597"], {
        brand: localized("حساب", "Accountdesk"), title: localized("الفواتير", "Invoices"), nav: localized(["نظرة عامة", "الفواتير", "العملاء", "التقارير"], ["Overview", "Invoices", "Customers", "Reports"]),
        stats: localized(["فواتير الشهر", "تم تحصيلها", "قيد المتابعة"], ["Monthly invoices", "Paid", "Pending"]), values: ["64", "52", "12"],
        columns: localized(["الفاتورة", "القيمة", "الحالة"], ["Invoice", "Amount", "Status"]),
        rows: localized([["فاتورة 1042", "2,400", "مدفوعة"], ["فاتورة 1043", "1,250", "قيد المتابعة"], ["فاتورة 1044", "3,800", "مدفوعة"], ["فاتورة 1045", "950", "مدفوعة"]], [["Invoice 1042", "2,400", "Paid"], ["Invoice 1043", "1,250", "Pending"], ["Invoice 1044", "3,800", "Paid"], ["Invoice 1045", "950", "Paid"]]),
      }),
      workspaceConcept("appointments", localized("مواعيد دون ازدحام", "Organized appointments"), localized("برنامج للحجوزات اليومية وتوزيع المواعيد على أعضاء الفريق، مع سجل للعملاء والخدمات.", "A desktop scheduler for daily bookings, team appointments, customers, and services."), localized(["جدول المواعيد", "سجل العملاء", "توزيع الحجوزات"], ["Appointment schedule", "Customer records", "Booking allocation"]), ["#a66a39", "#f9f0e8", "#ffffff", "#62aaba"], {
        brand: localized("موعد", "Schedule"), title: localized("حجوزات اليوم", "Today's appointments"), nav: localized(["نظرة عامة", "المواعيد", "العملاء", "الخدمات"], ["Overview", "Appointments", "Customers", "Services"]),
        stats: localized(["المواعيد", "مؤكدة", "متاحة"], ["Appointments", "Confirmed", "Available"]), values: ["16", "12", "4"],
        columns: localized(["العميل", "الوقت", "الحالة"], ["Customer", "Time", "Status"]),
        rows: localized([["عميل 1", "09:30", "مؤكد"], ["عميل 2", "10:00", "مؤكد"], ["عميل 3", "11:15", "بانتظار التأكيد"], ["عميل 4", "12:00", "مؤكد"]], [["Customer 1", "09:30", "Confirmed"], ["Customer 2", "10:00", "Confirmed"], ["Customer 3", "11:15", "Pending"], ["Customer 4", "12:00", "Confirmed"]]),
      }),
    ],
  }],
};

export const businessPath = {
  id: "business",
  label: localized("أنظمة شركات", "Business systems"),
  icon: "business",
  groups: [{
    id: "business",
    label: localized("أنظمة شركات", "Business systems"),
    accent: "#e1ab64",
    concepts: [
      workspaceConcept("crm", localized("علاقات العملاء والمبيعات", "Customers and sales"), localized("نظام يجمع العملاء والفرص التجارية ومهام المتابعة، ليعرف فريق المبيعات الخطوة التالية لكل طلب.", "A shared system for customers, sales opportunities, and follow-up tasks so your team knows the next step."), localized(["عملاء وفرص تجارية", "متابعة الفريق", "تقارير المبيعات"], ["Customers and opportunities", "Team follow-up", "Sales reporting"]), ["#5964cc", "#eff0fb", "#ffffff", "#58bba8"], {
        layout: "pipeline",
        brand: localized("صلة", "Connect"), title: localized("فرص المبيعات", "Sales opportunities"), nav: localized(["نظرة عامة", "العملاء", "الفرص", "المهام"], ["Overview", "Customers", "Opportunities", "Tasks"]),
        stats: localized(["فرص نشطة", "متابعات اليوم", "عروض مرسلة"], ["Active opportunities", "Today's follow-ups", "Proposals sent"]), values: ["38", "12", "9"],
        columns: localized(["الفرصة", "المسؤول", "المرحلة"], ["Opportunity", "Owner", "Stage"]),
        rows: localized([["توريد منتجات", "فريق 1", "عرض سعر"], ["خدمة شهرية", "فريق 2", "متابعة"], ["فرع جديد", "فريق 1", "تواصل أولي"], ["تجديد تعاقد", "فريق 3", "مراجعة"]], [["Product supply", "Team 1", "Proposal"], ["Monthly service", "Team 2", "Follow-up"], ["New branch", "Team 1", "Contacted"], ["Renewal", "Team 3", "Review"]]),
      }),
      workspaceConcept("operations", localized("تشغيل مترابط", "Connected operations"), localized("لوحة تجمع الطلبات ومراحل تنفيذها والمسؤول عن كل مرحلة، مع إمكانية ربطها بالأنظمة التي يستخدمها فريقك.", "An operations board connecting requests, execution stages, and ownership, with integration into your team's existing systems."), localized(["طلبات ومراحل تنفيذ", "تنبيهات وتحديثات", "ربط الأنظمة"], ["Requests and stages", "Alerts and updates", "System integrations"]), ["#167f91", "#e6f4f6", "#ffffff", "#e7ae58"], {
        layout: "operations",
        brand: localized("مسار", "Flow"), title: localized("طلبات التشغيل", "Operations requests"), nav: localized(["نظرة عامة", "الطلبات", "الفريق", "التقارير"], ["Overview", "Requests", "Team", "Reports"]),
        stats: localized(["طلبات نشطة", "قيد التنفيذ", "جاهزة للتسليم"], ["Active requests", "In progress", "Ready"]), values: ["48", "32", "16"],
        columns: localized(["الطلب", "القسم", "الحالة"], ["Request", "Department", "Status"]),
        rows: localized([["طلب 2301", "التشغيل", "قيد التنفيذ"], ["طلب 2302", "المخازن", "جاهز"], ["طلب 2303", "الدعم", "قيد المراجعة"], ["طلب 2304", "التشغيل", "جاهز"]], [["Request 2301", "Operations", "In progress"], ["Request 2302", "Warehouse", "Ready"], ["Request 2303", "Support", "Review"], ["Request 2304", "Operations", "Ready"]]),
      }),
      workspaceConcept("team-access", localized("فريق وصلاحيات واضحة", "Teams and clear access"), localized("نظام داخلي يوزّع الصلاحيات حسب الدور وينظّم إجراءات الفريق وسجلاته، مع إمكانية إضافة تكاملات وأتمتة مناسبة.", "An internal system with role-based access, organized team records, and room for useful integrations and automation."), localized(["أدوار وصلاحيات", "سجلات الفريق", "إجراءات وموافقات"], ["Roles and permissions", "Team records", "Workflows and approvals"]), ["#426b56", "#ebf3ed", "#ffffff", "#c99753"], {
        layout: "access",
        brand: localized("فريق", "Teamspace"), title: localized("إدارة الفريق", "Team management"), nav: localized(["نظرة عامة", "الأعضاء", "الصلاحيات", "الموافقات"], ["Overview", "Members", "Permissions", "Approvals"]),
        stats: localized(["أعضاء الفريق", "الأقسام", "موافقات معلقة"], ["Team members", "Departments", "Pending approvals"]), values: ["42", "6", "8"],
        columns: localized(["العضو", "الدور", "الحالة"], ["Member", "Role", "Status"]),
        rows: localized([["عضو 1", "مدير قسم", "نشط"], ["عضو 2", "موظف", "نشط"], ["عضو 3", "مشرف", "نشط"], ["عضو 4", "موظف", "دعوة مرسلة"]], [["Member 1", "Manager", "Active"], ["Member 2", "Staff", "Active"], ["Member 3", "Supervisor", "Active"], ["Member 4", "Staff", "Invited"]]),
      }),
    ],
  }],
};
