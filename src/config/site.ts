export const site = {
  name: "Digi-DZ",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://digi-dz.store",
  whatsappNumber: "213554624911",
  phone: "+213554624911",
  phoneDisplay: "+213 554 62 49 11",
  email: "contact@digi-dz.store",
} as const;

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function mailtoUrl(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
