"use client";

import { useId, useRef, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { mailtoUrl, whatsappUrl } from "@/config/site";
import { buttonClass } from "@/components/ui/buttons";

const needs = ["autodms", "clinicos", "custom"] as const;
type Need = (typeof needs)[number];

const inputClass =
  "mt-2 block w-full rounded-xl border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-3/70 transition-colors focus:border-ink focus:outline-none focus:ring-4 focus:ring-ink/5";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const id = useId();
  const nameRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [need, setNeed] = useState<Need>("autodms");
  const [details, setDetails] = useState("");
  const [showError, setShowError] = useState(false);

  const needLabel = t(`form.needs.${need}`);

  const buildMessage = () => {
    const lines = [t("message.greeting"), "", t("message.intro", { need: needLabel })];
    if (name.trim()) lines.push(t("message.name", { value: name.trim() }));
    if (phone.trim()) lines.push(t("message.phone", { value: phone.trim() }));
    if (city.trim()) lines.push(t("message.city", { value: city.trim() }));
    if (details.trim()) lines.push("", t("message.details", { value: details.trim() }));
    return lines.join("\n");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setShowError(true);
      nameRef.current?.focus();
      return;
    }
    window.open(whatsappUrl(buildMessage()), "_blank", "noopener,noreferrer");
  };

  const optional = <span className="font-normal text-ink-3"> ({t("form.optional")})</span>;
  const nameInvalid = showError && !name.trim();

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-line bg-surface p-6 shadow-[0_20px_50px_-30px_rgba(20,22,26,0.25)] sm:p-8"
    >
      <fieldset>
        <legend className="text-sm font-medium text-ink">{t("form.need")}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {needs.map((key) => (
            <label
              key={key}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-line-strong px-3.5 py-3 text-sm text-ink-2 transition-colors has-checked:border-ink has-checked:bg-paper has-checked:text-ink has-focus-visible:ring-4 has-focus-visible:ring-accent/25"
            >
              <input
                type="radio"
                name="need"
                value={key}
                checked={need === key}
                onChange={() => setNeed(key)}
                className="h-4 w-4 shrink-0 accent-ink"
              />
              {t(`form.needs.${key}`)}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor={`${id}-name`} className="text-sm font-medium text-ink">
          {t("form.name")}
        </label>
        <input
          ref={nameRef}
          id={`${id}-name`}
          name="name"
          autoComplete="organization"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("form.namePlaceholder")}
          aria-invalid={nameInvalid}
          aria-describedby={nameInvalid ? `${id}-name-error` : undefined}
          className={`${inputClass} ${nameInvalid ? "border-red-600" : ""}`}
        />
        {nameInvalid && (
          <p id={`${id}-name-error`} className="mt-2 text-sm text-red-700">
            {t("form.nameError")}
          </p>
        )}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-phone`} className="text-sm font-medium text-ink">
            {t("form.phone")}
            {optional}
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t("form.phonePlaceholder")}
            className={`${inputClass} rtl:text-right`}
          />
        </div>
        <div>
          <label htmlFor={`${id}-city`} className="text-sm font-medium text-ink">
            {t("form.city")}
            {optional}
          </label>
          <input
            id={`${id}-city`}
            name="city"
            autoComplete="address-level2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={t("form.cityPlaceholder")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-details`} className="text-sm font-medium text-ink">
          {t("form.message")}
          {optional}
        </label>
        <textarea
          id={`${id}-details`}
          name="details"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder={t("form.messagePlaceholder")}
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className={buttonClass("primary")}>
          <MessageCircle className="h-4 w-4 text-wa" />
          {t("form.submit")}
        </button>
        <a
          href={mailtoUrl(t("message.subject", { need: needLabel }), buildMessage())}
          className={buttonClass("secondary")}
        >
          <Mail className="h-4 w-4" />
          {t("form.email")}
        </a>
      </div>
      <p className="mt-4 text-sm text-ink-3">{t("form.hint")}</p>
    </form>
  );
}
