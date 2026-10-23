import { Headset, Languages, MapPin, WifiOff } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { key: "bilingual", icon: Languages },
  { key: "formats", icon: MapPin },
  { key: "offline", icon: WifiOff },
  { key: "people", icon: Headset },
] as const;

export default function MadeForAlgeria() {
  const t = useTranslations("Local");

  return (
    <section aria-labelledby="local-title" className="bg-ink py-24 text-white sm:py-28">
      <Container>
        <SectionHeading id="local-title" tone="dark" eyebrow={t("eyebrow")} title={t("title")} />
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map(({ key, icon: Icon }) => (
            <li key={key} className="border-t border-white/15 pt-6">
              <Icon className="h-6 w-6 text-emerald-300" />
              <h3 className="mt-4 text-lg font-semibold">{t(`items.${key}.title`)}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{t(`items.${key}.text`)}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
