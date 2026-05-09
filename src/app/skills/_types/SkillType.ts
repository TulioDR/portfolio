import { TechnologyType } from "@/types/TechnologyType";

export interface SkillType extends TechnologyType {}

export interface SkillSlideType {
   name: string;
   description: string;
   skills: SkillType[];
}
