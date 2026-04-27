import { StaticImageData } from "next/image";

export type TechCategoryType = "main" | "secondary" | "inProgress" | "other";

export interface TechnologyType {
   name: string;
   logo: StaticImageData | string;
   category: TechCategoryType;
   link: string;
}
export type TechRecordType = Record<string, TechnologyType>;
