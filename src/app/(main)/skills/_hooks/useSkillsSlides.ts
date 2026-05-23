import useLanguageContext from "@/context/LanguageContext";
import { SkillSlideType } from "../_types/SkillType";
import {
   IN_PROGRESS_SKILLS,
   MAIN_SKILLS,
   SECONDARY_SKILLS,
} from "../_constants/SKILLS";

export default function useSkillsSlides() {
   const { language } = useLanguageContext();

   const { mainSkills, secondarySkills, inProgressSkills } =
      language.skills.skills.skillsPagination;

   const SKILL_SLIDES: SkillSlideType[] = [
      {
         name: mainSkills.name,
         description: mainSkills.description,
         skills: MAIN_SKILLS,
      },
      {
         name: secondarySkills.name,
         description: secondarySkills.description,
         skills: SECONDARY_SKILLS,
      },
      {
         name: inProgressSkills.name,
         description: inProgressSkills.description,
         skills: IN_PROGRESS_SKILLS,
      },
   ];

   return { SKILL_SLIDES };
}
