import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import WhatsappIcon from "../public/assets/icons/whatsapp.svg";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_NUMBER = "201069033838";

const conceptGroups = [
  {
    id: "fashion",
    label: { ar: "الأزياء", en: "Fashion" },
    accent: "#d8c3ad",
    concepts: [
      {
        title: { ar: "ستريت وير جريء", en: "Bold Streetwear" },
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

const copy = {
  ar: {
    eyebrow: "ابنِ معنا",
    title: "تخيّل شكل براندك على الإنترنت.",
    intro:
      "اختر مجالك وشاهد اتجاهات بصرية يمكن تحويلها إلى متجر حقيقي يناسب هوية براندك وعملاءك.",
    conceptLabel: "تصميم تصوّري",
    desktopLabel: "عرض الديسكتوب",
    mobileLabel: "عرض الموبايل",
    directionLabel: "اختر الاتجاه",
    paletteLabel: "لوحة الألوان",
    featuresLabel: "ما الذي يمكن أن يتضمنه؟",
    cta: "ابنِ هذا الأسلوب لبراندك",
    note: "هذه أمثلة تصوّرية لتوضيح الإمكانيات وليست مشاريع منشورة.",
    imageAlt: "تصميم تصوّري لموقع",
    whatsappMessage: (concept, category) =>
      `مرحبًا محمد، شاهدت فكرة «${concept}» في قسم ابنِ معنا، وأريد تنفيذ موقع مشابه لبراند في مجال ${category}.`,
  },
  en: {
    eyebrow: "Build with me",
    title: "Picture your brand online.",
    intro:
      "Choose your industry and explore visual directions that can become a real store tailored to your brand and customers.",
    conceptLabel: "Concept design",
    desktopLabel: "Desktop preview",
    mobileLabel: "Mobile preview",
    directionLabel: "Choose a direction",
    paletteLabel: "Color palette",
    featuresLabel: "What it could include",
    cta: "Build this style for my brand",
    note: "These are conceptual examples that demonstrate possibilities, not published client projects.",
    imageAlt: "Website concept design for",
    whatsappMessage: (concept, category) =>
      `Hi Mohamed, I saw the “${concept}” concept in the Build With Me section and would like a similar website for my ${category} brand.`,
  },
};

function BrowserPreview({ concept, labels, language }) {
  return (
    <div className="relative mx-auto w-full max-w-[780px] pb-5 pl-3 sm:pb-8 sm:pl-8">
      <div className="overflow-hidden rounded-lg border border-white/15 bg-[#171720] shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
        <div className="flex h-8 items-center justify-between border-b border-white/10 bg-[#20202b] px-3 sm:h-10">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
            <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
            <span className="h-2 w-2 rounded-full bg-[#5ed69a]" />
          </div>
          <span className="text-[10px] font-medium text-white/55 sm:text-xs">
            {labels.desktopLabel}
          </span>
          <span className="w-8" aria-hidden="true" />
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
          <Image
            src={concept.image}
            alt={`${labels.imageAlt} ${concept.title[language]}`}
            fill
            sizes="(max-width: 768px) 92vw, 62vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[24%] min-w-[76px] max-w-[158px] overflow-hidden rounded-[18px] border-[4px] border-[#111117] bg-[#111117] shadow-[0_18px_40px_rgba(0,0,0,0.45)] sm:border-[6px]">
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
      </div>
    </div>
  );
}

function BuildWithUs() {
  const { isArabic } = useLanguage();
  const language = isArabic ? "ar" : "en";
  const labels = copy[language];
  const reduceMotion = useReducedMotion();
  const [activeGroupId, setActiveGroupId] = useState(conceptGroups[0].id);
  const [activeConceptIndex, setActiveConceptIndex] = useState(0);

  const activeGroup = useMemo(
    () => conceptGroups.find((group) => group.id === activeGroupId) || conceptGroups[0],
    [activeGroupId]
  );
  const activeConcept = activeGroup.concepts[activeConceptIndex];

  const selectGroup = (groupId) => {
    setActiveGroupId(groupId);
    setActiveConceptIndex(0);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    labels.whatsappMessage(
      activeConcept.title[language],
      activeGroup.label[language]
    )
  )}`;

  return (
    <section
      id="build-with-us"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative mb-0 mt-20 overflow-hidden border-y border-white/10 bg-[#111119] px-4 py-16 text-white sm:px-8 md:my-28 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-[1220px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#a98bff] sm:text-base">
              {labels.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              {labels.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              {labels.intro}
            </p>
          </div>

          <div
            className="grid w-full grid-cols-3 overflow-hidden rounded-lg border border-white/15 bg-white/[0.04] p-1 lg:w-auto lg:min-w-[440px]"
            role="tablist"
            aria-label={labels.directionLabel}
          >
            {conceptGroups.map((group) => {
              const isActive = activeGroup.id === group.id;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectGroup(group.id)}
                  className={`min-h-[48px] px-2 py-2 text-xs font-bold transition-colors sm:px-4 sm:text-sm ${
                    isActive
                      ? "bg-white text-[#171720]"
                      : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {group.label[language]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.75fr)] lg:items-center lg:gap-14">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${activeGroup.id}-${activeConceptIndex}`}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
            >
              <BrowserPreview
                concept={activeConcept}
                labels={labels}
                language={language}
              />
            </motion.div>
          </AnimatePresence>

          <div className="lg:py-4">
            <div className="flex items-center gap-3 text-xs font-bold text-white/50">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: activeGroup.accent }}
                aria-hidden="true"
              />
              <span>{labels.conceptLabel}</span>
              <span aria-hidden="true">/</span>
              <span>{activeGroup.label[language]}</span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`content-${activeGroup.id}-${activeConceptIndex}`}
                initial={reduceMotion ? false : { opacity: 0, x: isArabic ? 14 : -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, x: isArabic ? -10 : 10 }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
              >
                <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  {activeConcept.title[language]}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/65">
                  {activeConcept.description[language]}
                </p>
              </motion.div>
            </AnimatePresence>

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
              className="mt-8 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-lg bg-[#25D366] px-5 py-3 text-center text-sm font-black text-[#07180d] shadow-[0_12px_36px_rgba(37,211,102,0.25)] transition hover:-translate-y-1 hover:bg-[#35df75] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#111119] sm:text-base"
            >
              <span className="h-6 w-6 shrink-0">
                <WhatsappIcon className="h-full w-full" />
              </span>
              {labels.cta}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-7">
          <p className="text-xs font-bold text-white/40">{labels.directionLabel}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {activeGroup.concepts.map((concept, index) => {
              const isActive = activeConceptIndex === index;
              return (
                <button
                  key={concept.title.en}
                  type="button"
                  onClick={() => setActiveConceptIndex(index)}
                  aria-pressed={isActive}
                  className={`flex min-h-[64px] items-center gap-4 border px-4 py-3 text-start transition ${
                    isActive
                      ? "border-[#a98bff] bg-[#a98bff]/10 text-white"
                      : "border-white/10 text-white/55 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-black text-[#a98bff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-bold">{concept.title[language]}</span>
                </button>
              );
            })}
          </div>
          <p className="mt-5 text-center text-xs leading-6 text-white/35">
            {labels.note}
          </p>
        </div>
      </div>
    </section>
  );
}

export default BuildWithUs;
