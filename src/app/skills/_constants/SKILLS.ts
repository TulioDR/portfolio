import { ALL_TECH } from "@/data/technologies";
import { SkillType } from "../_types/SkillType";

export const MAIN_SKILLS = Object.values(ALL_TECH).filter(
   (t) => t.category === "main",
);
export const SECONDARY_SKILLS = Object.values(ALL_TECH).filter(
   (t) => t.category === "secondary",
);
export const IN_PROGRESS_SKILLS = Object.values(ALL_TECH).filter(
   (t) => t.category === "inProgress",
);

export const ALL_SKILLS: SkillType[] = [
   ...MAIN_SKILLS,
   ...SECONDARY_SKILLS,
   ...IN_PROGRESS_SKILLS,
];
