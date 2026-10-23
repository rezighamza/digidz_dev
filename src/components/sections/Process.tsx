import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "./CtaBand";

const steps = ["discovery", "prototype", "build", "launch"] as const;

export default function Process() {
  const t = useTranslations("Process");

  return (
    <section id="process" aria-labelledby="process-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading id="process-title" eyebrow={t("eyebrow")} title={t("title")} />

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((key, i) => (
            <Reveal as="li" key={key} className="border-t-2 border-ink pt-6">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold text-ink">{t(`steps.${key}.title`)}</h3>
              <p className="mt-2 leading-relaxed text-ink-2">{t(`steps.${key}.text`)}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20">
          <CtaBand />
        </div>
      </Container>
    </section>
  );
}
