"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { localeLabels, routing } from "@/i18n/routing";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const t = useTranslations("Common");
  const current = useLocale();
  const pathname = usePathname();

  return (
    <nav aria-label={t("language")} className={`items-center rounded-full border border-line bg-surface p-0.5 ${className}`}>
      {routing.locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            hrefLang={locale}
            lang={locale}
            aria-label={localeLabels[locale].long}
            aria-current={active ? "true" : undefined}
            className={`min-w-9 rounded-full px-2.5 py-1 text-center text-[13px] font-medium transition-colors ${
              active ? "bg-ink text-white" : "text-ink-2 hover:text-ink"
            }`}
          >
            {localeLabels[locale].short}
          </Link>
        );
      })}
    </nav>
  );
}
