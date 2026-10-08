import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CloseIcon from "@/public/assets/icons/close.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectDetails } from "@/constants/projectDetails";
import ProjectLinks from "./ProjectLinks";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const { language, direction, t } = useLanguage();
  const labels = t.projects;
  const details = projectDetails[project.originalName][language];
  const images = project.detail_images?.length
    ? project.detail_images
    : [...(project.images?.length ? project.images : [project.image]), ...(project.mobile_images || [])];
  const isPortrait = (image) => Boolean(project.app_store_link || project.mobile_images?.includes(image));
  const resolveImage = (image) => failedImages[image] ? project.image : image;
  const imageSource = resolveImage(images[activeImage]);
  const handleImageError = (image) => {
    if (!failedImages[image]) setFailedImages((current) => ({ ...current, [image]: true }));
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflowY;
    dialog.showModal();
    document.body.style.overflowY = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflowY = previousOverflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      dir={direction}
      aria-labelledby="project-details-title"
      className={`${styles.dialog} bg-bgSecondaryLight text-ctnPrimaryLight dark:bg-bgSecondaryDark dark:text-ctnPrimaryDark`}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={styles.surface}>
        <header className={`${styles.header} bg-bgSecondaryLight dark:bg-bgSecondaryDark`}>
          <div className="min-w-0">
            <p className="mb-1 text-xs font-semibold text-primary dark:text-five">{labels.caseStudy}</p>
            <h2 id="project-details-title" dir="auto" className="break-words text-xl font-bold leading-snug md:text-2xl">{project.name}</h2>
          </div>
          <button
            type="button"
            autoFocus
            onClick={onClose}
            title={labels.closeDetails}
            aria-label={labels.closeDetails}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors hover:bg-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <CloseIcon aria-hidden="true" className="h-4 w-4" />
          </button>
        </header>

        <div className={styles.content}>
          <div className={styles.visual}>
            <h3 className="mb-3 text-sm font-semibold">{labels.gallery}</h3>
            <div className={`${styles.preview} ${isPortrait(images[activeImage]) ? styles.appPreview : ""}`}>
              <Image
                src={imageSource}
                alt={`${project.name} — ${labels.imageLabel} ${activeImage + 1}`}
                fill
                sizes="(max-width: 767px) 90vw, 560px"
                className="object-contain"
                priority
                onError={() => handleImageError(images[activeImage])}
              />
              <span className={styles.counter} dir="ltr">{activeImage + 1} / {images.length}</span>
            </div>
            {images.length > 1 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`${labels.showImage} ${index + 1}`}
                    aria-pressed={index === activeImage}
                    className={`relative ${isPortrait(image) ? "h-20 w-14" : "h-14 w-20"} overflow-hidden rounded-md border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${index === activeImage ? "border-primary" : "border-transparent hover:border-primary/40"}`}
                  >
                    <Image src={resolveImage(image)} alt="" fill sizes="80px" className="object-contain" onError={() => handleImageError(image)} />
                  </button>
                ))}
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-xs leading-relaxed">
              {project.tags.map((tag) => <span key={tag.name} className={tag.color}>#{tag.name}</span>)}
            </div>
            <section className="mt-6 border-t border-primary/15 pt-5" aria-labelledby="project-links-heading">
              <h3 id="project-links-heading" className="mb-3 text-sm font-semibold">{labels.links}</h3>
              <ProjectLinks project={project} labels={labels} />
            </section>
          </div>

          <div className={styles.story}>
            {[["problem", "1"], ["goal", "2"], ["solution", "3"]].map(([key, number]) => (
              <section key={key} className={styles.storySection}>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-xs font-semibold text-primary dark:text-five" aria-hidden="true">{number}</span>
                  <h3 className="text-base font-bold">{labels[key]}</h3>
                </div>
                <p className="text-sm leading-7 text-ctnSecondaryLight dark:text-ctnSecondaryDark">{details[key]}</p>
              </section>
            ))}
            <section>
              <h3 className="mb-3 text-base font-bold">{labels.features}</h3>
              <ul className="grid gap-3 text-sm leading-6">
                {details.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </dialog>
  );
}
