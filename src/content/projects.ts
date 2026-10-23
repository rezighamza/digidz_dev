import type { ComponentType } from "react";
import { Car, Stethoscope, type LucideIcon } from "lucide-react";
import AutoDmsMockup from "@/components/mockups/AutoDmsMockup";
import ClinicOsMockup from "@/components/mockups/ClinicOsMockup";
import { clinicChat, showroomChat, type ChatMessage } from "@/components/mockups/PhoneMockup";

export const projectSlugs = ["autodms", "clinicos"] as const;
export type ProjectSlug = (typeof projectSlugs)[number];

// Copy lives in messages/*.json under Projects.<slug>; these keys must exist for every project.
export const highlightKeys = ["h1", "h2", "h3", "h4"] as const;
export const moduleKeys = ["m1", "m2", "m3", "m4", "m5", "m6"] as const;

export const projects: Record<
  ProjectSlug,
  { icon: LucideIcon; Mockup: ComponentType; chat: { contact: string; messages: ChatMessage[] } }
> = {
  autodms: {
    icon: Car,
    Mockup: AutoDmsMockup,
    chat: { contact: "Showroom Démo", messages: showroomChat },
  },
  clinicos: {
    icon: Stethoscope,
    Mockup: ClinicOsMockup,
    chat: { contact: "Cabinet Dr. Haddad", messages: clinicChat },
  },
};

export function isProjectSlug(value: string): value is ProjectSlug {
  return (projectSlugs as readonly string[]).includes(value);
}
