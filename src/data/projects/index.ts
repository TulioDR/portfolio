import dashboard from "./dashboard";
import filmOrganizer from "./filmOrganizer";
import oldPortfolio from "./oldPortfolio";
import pokedex from "./pokedex";
import nftSite from "./nftSite";
import neptuneDesigns from "./neptuneDesigns";
import spaceSite from "./spaceSite";
import ProjectType from "@/types/ProjectType";

export const SELECTED_PROJECTS = [filmOrganizer, pokedex, dashboard];

const PROJECTS: ProjectType[] = [
   filmOrganizer,
   pokedex,
   dashboard,
   oldPortfolio,
   nftSite,
   neptuneDesigns,
   spaceSite,
];
export default PROJECTS;
