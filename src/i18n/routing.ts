import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en", "ar"],
  // Most clients are Algerian businesses; the visitor's browser language still wins.
  defaultLocale: "fr",
});

export const localeLabels: Record<(typeof routing.locales)[number], { short: string; long: string }> = {
  fr: { short: "FR", long: "Français" },
  en: { short: "EN", long: "English" },
  ar: { short: "ع", long: "العربية" },
};
