import bootstrapSiteEnglish from "./translations/english";
import bootstrapSiteSpanish from "./translations/spanish";

import landingImg from "./img/main/neptune-designs-landing.png";
import showcaseImg from "./img/main/neptune-designs-showcase.jpg";
import ProjectType from "@/types/ProjectType";

const neptuneDesigns: ProjectType = {
   title: "Neptune Designs",
   showcaseImg: showcaseImg,
   landingImg: landingImg,
   link: "neptune-designs",
   website: "https://neptune-desings.netlify.app/",
   repository: "https://github.com/TulioDR/neptune-designs",
   techStack: [],
   isFinished: false,
   translations: {
      english: bootstrapSiteEnglish,
      spanish: bootstrapSiteSpanish,
   },
};

export default neptuneDesigns;
