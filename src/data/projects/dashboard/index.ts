import ProjectModel from "@/models/ProjectModel";
import dashboardTech from "./technologies";
import dashboardEnglish from "./translations/english";
import dashboardSpanish from "./translations/spanish";

import landingImg from "./img/dashboard-landing.png";
import showcaseImg from "./img/dashboard-showcase.png";

const dashboard: ProjectModel = {
   title: "Admin Dashboard",
   showcaseImg: showcaseImg,
   landingImg: landingImg,
   link: "dashboard",
   website: "https://admin-dashboard-concept.netlify.app/",
   repository: "https://github.com/TulioDR/dashboard-syncfusion-concept",
   technologies: dashboardTech,
   isFinished: true,
   translations: {
      english: dashboardEnglish,
      spanish: dashboardSpanish,
   },
};

export default dashboard;
