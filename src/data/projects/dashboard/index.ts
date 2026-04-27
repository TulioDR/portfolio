import dashboardEnglish from "./translations/english";
import dashboardSpanish from "./translations/spanish";

import landingImg from "./img/main/dashboard-landing.png";
import showcaseImg from "./img/main/dashboard-showcase.png";
import ProjectType from "@/types/ProjectType";
import { ALL_TECH } from "@/data/technologies";

const {
   html,
   css,
   javascript,
   react,
   reactRouter,
   typescript,
   tailwind,
   syncfusion,
} = ALL_TECH;

const dashboard: ProjectType = {
   title: "Admin Dashboard",
   showcaseImg: showcaseImg,
   landingImg: landingImg,
   link: "dashboard",
   website: "https://admin-dashboard-concept.netlify.app/",
   repository: "https://github.com/TulioDR/dashboard-syncfusion-concept",
   techStack: [
      html,
      css,
      javascript,
      react,
      reactRouter,
      typescript,
      tailwind,
      syncfusion,
   ],
   isFinished: true,
   translations: {
      english: dashboardEnglish,
      spanish: dashboardSpanish,
   },
};

export default dashboard;
