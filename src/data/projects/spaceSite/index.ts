import spaceSiteEnglish from "./translations/english";
import spaceSiteSpanish from "./translations/spanish";

import showcaseImg from "./img/main/space-site.jpg";
import ProjectType from "@/types/ProjectType";

const spaceSite: ProjectType = {
   title: "Abeona",
   showcaseImg: showcaseImg,
   link: "space-site",
   website: "#",
   repository: "#",
   techStack: [],
   isFinished: false,
   translations: {
      english: spaceSiteEnglish,
      spanish: spaceSiteSpanish,
   },
};

export default spaceSite;
