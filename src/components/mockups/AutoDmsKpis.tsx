"use client";

import { useEffect, useState } from "react";
import LiveNumber, { formatInt } from "./LiveNumber";

const formatDa = (n: number) => `${formatInt(n)} DA`;
const formatMillions = (n: number) => `${(n / 1e6).toFixed(1).replace(".", ",")} M DA`;
const between = (min: number, max: number) => min + Math.round((Math.random() * (max - min)) / 10_000) * 10_000;

const initial = {
  stock: 42,
  stockValue: 168_400_000,
  deposits: 3,
  depositAmount: 1_250_000,
  sales: 7,
  margin: 2_100_000,
};

/** Simulates showroom activity (sales, arrivals, new deposits) so the preview feels live. */
export default function AutoDmsKpis() {
  const [kpi, setKpi] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      if (document.hidden) return;
      setKpi((k) => {
        const roll = Math.random();
        if (k.stock > 36 && roll < 0.55) {
          const price = between(3_000_000, 7_500_000);
          const fromDeposit = k.deposits > 1 && Math.random() < 0.4;
          return {
            ...k,
            stock: k.stock - 1,
            stockValue: k.stockValue - price,
            sales: k.sales + 1,
            margin: k.margin + between(180_000, 450_000),
            deposits: fromDeposit ? k.deposits - 1 : k.deposits,
            depositAmount: fromDeposit ? Math.max(0, k.depositAmount - between(300_000, 500_000)) : k.depositAmount,
          };
        }
        if (roll < 0.8 || k.deposits >= 6) {
          return { ...k, stock: k.stock + 1, stockValue: k.stockValue + between(3_000_000, 7_500_000) };
        }
        return { ...k, deposits: k.deposits + 1, depositAmount: k.depositAmount + between(300_000, 600_000) };
      });
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const cards = [
    { label: "En stock", value: kpi.stock, sub: <LiveNumber value={kpi.stockValue} format={(n) => `Valeur ${formatMillions(n)}`} /> },
    { label: "Arbouns en cours", value: kpi.deposits, sub: <LiveNumber value={kpi.depositAmount} format={formatDa} /> },
    { label: "Ventes · octobre", value: kpi.sales, sub: <LiveNumber value={kpi.margin} format={(n) => `Marge ${formatMillions(n)}`} /> },
  ];

  return (
    <div className="mt-4 grid grid-cols-3 gap-2 @2xl:gap-3">
      {cards.map((c) => (
        <div key={c.label} className="rounded-lg border border-line bg-paper/60 p-2.5 @2xl:p-3">
          <p className="truncate text-ink-3">{c.label}</p>
          <p className="mt-0.5 text-lg font-semibold @2xl:text-xl">
            <LiveNumber value={c.value} />
          </p>
          <p className="hidden truncate text-ink-3 @md:block">{c.sub}</p>
        </div>
      ))}
    </div>
  );
}
