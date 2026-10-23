"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import { buttonClass } from "@/components/ui/buttons";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

const sections = ["work", "services", "process", "faq"] as const;

export default function SiteHeader() {
  const t = useTranslations("Nav");
  const tCommon = useTranslations("Common");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Hash links point at the home page so they also work from case-study pages.
  const sectionHref = (id: string) => `/${locale}#${id}`;
  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open ? "border-line bg-paper/90 backdrop-blur-md" : "border-transparent bg-paper/0"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Digi-DZ" onClick={close} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 text-[15px] text-ink-2 md:flex">
          {sections.map((id) => (
            <NextLink key={id} href={sectionHref(id)} className="transition-colors hover:text-ink">
              {t(id)}
            </NextLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:flex" />
          <div className="hidden sm:block">
            <NextLink href={sectionHref("contact")} className={buttonClass("primary", { size: "sm" })}>
              {tCommon("requestDemo")}
            </NextLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? tCommon("closeMenu") : tCommon("openMenu")}
            className="-me-2 flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-sunken md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {[...sections, "contact" as const].map((id) => (
              <NextLink
                key={id}
                href={sectionHref(id)}
                onClick={close}
                className="rounded-xl px-3 py-3 text-lg font-medium text-ink hover:bg-sunken"
              >
                {t(id)}
              </NextLink>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-4">
              <LanguageSwitcher className="flex" />
              <NextLink href={sectionHref("contact")} onClick={close} className={buttonClass("primary", { size: "sm" })}>
                {tCommon("requestDemo")}
              </NextLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
