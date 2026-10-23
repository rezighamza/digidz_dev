"use client";

import { useEffect, useState } from "react";
import LiveNumber from "./LiveNumber";

/** Today's patient count; a new booking arrives every few seconds. */
export default function ClinicPatientCount() {
  const [count, setCount] = useState(18);

  useEffect(() => {
    const id = setInterval(() => {
      if (!document.hidden) setCount((c) => (c < 32 ? c + 1 : c));
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <LiveNumber value={count} /> patients aujourd&apos;hui
    </>
  );
}
