import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function ServiceCard({ index, title, description, icon }) {
  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.12, 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group mx-auto flex w-full max-w-[190px] flex-col items-center text-center sm:max-w-[330px]"
    >
      <div className="service-orbit shine-sweep relative flex aspect-square w-full items-center justify-center rounded-full border border-primary/25 bg-bgSecondaryLight/40 p-4 shadow-[0_18px_70px_rgba(128,77,238,0.08)] backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2 dark:bg-bgSecondaryDark/35">
        <div className="absolute inset-3 rounded-full border border-primary/20 transition-all duration-500 group-hover:inset-2 group-hover:border-primary/50" />

        <span className="absolute top-[20%] font-mono text-[9px] tracking-[0.25em] text-primary/80 sm:top-[23%] sm:text-sm sm:tracking-[0.3em]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div
          className="float-y relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-bgPrimaryLight p-3 text-primary shadow-[0_0_35px_rgba(128,77,238,0.16)] dark:bg-bgPrimaryDark sm:h-24 sm:w-24 sm:p-6"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {icon}
        </div>

        <h3 className="absolute bottom-[17%] max-w-[82%] text-[12px] font-bold leading-snug text-ctnPrimaryLight dark:text-ctnPrimaryDark sm:bottom-[20%] sm:max-w-[72%] sm:text-xl">
          {title}
        </h3>

        <span className="absolute -bottom-2 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-bgPrimaryLight text-sm text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-bgPrimaryDark sm:-bottom-4 sm:h-9 sm:w-9 sm:text-xl">
          ↗
        </span>
      </div>

      <p className="mt-5 max-w-[180px] text-[10px] leading-5 text-ctnSecondaryLight dark:text-ctnSecondaryDark sm:mt-9 sm:max-w-[300px] sm:text-sm sm:leading-7">
        {description}
      </p>
    </motion.article>
  );
}

export default ServiceCard;
