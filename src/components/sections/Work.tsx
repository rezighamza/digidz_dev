import { ArrowRight, Check, MessageCircle, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/buttons";
import { highlightKeys, projectSlugs, projects, type ProjectSlug } from "@/content/projects";
import { whatsappUrl } from "@/config/site";

export default function Work() {
  const t = useTranslations("Work");

  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading id="work-title" eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

        <div className="mt-14 space-y-8">
          {projectSlugs.map((slug, i) => (
            <Reveal key={slug}>
              <ProjectCard slug={slug} reversed={i % 2 === 1} />
            </Reveal>
          ))}

          <Reveal>
            <div className="flex flex-col gap-6 rounded-3xl border border-dashed border-line-strong p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Workflow className="h-6 w-6" />
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold text-ink">{t("custom.title")}</h3>
                  <p className="mt-2 leading-relaxed text-ink-2">{t("custom.text")}</p>
                </div>
              </div>
              <a href="#contact" className={buttonClass("secondary", { className: "self-start lg:self-center" })}>
                {t("custom.cta")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ slug, reversed }: { slug: ProjectSlug; reversed: boolean }) {
  const t = useTranslations(`Projects.${slug}`);
  const tWork = useTranslations("Work");
  const tCommon = useTranslations("Common");
  const { icon: Icon, Mockup } = projects[slug];

  return (
    <article className="grid overflow-hidden rounded-3xl border border-line bg-paper lg:grid-cols-[1fr_1.3fr]">
      <div className="flex flex-col p-8 sm:p-10">
        <p className="inline-flex items-center gap-2 self-start rounded-full bg-surface px-3 py-1 text-sm font-medium text-ink-2 ring-1 ring-line">
          <Icon className="h-4 w-4 text-accent" />
          {t("sector")}
        </p>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-ink">{t("name")}</h3>
        <p className="mt-2 text-lg leading-relaxed text-ink-2">{t("tagline")}</p>

        <ul className="mt-6 space-y-3">
          {highlightKeys.map((key) => (
            <li key={key} className="flex gap-3 text-ink-2">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
              <span>{t(`highlights.${key}`)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-auto lg:pt-8">
          <Link href={`/work/${slug}`} className={buttonClass("primary")}>
            {tWork("caseStudy")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
          <a
            href={whatsappUrl(tCommon("waDemo", { product: t("name") }))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-ink underline-offset-4 hover:underline"
          >
            <MessageCircle className="h-4 w-4 text-[#1faa55]" />
            {tWork("liveDemo")}
          </a>
        </div>
      </div>

      <div
        className={`flex items-center border-line bg-sunken/60 p-5 sm:p-8 lg:p-10 ${
          reversed ? "border-b lg:order-first lg:border-b-0 lg:border-e" : "border-t lg:border-t-0 lg:border-s"
        }`}
      >
        <div className="w-full">
          <Mockup />
          <p className="mt-3 text-xs text-ink-3">{tCommon("sampleData")}</p>
        </div>
      </div>
    </article>
  );
}
