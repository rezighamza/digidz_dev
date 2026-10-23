import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import { projectSlugs } from "@/content/projects";
import { site, whatsappUrl } from "@/config/site";
import Logo from "./Logo";

export default function SiteFooter() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const tProjects = useTranslations("Projects");
  const tContact = useTranslations("Contact.channels");
  const tCommon = useTranslations("Common");
  const locale = useLocale();

  const linkClass = "text-ink-2 transition-colors hover:text-ink";

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-ink-2">{t("tagline")}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">{t("work")}</h2>
          <ul className="mt-4 space-y-3">
            {projectSlugs.map((slug) => (
              <li key={slug}>
                <Link href={`/work/${slug}`} className={linkClass}>
                  {tProjects(`${slug}.name`)} · {tProjects(`${slug}.sector`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">{t("studio")}</h2>
          <ul className="mt-4 space-y-3">
            {(["services", "process", "faq"] as const).map((id) => (
              <li key={id}>
                <NextLink href={`/${locale}#${id}`} className={linkClass}>
                  {tNav(id)}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">{t("contact")}</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={whatsappUrl(tCommon("waDefault"))} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {tContact("whatsapp")} · <span dir="ltr">{site.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-line py-6 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. {t("rights")}
        </p>
      </Container>
    </footer>
  );
}
