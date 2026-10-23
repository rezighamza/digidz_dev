import { ArrowDown, Check, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import { buttonClass } from "@/components/ui/buttons";
import AutoDmsMockup from "@/components/mockups/AutoDmsMockup";
import PhoneMockup, { showroomChat } from "@/components/mockups/PhoneMockup";
import { whatsappUrl } from "@/config/site";

const facts = ["platforms", "languages", "offline", "onsite"] as const;

export default function Hero() {
  const t = useTranslations("Hero");
  const tCommon = useTranslations("Common");

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[38rem] -z-10 h-[40rem] bg-[radial-gradient(60%_50%_at_50%_30%,rgba(13,115,84,0.10),transparent_70%)]"
      />
      <Container>
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("eyebrow")}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">{t("lead")}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className={buttonClass("primary")}>
              {t("ctaPrimary")}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl(tCommon("waDefault"))}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("secondary")}
            >
              <MessageCircle className="h-4 w-4 text-[#1faa55]" />
              {t("ctaSecondary")}
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-[15px] text-ink-2 min-[420px]:grid-cols-2 lg:flex lg:flex-wrap">
            {facts.map((key) => (
              <li key={key} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                {t(`facts.${key}`)}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto mt-16 max-w-5xl pb-20 sm:mt-20">
          <AutoDmsMockup />
          <div className="absolute bottom-6 end-3 hidden w-48 sm:block lg:-end-10 lg:w-56">
            <PhoneMockup contact="Showroom Démo" messages={showroomChat} />
          </div>
          <figcaption className="mt-5 text-sm text-ink-3">{tCommon("sampleData")}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
