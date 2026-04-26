import ProjectModel from "@/models/ProjectModel";
import spaceSiteEnglish from "../spaceSite/translations/english";
import spaceSiteSpanish from "../spaceSite/translations/spanish";

import landingImg from "./img/old-portfolio.png";

const oldPortfolio: ProjectModel = {
   title: "Old Portfolio",
   landingImg: landingImg,
   showcaseImg: landingImg,
   link: "old-portfolio",
   website: "#",
   repository: "#",
   technologies: [],
   isFinished: false,
   translations: {
      english: spaceSiteEnglish,
      spanish: spaceSiteSpanish,
   },
};

export default oldPortfolio;
