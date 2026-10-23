import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import MadeForAlgeria from "@/components/sections/MadeForAlgeria";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale as Locale); // validated by the layout

  return (
    <>
      <Hero />
      <Work />
      <Services />
      <MadeForAlgeria />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}
