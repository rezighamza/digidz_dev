import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { buttonClass } from "@/components/ui/buttons";
import { whatsappUrl } from "@/config/site";

export default function CtaBand({
  title,
  text,
  button,
  whatsappText,
}: {
  title?: string;
  text?: string;
  button?: string;
  whatsappText?: string;
}) {
  const t = useTranslations("Cta");
  const tCommon = useTranslations("Common");

  return (
    <div className="relative overflow-hidden rounded-3xl bg-accent px-8 py-12 text-white sm:px-12 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
      />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title ?? t("title")}</h2>
          <p className="mt-3 text-lg leading-relaxed text-white/80">{text ?? t("text")}</p>
        </div>
        <a
          href={whatsappUrl(whatsappText ?? tCommon("waDefault"))}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass("light", { className: "self-start lg:self-center" })}
        >
          <MessageCircle className="h-4 w-4 text-[#1faa55]" />
          {button ?? t("button")}
        </a>
      </div>
    </div>
  );
}
