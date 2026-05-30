import { StaticImageData } from "next/image";
import { TechnologyType } from "./TechnologyType";

export interface ProjectTechnologyType extends TechnologyType {
   special?: boolean;
}
export default interface ProjectType {
   title: string;
   landingImg?: StaticImageData;
   showcaseImg: StaticImageData;
   link: string;
   website: string;
   repository: string;
   isFinished: boolean;
   translations: {
      english: ProjectTranslations;
      spanish: ProjectTranslations;
   };
   techStack: ProjectTechnologyType[];
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
