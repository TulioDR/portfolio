import ProjectModel from "@/models/ProjectModel";
import spaceSiteEnglish from "./translations/english";
import spaceSiteSpanish from "./translations/spanish";

import showcaseImg from "./img/space-site.jpg";

const spaceSite: ProjectModel = {
   title: "Abeona",
   showcaseImg: showcaseImg,
   link: "space-site",
   website: "#",
   repository: "#",
   technologies: [],
   isFinished: false,
   translations: {
      english: spaceSiteEnglish,
      spanish: spaceSiteSpanish,
   },
};

export default spaceSite;
