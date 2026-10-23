import { Database, LayoutDashboard, MessageCircle, MonitorSmartphone, Printer, WifiOff } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const items = [
  { key: "systems", icon: LayoutDashboard },
  { key: "desktop", icon: WifiOff },
  { key: "webmobile", icon: MonitorSmartphone },
  { key: "whatsapp", icon: MessageCircle },
  { key: "documents", icon: Printer },
  { key: "migration", icon: Database },
] as const;

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="services-title" eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

        <Reveal className="mt-14">
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {items.map(({ key, icon: Icon }) => (
              <li key={key} className="bg-paper p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{t(`items.${key}.title`)}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{t(`items.${key}.text`)}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
