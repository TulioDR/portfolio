import projects from "@/assets/projects";

export const TOTAL_DURATION = 1;

export const STAGGER_DURATION = 0.05;

export const ITEM_DURATION =
   TOTAL_DURATION / 2 - STAGGER_DURATION * (projects.length - 1);
