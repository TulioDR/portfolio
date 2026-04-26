import ProjectModel from "@/models/ProjectModel";
import filmOrganizerTech from "./technologies";
import filmOrganizerEnglish from "./translations/english";
import filmOrganizerSpanish from "./translations/spanish";

import showcaseImg from "./img/film-organizer-showcase.jpg";
import landingImg from "./img/film-organizer-landing.png";

const filmOrganizer: ProjectModel = {
   title: "Film Organizer",
   showcaseImg: showcaseImg,
   landingImg: landingImg,
   link: "film-organizer",
   website: "https://film-organizer.vercel.app/",
   repository: "https://github.com/TulioDR/film-organizer-v2/",
   technologies: filmOrganizerTech,
   isFinished: true,
   translations: {
      english: filmOrganizerEnglish,
      spanish: filmOrganizerSpanish,
   },
};

export default filmOrganizer;
