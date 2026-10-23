import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export const alt = "Digi-DZ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Prerender one image per locale at build time instead of drawing it on every request.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // The default OG font has no Arabic glyphs, so the Arabic card uses the French tagline.
  const textLocale = hasLocale(routing.locales, locale) && locale !== "ar" ? locale : "fr";
  const t = await getTranslations({ locale: textLocale, namespace: "Meta" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f7f6f2",
          color: "#14161a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="76" height="76" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="#14161a" />
            <path d="M9 8.5h6.25a7.5 7.5 0 0 1 0 15H9z" fill="#f7f6f2" />
            <circle cx="24.25" cy="21" r="2.5" fill="#2bb673" />
          </svg>
          <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>Digi-DZ</span>
        </div>

        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }}>
          {t("ogTagline")}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#464b54" }}>
          <span style={{ display: "flex", padding: "10px 22px", borderRadius: 999, background: "#e2f1ea", color: "#0d7354" }}>
            AutoDMS
          </span>
          <span style={{ display: "flex", padding: "10px 22px", borderRadius: 999, background: "#e2f1ea", color: "#0d7354" }}>
            ClinicOS
          </span>
          <span style={{ display: "flex", marginLeft: 8 }}>Web · Desktop · Mobile · WhatsApp</span>
        </div>
      </div>
    ),
    size,
  );
}
