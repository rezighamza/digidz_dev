import { CheckCheck, FileText } from "lucide-react";

export type ChatMessage = {
  from: "them" | "me";
  text?: string;
  file?: string;
  time: string;
};

/** A WhatsApp conversation as seen on the customer's phone. */
export default function PhoneMockup({ contact, messages }: { contact: string; messages: ChatMessage[] }) {
  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className="w-full overflow-hidden rounded-[2rem] border-[7px] border-ink bg-ink text-left shadow-[0_30px_60px_-20px_rgba(20,22,26,0.45)]"
    >
      <div className="flex items-center gap-2.5 bg-[#075e54] px-3.5 pb-2.5 pt-4 text-white">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-[11px] font-semibold">
          {contact.charAt(0)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[12px] font-semibold">{contact}</span>
          <span className="block text-[10px] text-white/70">en ligne</span>
        </span>
      </div>
      <div className="flex flex-col gap-1.5 bg-[#efeae2] px-2.5 py-3 text-[11px] leading-snug text-[#111b21]">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-lg px-2.5 py-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] ${
              m.from === "me" ? "self-end bg-[#d9fdd3]" : "self-start bg-white"
            }`}
          >
            {m.file && (
              <span className="mb-1 flex items-center gap-1.5 rounded-md bg-black/5 px-2 py-1.5 font-medium">
                <FileText className="h-3.5 w-3.5 text-[#e5544b]" />
                {m.file}
              </span>
            )}
            {m.text}
            <span className="ms-2 inline-flex translate-y-0.5 items-center gap-0.5 text-[9px] text-black/45">
              {m.time}
              {m.from === "me" && <CheckCheck className="h-3 w-3 text-[#53bdeb]" />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const showroomChat: ChatMessage[] = [
  { from: "me", text: "Salam, le Tucson est toujours dispo ?", time: "10:02" },
  { from: "them", text: "Oui ✅ Hyundai Tucson 2.0 CRDi 2024 — 6 450 000 DA. Voici la fiche :", time: "10:02" },
  { from: "them", file: "Fiche_Tucson_2024.pdf", time: "10:02" },
  { from: "me", text: "Parfait, je passe demain matin.", time: "10:05" },
];

export const clinicChat: ChatMessage[] = [
  {
    from: "them",
    text: "Bonjour Mme Belkacem, rappel de votre rendez-vous demain à 09:30. Répondez 1 pour confirmer, 2 pour reporter.",
    time: "18:00",
  },
  { from: "me", text: "1", time: "18:04" },
  { from: "them", text: "Merci, votre rendez-vous est confirmé ✅", time: "18:04" },
];
