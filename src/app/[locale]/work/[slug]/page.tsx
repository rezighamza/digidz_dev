import type { Metadata } from "next";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { hasLocale, useTranslations, type Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/buttons";
import PhoneMockup from "@/components/mockups/PhoneMockup";
import CtaBand from "@/components/sections/CtaBand";
import { isProjectSlug, moduleKeys, projectSlugs, projects, type ProjectSlug } from "@/content/projects";
import { whatsappUrl } from "@/config/site";

type Params = Promise<{ locale: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale) || !isProjectSlug(slug)) return {};
  const t = await getTranslations({ locale, namespace: `Projects.${slug}` });
  const title = `${t("name")} — ${t("sector")}`;

  return {
    title,
    description: t("summary"),
    alternates: {
      canonical: `/${locale}/work/${slug}`,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}/work/${slug}`])),
    },
    openGraph: { title, description: t("summary"), url: `/${locale}/work/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isProjectSlug(slug)) notFound();
  setRequestLocale(locale as Locale); // validated by the layout

  return <CaseStudy slug={slug} locale={locale} />;
}

function CaseStudy({ slug, locale }: { slug: ProjectSlug; locale: string }) {
  const t = useTranslations(`Projects.${slug}`);
  const tCase = useTranslations("CaseStudy");
  const tCommon = useTranslations("Common");
  const tProjects = useTranslations("Projects");
  const tWork = useTranslations("Work");
  const { icon: Icon, Mockup, chat } = projects[slug];
  const other = projectSlugs.find((s) => s !== slug)!;
  const demoUrl = whatsappUrl(tCommon("waDemo", { product: t("name") }));

  return (
    <>
      <section className="pt-28 sm:pt-32">
        <Container>
          <NextLink
            href={`/${locale}#work`}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {tCase("back")}
          </NextLink>

          <div className="mt-8 max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-sm font-medium text-ink-2 ring-1 ring-line">
              <Icon className="h-4 w-4 text-accent" />
              {t("sector")}
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.03em] text-ink sm:text-6xl">{t("name")}</h1>
            <p className="mt-4 text-2xl leading-snug text-ink">{t("tagline")}</p>
            <p className="mt-5 text-lg leading-relaxed text-ink-2">{t("summary")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>
                <MessageCircle className="h-4 w-4 text-wa" />
                {tCommon("requestDemo")}
              </a>
              <NextLink href={`/${locale}#contact`} className={buttonClass("secondary")}>
                {tWork("custom.cta")}
              </NextLink>
            </div>
          </div>

          <figure className="relative mx-auto mt-14 max-w-5xl pb-16">
            <Mockup />
            <div className="absolute bottom-4 end-3 hidden w-48 sm:block lg:-end-10 lg:w-56">
              <PhoneMockup contact={chat.contact} messages={chat.messages} />
            </div>
            <figcaption className="mt-5 text-sm text-ink-3">{tCommon("sampleData")}</figcaption>
          </figure>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-sm font-medium text-accent">{tCase("problemTitle")}</h2>
            <p className="mt-4 text-xl leading-relaxed text-ink">{t("problem")}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-sm font-medium text-accent">{tCase("solutionTitle")}</h2>
            <p className="mt-4 text-xl leading-relaxed text-ink">{t("solution")}</p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">{tCase("modulesTitle")}</h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {moduleKeys.map((key, i) => (
              <li key={key} className="bg-paper p-7">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{t(`modules.${key}.title`)}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{t(`modules.${key}.text`)}</p>
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid gap-6 rounded-3xl border border-line bg-surface p-7 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-ink-3">{tCase("platformsTitle")}</dt>
              <dd className="mt-1 font-medium text-ink">{tCase("platforms")}</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-3">{tCase("languagesTitle")}</dt>
              <dd className="mt-1 font-medium text-ink">{tCase("languages")}</dd>
            </div>
          </dl>

          <div className="mt-16">
            <CtaBand
              title={tCase("ctaTitle", { product: t("name") })}
              text={tCase("ctaText")}
              button={tCommon("requestDemo")}
              whatsappText={tCommon("waDemo", { product: t("name") })}
            />
          </div>

          <Link
            href={`/work/${other}`}
            className="group mt-8 flex items-center justify-between gap-6 rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-ink sm:p-8"
          >
            <span>
              <span className="block text-sm text-ink-3">{tCase("otherWork")}</span>
              <span className="mt-1 block text-2xl font-semibold text-ink">
                {tProjects(`${other}.name`)} · {tProjects(`${other}.sector`)}
              </span>
              <span className="mt-1 block text-ink-2">{tProjects(`${other}.tagline`)}</span>
            </span>
            <ArrowRight className="h-6 w-6 shrink-0 text-ink-3 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
        </Container>
      </section>
    </>
  );
}
