import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import WhatsappIcon from "../public/assets/icons/whatsapp.svg";
import WebsiteIcon from "../public/assets/icons/frontend.svg";
import StoreIcon from "../public/assets/icons/full-stack.svg";
import MobileIcon from "../public/assets/icons/freelance.svg";
import DesktopIcon from "../public/assets/icons/backend.svg";
import BusinessIcon from "../public/assets/icons/leadership.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { websitePath, mobilePath, desktopPath, businessPath } from "@/constants/buildPaths";
import ConceptWorkspace from "./ConceptWorkspace";

const WHATSAPP_NUMBER = "201069033838";

const conceptGroups = [
  {
    id: "fashion",
    label: { ar: "الأزياء", en: "Fashion" },
    accent: "#d8c3ad",
    concepts: [
      {
        title: { ar: "مظهر حديث", en: "Bold Streetwear" },
        description: {
          ar: "متجر سريع يضع المنتج في الواجهة، مع اختيار المقاس واللون وتجربة شراء مباشرة وواضحة.",
          en: "A product-first store with clear sizing, color selection, and a fast shopping journey.",
        },
        features: {
          ar: ["صفحة منتج قوية", "مقاسات وألوان", "اقتراحات للشراء"],
          en: ["Strong product page", "Sizes and colors", "Product recommendations"],
        },
        palette: ["#111111", "#f7f7f5", "#8d8d8a", "#d9d4ca"],
        image:
          "/assets/projects/Build with us/fashon/From Klickpin.com- Need fresh inspiration Pin these cozy puppy training ideas that make everything look instantly polished with aesthetic touches.jpg",
        mobileImage:
          "/assets/projects/Build with us/mobile/fashion-streetwear.png",
      },
      {
        title: { ar: "أناقة عصرية", en: "Modern Elegance" },
        description: {
          ar: "واجهة تحريرية راقية للمجموعات الموسمية، تجمع بين الصورة الكبيرة والوصول السريع للتصنيفات والمنتجات.",
          en: "An editorial storefront for seasonal collections with strong imagery and fast category discovery.",
        },
        features: {
          ar: ["مجموعات موسمية", "تصنيفات واضحة", "هوية فاخرة"],
          en: ["Seasonal collections", "Clear categories", "Premium identity"],
        },
        palette: ["#f4efe8", "#b49b84", "#2c2926", "#d8ccc0"],
        image:
          "/assets/projects/Build with us/fashon/From Klickpin.com- Need fresh inspiration Pin these cozy puppy training ideas that make everything look instantly polished with aesthetic touches (1).jpg",
        mobileImage:
          "/assets/projects/Build with us/mobile/fashion-modern-elegance.png",
      },
      {
        title: { ar: "أناقة راقية", en: "Modest Simplicity" },
        description: {
          ar: "تجربة هادئة لبراند أزياء محتشمة، مع Lookbook بصري وأقسام مرتبة تبرز الخامات والقصّات.",
          en: "A calm modest-fashion experience with a visual lookbook and thoughtfully organized collections.",
        },
        features: {
          ar: ["Lookbook تفاعلي", "عرض حسب الفئة", "أفضل المنتجات"],
          en: ["Interactive lookbook", "Category discovery", "Best sellers"],
        },
        palette: ["#f0ebe2", "#8f8069", "#3f4435", "#b8a38b"],
        image:
          "/assets/projects/Build with us/fashon/From Klickpin.com- 892486851183305154-pin-id-892486851183305154.jpg",
        mobileImage:
          "/assets/projects/Build with us/mobile/fashion-modest-elegance.png",
      },
    ],
  },
  {
    id: "food",
    label: { ar: "الأكل والمطاعم", en: "Food & Restaurants" },
    accent: "#f29a62",
    concepts: [
      {
        title: { ar: "متجر قهوة سريع", en: "Fast Coffee Ordering" },
        description: {
          ar: "قائمة رقمية سهلة للطلب، تسمح للعميل بالبحث والتصفية وتعديل الكمية ومراجعة السلة بسرعة.",
          en: "A quick ordering experience with search, filters, quantity controls, and a clear cart summary.",
        },
        features: {
          ar: ["طلب أونلاين", "بحث وتصفيات", "سلة واضحة"],
          en: ["Online ordering", "Search and filters", "Clear cart"],
        },
        palette: ["#fde2cc", "#f29157", "#9b633f", "#fffaf5"],
        image:
          "/assets/projects/Build with us/food/From Klickpin.com- 131659989103528014-pin-id-131659989103528014.jpg",
        mobileImage: "/assets/projects/Build with us/mobile/food-coffee.png",
      },
      {
        title: { ar: "منيو مطعم فاخر", en: "Premium Restaurant Menu" },
        description: {
          ar: "منيو عربي بصري يسهّل مقارنة الأصناف والأسعار ويعطي المطعم حضورًا قويًا من أول نظرة.",
          en: "A visual Arabic menu that makes dishes and prices easy to compare while building a premium identity.",
        },
        features: {
          ar: ["منيو عربي", "أقسام وأسعار", "تصميم مناسب للموبايل"],
          en: ["Arabic menu", "Sections and prices", "Mobile friendly"],
        },
        palette: ["#111512", "#c3914f", "#304a32", "#f3e1c2"],
        image:
          "/assets/projects/Build with us/food/From Klickpin.com- 426505027239668528-pin-id-426505027239668528.jpg",
        mobileImage:
          "/assets/projects/Build with us/mobile/food-restaurant.png",
      },
      {
        title: { ar: "تغذية صحية واضحة", en: "Clear Healthy Nutrition" },
        description: {
          ar: "هوية نظيفة لمشروع تغذية أو وجبات صحية، تركّز على المعلومات والقيم الغذائية بطريقة سهلة وجذابة.",
          en: "A clean direction for healthy meals or nutrition brands, focused on useful and approachable information.",
        },
        features: {
          ar: ["معلومات غذائية", "محتوى تعليمي", "هوية طبيعية"],
          en: ["Nutrition details", "Educational content", "Natural identity"],
        },
        palette: ["#f2ecdf", "#40551c", "#9a7d38", "#c9b98f"],
        image:
          "/assets/projects/Build with us/food/From Klickpin.com- Simple tiny lifestyle changes with simple charm and useful ideas today for calm daily living-pin-id-984177324840545302.jpg",
        mobileImage: "/assets/projects/Build with us/mobile/food-healthy.png",
      },
    ],
  },
  {
    id: "beauty",
    label: { ar: "الجمال والعناية", en: "Beauty" },
    accent: "#b96e82",
    concepts: [
      {
        title: { ar: "بيوتي ماركت فاخر", en: "Luxury Beauty Market" },
        description: {
          ar: "متجر غني بالمجموعات والمنتجات، مصمم لعرض المكياج والعطور والعناية بإحساس فاخر ومنظم.",
          en: "A rich, organized marketplace for makeup, fragrance, and skincare with a premium editorial feel.",
        },
        features: {
          ar: ["مجموعات تحريرية", "تسوق حسب الفئة", "برنامج ولاء"],
          en: ["Editorial collections", "Shop by category", "Loyalty program"],
        },
        palette: ["#371925", "#a75e51", "#ead2c4", "#fff8f1"],
        image:
          "/assets/projects/Build with us/Beauty/From Klickpin.com- Simple Spa Night Ideas for 2026-pin-id-222998619045347538.jpg",
        mobileImage: "/assets/projects/Build with us/mobile/beauty-luxury.png",
      },
      {
        title: { ar: "جمال طبيعي ناعم", en: "Soft Natural Beauty" },
        description: {
          ar: "واجهة دافئة لمنتجات العناية النظيفة، تجمع بين المنتجات والتقييمات والثقة في تجربة شراء واحدة.",
          en: "A warm clean-beauty storefront combining products, reviews, and trust in one smooth journey.",
        },
        features: {
          ar: ["منتجات مميزة", "تقييمات العملاء", "عروض ومجموعات"],
          en: ["Featured products", "Customer reviews", "Offers and bundles"],
        },
        palette: ["#f4d8da", "#163a31", "#c78888", "#fff8f4"],
        image:
          "/assets/projects/Build with us/Beauty/From Klickpin.com- 1102537552562599027-pin-id-1102537552562599027.jpg",
        mobileImage:
          "/assets/projects/Build with us/mobile/beauty-natural.png",
      },
      {
        title: { ar: "متجر عناية بسيط", en: "Simple Care Store" },
        description: {
          ar: "تصميم عربي خفيف يبرز التخفيضات والتصنيفات والمنتجات المقترحة بدون تعقيد أو ازدحام.",
          en: "A light Arabic storefront that highlights offers, categories, and recommendations without clutter.",
        },
        features: {
          ar: ["واجهة عربية", "عروض واضحة", "اقتراحات شخصية"],
          en: ["Arabic storefront", "Clear offers", "Personal suggestions"],
        },
        palette: ["#fffaf5", "#cdeca7", "#ecd8c4", "#8b6d45"],
        image:
          "/assets/projects/Build with us/Beauty/From Klickpin.com- Pin these 11 Dreamy boho home decor ideas that are worth saving if you love elegant details and creative inspiration for anyone.jpg",
        mobileImage: "/assets/projects/Build with us/mobile/beauty-simple.png",
      },
    ],
  },
];

const projectPaths = [
  websitePath,
  { id: "stores", label: { ar: "متاجر إلكترونية", en: "Online stores" }, icon: "store", groups: conceptGroups },
  mobilePath,
  desktopPath,
  businessPath,
];
const pathIcons = { web: WebsiteIcon, store: StoreIcon, mobile: MobileIcon, desktop: DesktopIcon, business: BusinessIcon };

const copy = {
  ar: {
    eyebrow: "ابنِ معي",
    title: "تخيّل مشروعك.",
    intro:
      "اختر نوع مشروعك، واستكشف أفكارًا تناسب عملك؛ من موقع ومتجر إلى تطبيق أو نظام لإدارة شركتك.",
    conceptLabel: "تصوّر توضيحي",
    referenceLabel: "معاينة مرجعية من أعمالي",
    desktopLabel: "معاينة الكمبيوتر",
    mobileLabel: "معاينة الهاتف",
    typeLabel: "نوع المشروع",
    categoryLabel: "مجال المتجر",
    directionLabel: "اختر الفكرة",
    sampleData: "بيانات تجريبية للعرض",
    paletteLabel: "لوحة الألوان",
    featuresLabel: "ما الذي يمكن أن يتضمنه؟",
    cta: "ناقش هذه الفكرة معي",
    note: "هذه معاينات لتوضيح الأفكار وليست مشاريع جديدة منفذة. المعاينات المرجعية مأخوذة من أعمالي، وواجهات الأنظمة تصوّرات ببيانات تجريبية. نحدد تفاصيل التنفيذ وفق احتياجات مشروعك.",
    imageAlt: "معاينة لفكرة",
    whatsappMessage: (concept, type, category) =>
      `مرحبًا محمد، اخترت «${type}»${category !== type ? ` في مجال ${category}` : ""}، وأعجبتني فكرة «${concept}» في قسم تخيّل مشروعك. أود مناقشة متطلبات مشروعي وخطوات تنفيذ هذه الفكرة بما يناسب عملي.`,
  },
  en: {
    eyebrow: "Build with me",
    title: "Picture your project.",
    intro:
      "Choose your project type and explore ideas for your business, from websites and stores to apps and internal systems.",
    conceptLabel: "Illustrative concept",
    referenceLabel: "Reference from my work",
    desktopLabel: "Desktop preview",
    mobileLabel: "Mobile preview",
    typeLabel: "Project type",
    categoryLabel: "Store industry",
    directionLabel: "Choose an idea",
    sampleData: "Illustrative sample data",
    paletteLabel: "Color palette",
    featuresLabel: "What it could include",
    cta: "Discuss this idea with me",
    note: "These previews illustrate ideas, not newly completed projects. Reference previews come from my work; system interfaces are concepts with sample data. We define implementation details around your needs.",
    imageAlt: "Preview of",
    whatsappMessage: (concept, type, category) =>
      `Hi Mohamed, I selected ${type}${category !== type ? ` for ${category}` : ""} and liked the "${concept}" idea in Picture Your Project. I would like to discuss my requirements and how to adapt this idea to my business.`,
  },
};

function BrowserPreview({ concept, labels, language }) {
  if (concept.previewKind === "mobile") {
    return (
      <div className="mx-auto grid w-full max-w-[520px] grid-cols-2 items-center gap-4 px-2 sm:gap-8">
        {concept.detailImages.map((src, index) => (
          <div key={src} className={`overflow-hidden rounded-lg border border-white/15 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.3)] ${index === 1 ? "mt-8" : ""}`}>
            <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-white">
              <Image src={src} alt={`${labels.mobileLabel}: ${concept.title[language]} ${index + 1}`} fill sizes="(max-width: 640px) 42vw, 230px" className="object-contain object-top" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  const isWorkspace = concept.previewKind === "workspace";
  return (
    <div className={`relative mx-auto w-full max-w-[780px] ${isWorkspace ? "" : "pb-5 pl-3 sm:pb-8 sm:pl-8"}`}>
      <div className="overflow-hidden rounded-lg border border-white/15 bg-[#171720] shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
        <div className="flex h-8 items-center justify-between border-b border-white/10 bg-[#20202b] px-3 sm:h-10">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
            <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
            <span className="h-2 w-2 rounded-full bg-[#5ed69a]" />
          </div>
          <span className="text-[10px] font-medium text-white/55 sm:text-xs">
            {isWorkspace ? labels.sampleData : labels.desktopLabel}
          </span>
          <span className="w-8" aria-hidden="true" />
        </div>
        <div className={`relative w-full overflow-hidden bg-white ${isWorkspace ? "min-h-[280px] sm:aspect-[16/10] sm:min-h-[420px]" : "aspect-[16/10]"}`}>
          {isWorkspace ? <ConceptWorkspace concept={concept} language={language} /> : (
          <Image
            src={concept.image}
            alt={`${labels.imageAlt} ${concept.title[language]}`}
            fill
            sizes="(max-width: 768px) 92vw, 62vw"
            className="object-cover object-top"
          />
          )}
        </div>
      </div>

      {!isWorkspace && <div className="absolute bottom-0 left-0 w-[24%] min-w-[76px] max-w-[158px] overflow-hidden rounded-[18px] border-[4px] border-[#111117] bg-[#111117] shadow-[0_18px_40px_rgba(0,0,0,0.45)] sm:border-[6px]">
        <div className="absolute left-1/2 top-1 z-10 h-1.5 w-7 -translate-x-1/2 rounded-full bg-black/80 sm:h-2 sm:w-10" />
        <div className="relative aspect-[9/16] overflow-hidden rounded-[12px] bg-white">
          <Image
            src={concept.mobileImage}
            alt={`${labels.mobileLabel}: ${concept.title[language]}`}
            fill
            sizes="(max-width: 768px) 24vw, 158px"
            className="object-cover object-top"
          />
        </div>
      </div>}
    </div>
  );
}

function ConceptPicker({
  activeGroup,
  activeConceptIndex,
  labels,
  language,
  reduceMotion,
  onSelect,
}) {
  return (
    <div className="mt-4">
      <p className="text-xs font-bold text-ctnSecondaryDark">
        {labels.directionLabel}
      </p>

        <motion.div
          key={activeGroup.id}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
          className={`mt-3 grid gap-2 sm:gap-3 ${activeGroup.concepts.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}
        >
          {activeGroup.concepts.map((concept, index) => {
            const isActive = activeConceptIndex === index;

            return (
              <motion.button
                key={concept.title.en}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`${labels.directionLabel}: ${concept.title[language]}`}
                aria-pressed={isActive}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`group relative aspect-square min-w-0 overflow-hidden rounded-md border text-start shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#181826] ${
                  isActive
                    ? "border-primary"
                    : "border-white/10 hover:border-white/35"
                }`}
              >
                {concept.previewKind === "workspace" ? <div className="absolute inset-0"><ConceptWorkspace concept={concept} language={language} compact /></div> : <Image
                  src={concept.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 190px, 150px"
                  className={`${concept.previewKind === "mobile" ? "object-contain bg-white" : "object-cover"} object-top transition duration-500 ${
                    isActive
                      ? "scale-105 saturate-100"
                      : "saturate-[0.72] group-hover:scale-105 group-hover:saturate-100"
                  }`}
                />}
                <span
                  className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-[#0c0c14]/35 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute right-2 top-2 text-[10px] font-black text-white/80 sm:text-xs">
                  {index + 1}
                </span>
                <span className="absolute inset-x-2 bottom-2 text-[11px] font-black leading-4 text-white sm:inset-x-3 sm:bottom-3 sm:text-sm sm:leading-5">
                  {concept.title[language]}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="active-concept-outline"
                    className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-inset ring-primary"
                    transition={{ duration: reduceMotion ? 0 : 0.25 }}
                    aria-hidden="true"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
    </div>
  );
}

function BuildWithUs() {
  const { isArabic } = useLanguage();
  const language = isArabic ? "ar" : "en";
  const labels = copy[language];
  const reduceMotion = useReducedMotion();
  const [activePathId, setActivePathId] = useState(projectPaths[0].id);
  const [activeGroupId, setActiveGroupId] = useState(projectPaths[0].groups[0].id);
  const [activeConceptIndex, setActiveConceptIndex] = useState(0);

  const activePath = projectPaths.find((path) => path.id === activePathId) || projectPaths[0];
  const activeGroup = useMemo(
    () => activePath.groups.find((group) => group.id === activeGroupId) || activePath.groups[0],
    [activePath, activeGroupId]
  );
  const activeConcept = activeGroup.concepts[activeConceptIndex];

  const selectPath = (path) => {
    setActivePathId(path.id);
    setActiveGroupId(path.groups[0].id);
    setActiveConceptIndex(0);
  };
  const selectGroup = (groupId) => {
    setActiveGroupId(groupId);
    setActiveConceptIndex(0);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    labels.whatsappMessage(
      activeConcept.title[language],
      activePath.label[language],
      activeGroup.label[language]
    )
  )}`;

  return (
    <section
      id="build-with-us"
      aria-labelledby="build-with-us-title"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative mb-0 overflow-hidden px-4 pb-16 pt-10 text-ctnPrimaryLight dark:text-ctnPrimaryDark sm:px-8 md:mb-28 md:px-16 md:pb-24 md:pt-16"
    >
      <div className="mx-auto max-w-[1220px]">
        <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#a98bff] sm:text-base">
              {labels.eyebrow}
            </p>
            <h2 id="build-with-us-title" className="sectionHeadText mt-3">
              {labels.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-ctnSecondaryLight dark:text-ctnSecondaryDark sm:text-base">
              {labels.intro}
            </p>
        </div>

        <div className="mt-8" role="group" aria-label={labels.typeLabel}>
          <p className="mb-3 text-xs font-semibold text-ctnSecondaryLight dark:text-ctnSecondaryDark">{labels.typeLabel}</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-3">
            {projectPaths.map((path, index) => {
              const Icon = pathIcons[path.icon];
              const selected = path.id === activePath.id;
              return (
                <motion.button key={path.id} type="button" aria-pressed={selected} onClick={() => selectPath(path)} whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} className={`flex min-h-[84px] min-w-0 items-center justify-center gap-3 rounded-lg border px-3 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${index === 4 ? "col-span-2 sm:col-span-1" : ""} ${selected ? "border-primary bg-primary/15 text-ctnPrimaryLight dark:text-ctnPrimaryDark" : "border-primary/15 bg-bgSecondaryLight text-ctnSecondaryLight hover:border-primary/50 dark:bg-bgSecondaryDark dark:text-ctnSecondaryDark"}`}>
                  <Icon aria-hidden="true" className="h-8 w-8 shrink-0" />
                  <span className="min-w-0 leading-6">{path.label[language]}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          {activePath.groups.length > 1 && <div className="w-full lg:max-w-[500px]">
            <p className="mb-3 text-xs font-semibold text-ctnSecondaryLight dark:text-ctnSecondaryDark">{labels.categoryLabel}</p>
            <div
              className="grid w-full grid-cols-3 overflow-hidden rounded-lg border border-white/15 bg-white/[0.04] p-1 backdrop-blur-sm"
              role="group"
              aria-label={labels.categoryLabel}
            >
              {activePath.groups.map((group) => {
                const isActive = activeGroup.id === group.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => selectGroup(group.id)}
                    className={`min-h-[48px] px-2 py-2 text-xs font-bold transition-all duration-300 sm:px-4 sm:text-sm ${
                      isActive
                        ? "bg-primary text-white shadow-[0_8px_24px_rgba(128,77,238,0.32)]"
                        : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {group.label[language]}
                  </button>
                );
              })}
            </div>
          </div>}
          <div className={`w-full lg:max-w-[500px] ${activePath.groups.length > 1 ? "lg:ms-auto" : "lg:mx-auto"}`}>
            <ConceptPicker
              activeGroup={activeGroup}
              activeConceptIndex={activeConceptIndex}
              labels={labels}
              language={language}
              reduceMotion={reduceMotion}
              onSelect={setActiveConceptIndex}
            />
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.75fr)] lg:items-center lg:gap-12">
            <motion.div
              key={`${activeGroup.id}-${activeConceptIndex}`}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
            >
              <BrowserPreview
                concept={activeConcept}
                labels={labels}
                language={language}
              />
            </motion.div>

          <div className="lg:py-4">
            <div className="flex items-center gap-3 text-xs font-bold text-white/50">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: activeGroup.accent }}
                aria-hidden="true"
              />
              <span>{activeConcept.reference ? labels.referenceLabel : labels.conceptLabel}</span>
              <span aria-hidden="true">/</span>
              <span>{activePath.label[language]}</span>
            </div>

              <motion.div
                key={`content-${activeGroup.id}-${activeConceptIndex}`}
                aria-live="polite"
                initial={reduceMotion ? false : { opacity: 0, x: isArabic ? 14 : -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
              >
                <h3 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
                  {activeConcept.title[language]}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/65">
                  {activeConcept.description[language]}
                </p>
              </motion.div>

            <div className="mt-7">
              <p className="text-xs font-bold text-white/45">{labels.paletteLabel}</p>
              <div className="mt-3 flex items-center gap-3">
                {activeConcept.palette.map((color) => (
                  <span
                    key={color}
                    className="h-8 w-8 rounded-full border border-white/20 shadow-inner sm:h-9 sm:w-9"
                    style={{ backgroundColor: color }}
                    title={color}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="text-xs font-bold text-white/45">{labels.featuresLabel}</p>
              <ul className="mt-3 grid gap-2 text-sm text-white/75">
                {activeConcept.features[language].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="h-px w-5 shrink-0 bg-[#a98bff]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-lg bg-[#25D366] px-5 py-3 text-center text-sm font-black text-[#07180d] shadow-[0_12px_36px_rgba(37,211,102,0.25)] transition hover:-translate-y-1 hover:bg-[#35df75] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#181826] sm:text-base"
            >
              <span className="h-6 w-6 shrink-0">
                <WhatsappIcon className="h-full w-full" />
              </span>
              {labels.cta}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-5 text-center text-xs leading-6 text-white/35">
          {labels.note}
        </p>
      </div>
    </section>
  );
}

export default BuildWithUs;
