import ProjectModel from "@/models/ProjectModel";
import dashboard from "./dashboard";
import filmOrganizer from "./filmOrganizer";
import oldPortfolio from "./oldPortfolio";
import pokedex from "./pokedex";
import nftSite from "./nftSite";
import neptuneDesigns from "./neptuneDesigns";
import spaceSite from "./spaceSite";

const selectedProjects = [filmOrganizer, pokedex, dashboard];
export { selectedProjects };

const projects: ProjectModel[] = [
   filmOrganizer,
   pokedex,
   dashboard,
   oldPortfolio,
   nftSite,
   neptuneDesigns,
   spaceSite,
];
export default projects;
