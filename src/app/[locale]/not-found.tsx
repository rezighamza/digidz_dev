import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import { buttonClass } from "@/components/ui/buttons";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <Container className="flex min-h-[70dvh] flex-col items-start justify-center pt-24 pb-16">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">{t("title")}</h1>
      <p className="mt-3 text-lg text-ink-2">{t("text")}</p>
      <Link href="/" className={buttonClass("primary", { className: "mt-8" })}>
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
        {t("back")}
      </Link>
    </Container>
  );
}
