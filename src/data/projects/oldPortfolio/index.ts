import ProjectType from "@/types/ProjectType";
import spaceSiteEnglish from "../spaceSite/translations/english";
import spaceSiteSpanish from "../spaceSite/translations/spanish";

import landingImg from "./img/main/old-portfolio.png";

const oldPortfolio: ProjectType = {
   title: "Old Portfolio",
   landingImg: landingImg,
   showcaseImg: landingImg,
   link: "old-portfolio",
   website: "#",
   repository: "#",
   techStack: [],
   isFinished: false,
   translations: {
      english: spaceSiteEnglish,
      spanish: spaceSiteSpanish,
   },
};

export default oldPortfolio;
