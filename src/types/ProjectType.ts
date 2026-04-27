import { StaticImageData } from "next/image";
import { TechnologyType } from "./TechnologyType";

export default interface ProjectType {
   title: string;
   landingImg?: StaticImageData;
   showcaseImg: StaticImageData;
   link: string;
   website: string;
   repository: string;
   techStack: TechnologyType[];
   isFinished: boolean;
   translations: {
      english: ProjectTranslations;
      spanish: ProjectTranslations;
   };
}

export interface ProjectTranslations {
   description: string;
   role: string;
   date: string;
   overview: string;
   features: {
      name: string;
      description: string;
      img: StaticImageData;
   }[];
}
