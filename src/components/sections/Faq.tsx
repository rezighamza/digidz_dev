import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const items = ["time", "adapt", "offline", "data", "after", "where"] as const;

export default function Faq() {
  const t = useTranslations("Faq");

  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-line bg-surface py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading id="faq-title" eyebrow={t("eyebrow")} title={t("title")} className="lg:sticky lg:top-28 lg:self-start" />

        <div className="border-t border-line">
          {items.map((key) => (
            <details key={key} className="group border-b border-line">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-medium text-ink">
                {t(`items.${key}.q`)}
                <Plus className="h-5 w-5 shrink-0 text-ink-3 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="-mt-1 pb-6 pe-10 leading-relaxed text-ink-2">{t(`items.${key}.a`)}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
