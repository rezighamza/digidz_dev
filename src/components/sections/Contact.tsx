import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { site, whatsappUrl } from "@/config/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  const t = useTranslations("Contact");
  const tCommon = useTranslations("Common");

  const channels = [
    {
      icon: MessageCircle,
      label: t("channels.whatsapp"),
      value: site.phoneDisplay,
      href: whatsappUrl(tCommon("waDefault")),
      external: true,
      ltr: true,
    },
    { icon: Phone, label: t("channels.phone"), value: site.phoneDisplay, href: `tel:${site.phone}`, ltr: true },
    { icon: Mail, label: t("channels.email"), value: site.email, href: `mailto:${site.email}`, ltr: true },
    { icon: MapPin, label: t("channels.area"), value: t("channels.areaValue") },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading id="contact-title" eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

          <dl className="mt-10 space-y-5">
            {channels.map(({ icon: Icon, label, value, href, external, ltr }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-accent ring-1 ring-line">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <dt className="text-sm text-ink-3">{label}</dt>
                  <dd className="text-[17px] font-medium text-ink">
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="underline-offset-4 hover:underline"
                        dir={ltr ? "ltr" : undefined}
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
