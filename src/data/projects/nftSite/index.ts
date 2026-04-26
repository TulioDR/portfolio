import ProjectModel from "@/models/ProjectModel";
import nftSiteEnglish from "./translations/english";
import nftSiteSpanish from "./translations/spanish";

import showcaseImg from "./img/nft-site-showcase.jpg";

const nftSite: ProjectModel = {
   title: "NFT Site",
   showcaseImg: showcaseImg,
   link: "nft-site",
   website: "#",
   repository: "#",
   technologies: [],
   isFinished: false,
   translations: {
      english: nftSiteEnglish,
      spanish: nftSiteSpanish,
   },
};

export default nftSite;
