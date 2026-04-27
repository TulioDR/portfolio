import nftSiteEnglish from "./translations/english";
import nftSiteSpanish from "./translations/spanish";

import showcaseImg from "./img/main/nft-site-showcase.jpg";
import ProjectType from "@/types/ProjectType";

const nftSite: ProjectType = {
   title: "NFT Site",
   showcaseImg: showcaseImg,
   link: "nft-site",
   website: "#",
   repository: "#",
   techStack: [],
   isFinished: false,
   translations: {
      english: nftSiteEnglish,
      spanish: nftSiteSpanish,
   },
};

export default nftSite;
