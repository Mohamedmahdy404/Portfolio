import Image from "next/image";
import { projects } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import ArrowIcon from "@/public/assets/icons/up-arrow.svg";

export default function ProjectReference({ projectName, label, onOpenProject, withPreview = false }) {
  const { t, isArabic } = useLanguage();
  const index = projects.findIndex((project) => project.name === projectName);
  if (index < 0) return null;
  const project = projects[index];
  const name = t.projects.items[index]?.name || project.name;

  return (
    <button
      type="button"
      onClick={() => onOpenProject(projectName)}
      aria-haspopup="dialog"
      aria-label={`${t.projects.openDetails} ${name}`}
      className="group flex min-h-[52px] w-full items-center gap-3 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      {withPreview && (
        <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md border border-primary/20">
          <Image src={project.image} alt="" fill sizes="80px" className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none" />
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block break-words text-sm font-semibold leading-6 text-ctnPrimaryLight dark:text-ctnPrimaryDark">{name}</span>
        <span className="block text-xs leading-6 text-primary dark:text-five">{label}</span>
      </span>
      <ArrowIcon aria-hidden="true" className={`h-3 w-3 shrink-0 text-primary dark:text-five ${isArabic ? "-rotate-90" : "rotate-90"}`} />
    </button>
  );
}
