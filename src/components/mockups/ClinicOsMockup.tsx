import { CheckCheck, Printer, Send } from "lucide-react";
import ClinicPatientCount from "./ClinicPatientCount";
import WindowFrame from "./WindowFrame";

const statusStyles = {
  "En consultation": "bg-emerald-50 text-emerald-700",
  "En attente": "bg-amber-50 text-amber-700",
  "Confirmé WhatsApp": "bg-accent-soft text-accent",
  "Non confirmé": "bg-zinc-100 text-zinc-600",
} as const;

const queue: { time: string; name: string; reason: string; status: keyof typeof statusStyles }[] = [
  { time: "09:30", name: "Amina Belkacem", reason: "Contrôle", status: "En consultation" },
  { time: "10:00", name: "Karim Meziane", reason: "Première visite", status: "En attente" },
  { time: "10:30", name: "Yacine Toumi", reason: "Suivi tension", status: "Confirmé WhatsApp" },
  { time: "11:00", name: "Nour El Houda H.", reason: "Résultats bilan", status: "Confirmé WhatsApp" },
  { time: "11:30", name: "Sofiane Rahmani", reason: "Certificat", status: "Non confirmé" },
];

const prescription = [
  { drug: "Amoxicilline 1 g", dose: "1 comprimé matin et soir — 7 jours" },
  { drug: "Paracétamol 1 g", dose: "1 comprimé si douleur — max. 3 / jour" },
  { drug: "Oméprazole 20 mg", dose: "1 gélule le matin à jeun — 14 jours" },
];

export default function ClinicOsMockup() {
  return (
    <WindowFrame title="ClinicOS — Cabinet Dr. Haddad">
      <div className="@container">
        <div className="grid text-[11px] text-ink @2xl:grid-cols-[1.1fr_1fr] @2xl:text-xs">
          <div className="p-4 @2xl:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold @2xl:text-base">Salle d&apos;attente</p>
                <p className="text-ink-3">Jeudi 23 octobre</p>
              </div>
              <span className="rounded-full bg-paper px-2.5 py-1 text-ink-2 ring-1 ring-line">
                <ClinicPatientCount />
              </span>
            </div>

            <ul className="mt-4 space-y-1.5">
              {queue.map((p, i) => (
                <li
                  key={p.name}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    i === 0 ? "bg-paper ring-1 ring-line" : ""
                  }`}
                >
                  <span className="w-9 shrink-0 font-mono tabular-nums text-ink-3">{p.time}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{p.name}</span>
                    <span className="block truncate text-ink-3">{p.reason}</span>
                  </span>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${statusStyles[p.status]}`}
                  >
                    {p.status === "Confirmé WhatsApp" ? (
                      <CheckCheck className="h-3 w-3" />
                    ) : (
                      <span className="my-0.5 h-2 w-2 rounded-full bg-current @sm:hidden" />
                    )}
                    <span className="hidden @sm:inline">{p.status}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-l border-line bg-paper p-5 @2xl:block">
            <div className="rounded-lg border border-line bg-surface p-4 shadow-sm">
              <div className="flex items-start justify-between border-b border-line pb-3">
                <div>
                  <p className="font-semibold">Dr. S. Haddad</p>
                  <p className="text-ink-3">Médecine générale · Sétif</p>
                </div>
                <p className="font-mono text-ink-3">23/10/2026</p>
              </div>
              <p className="mt-3 text-center text-[13px] font-semibold tracking-wide">ORDONNANCE</p>
              <p className="mt-2 text-ink-2">
                Patient : <span className="font-medium text-ink">Amina Belkacem</span>, 34 ans
              </p>
              <ol className="mt-3 space-y-2.5">
                {prescription.map((r, i) => (
                  <li key={r.drug} className="flex gap-2">
                    <span className="font-mono text-ink-3">{i + 1}.</span>
                    <span>
                      <span className="block font-medium">{r.drug}</span>
                      <span className="block text-ink-3">{r.dose}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-ink px-3 py-2 font-medium text-white">
                <Printer className="h-3.5 w-3.5" /> Imprimer
              </span>
              <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-line bg-surface px-3 py-2 font-medium">
                <Send className="h-3.5 w-3.5" /> WhatsApp
              </span>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
