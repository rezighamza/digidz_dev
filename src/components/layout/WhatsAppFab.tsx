"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/config/site";

/** Floating WhatsApp shortcut, shown once the visitor has scrolled past the hero. */
export default function WhatsAppFab() {
  const t = useTranslations("Common");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl(t("waDefault"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsappFab")}
      title={t("whatsappFab")}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={1.5} />
    </a>
  );
}
