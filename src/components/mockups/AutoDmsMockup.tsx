import { Car, FileText, HandCoins, LayoutDashboard, Plus, Receipt, Users } from "lucide-react";
import AutoDmsKpis from "./AutoDmsKpis";
import WindowFrame from "./WindowFrame";

const nav = [
  { icon: LayoutDashboard, label: "Tableau de bord" },
  { icon: Car, label: "Stock", active: true },
  { icon: HandCoins, label: "Arbouns" },
  { icon: Receipt, label: "Ventes" },
  { icon: Users, label: "Clients" },
  { icon: FileText, label: "Documents" },
];

const statusStyles = {
  Disponible: "bg-emerald-50 text-emerald-700",
  Réservé: "bg-amber-50 text-amber-700",
  "En arrivage": "bg-sky-50 text-sky-700",
  Vendu: "bg-zinc-100 text-zinc-600",
} as const;

const vehicles: { model: string; year: number; price: string; status: keyof typeof statusStyles }[] = [
  { model: "Hyundai Tucson 2.0 CRDi", year: 2024, price: "6 450 000", status: "Disponible" },
  { model: "Renault Clio 5 Evolution", year: 2025, price: "3 290 000", status: "Réservé" },
  { model: "Toyota Hilux 2.4 D-4D", year: 2023, price: "7 800 000", status: "Disponible" },
  { model: "Chery Tiggo 4 Pro", year: 2025, price: "3 950 000", status: "En arrivage" },
  { model: "Peugeot 208 Allure", year: 2022, price: "3 100 000", status: "Vendu" },
];

export default function AutoDmsMockup() {
  return (
    <WindowFrame title="AutoDMS — Showroom Démo">
      <div className="@container">
        <div className="flex text-[11px] text-ink @2xl:text-xs">
          <aside className="hidden w-40 shrink-0 flex-col gap-0.5 border-r border-line bg-paper p-3 @2xl:flex">
            {nav.map(({ icon: Icon, label, active }) => (
              <span
                key={label}
                className={`flex items-center gap-2 rounded-md px-2.5 py-2 ${
                  active ? "bg-surface font-medium text-ink shadow-sm ring-1 ring-line" : "text-ink-3"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            ))}
          </aside>

          <div className="min-w-0 flex-1 p-4 @2xl:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold @2xl:text-base">Stock véhicules</p>
                <p className="text-ink-3">Mis à jour il y a 2 min</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-md bg-ink px-2.5 py-1.5 font-medium text-white">
                <Plus className="h-3 w-3" />
                <span className="hidden @md:inline">Nouveau véhicule</span>
              </span>
            </div>

            <AutoDmsKpis />

            <div className="mt-4 overflow-hidden rounded-lg border border-line">
              <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-line bg-paper px-3 py-2 text-ink-3 @md:grid-cols-[1fr_3rem_6.5rem_5.5rem]">
                <span>Véhicule</span>
                <span className="hidden @md:block">Année</span>
                <span className="text-right">Prix (DA)</span>
                <span>Statut</span>
              </div>
              {vehicles.map((v) => (
                <div
                  key={v.model}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-line px-3 py-2 last:border-b-0 @md:grid-cols-[1fr_3rem_6.5rem_5.5rem]"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span className="hidden h-6 w-8 shrink-0 items-center justify-center rounded bg-sunken @md:flex">
                      <Car className="h-3.5 w-3.5 text-ink-3" />
                    </span>
                    <span className="truncate font-medium">{v.model}</span>
                  </span>
                  <span className="hidden text-ink-2 @md:block">{v.year}</span>
                  <span className="text-right font-mono tabular-nums text-ink-2">{v.price}</span>
                  <span className={`justify-self-start rounded-full px-2 py-0.5 text-[10px] font-medium ${statusStyles[v.status]}`}>
                    {v.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
