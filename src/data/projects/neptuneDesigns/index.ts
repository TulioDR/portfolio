import ProjectModel from "@/models/ProjectModel";
import bootstrapSiteEnglish from "./translations/english";
import bootstrapSiteSpanish from "./translations/spanish";

import landingImg from "./img/neptune-designs-landing.png";
import showcaseImg from "./img/neptune-designs-showcase.jpg";

const neptuneDesigns: ProjectModel = {
   title: "Neptune Designs",
   showcaseImg: showcaseImg,
   landingImg: landingImg,
   link: "neptune-designs",
   website: "https://neptune-desings.netlify.app/",
   repository: "https://github.com/TulioDR/neptune-designs",
   technologies: [],
   isFinished: false,
   translations: {
      english: bootstrapSiteEnglish,
      spanish: bootstrapSiteSpanish,
   },
};

export default neptuneDesigns;
