import GithubLogo from "@/public/assets/icons/github.svg";
import RocketLogo from "@/public/assets/icons/rocket.svg";
import GooglePlayLogo from "@/public/assets/icons/google-play.svg";
import AppStoreLogo from "@/public/assets/icons/app-store.svg";

export default function ProjectLinks({ project, labels, compact = false }) {
  const isGooglePlay = project.deployed_link?.startsWith("https://play.google.com/");
  const links = [
    {
      href: project.deployed_link,
      label: isGooglePlay ? labels.googlePlay : labels.liveDemo,
      Icon: isGooglePlay ? GooglePlayLogo : RocketLogo,
    },
    { href: project.app_store_link, label: labels.appStore, Icon: AppStoreLogo },
    { href: project.source_code_link, label: labels.sourceCode, Icon: GithubLogo },
  ].filter(({ href }) => href && href !== "#");

  return (
    <div className={`flex flex-wrap ${compact ? "justify-between gap-2" : "gap-3"}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          aria-label={`${label} — ${project.name}`}
          className={`inline-flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${compact
            ? "pointer-events-auto black-gradient h-8 w-8 rounded-full text-white hover:text-five md:h-10 md:w-10"
            : "min-h-[48px] gap-3 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold hover:border-primary hover:bg-primary/20"
          }`}
        >
          <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
          {!compact && <span dir="auto">{label}</span>}
        </a>
      ))}
    </div>
  );
}
