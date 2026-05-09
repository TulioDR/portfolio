import React from "react";
import AboutCard from "../../../AboutCard";
import SkillsSlides from "../../SkillsSlides";
import { SkillSlideType } from "@/app/skills/_types/SkillType";

type Props = {
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
   SKILL_SLIDES: SkillSlideType[];
};

export default function Slides({
   activeIndex,
   setActiveIndex,
   SKILL_SLIDES,
}: Props) {
   return (
      <AboutCard
         content={
            <SkillsSlides
               activeIndex={activeIndex}
               setActiveIndex={setActiveIndex}
               SKILL_SLIDES={SKILL_SLIDES}
            />
         }
         screenOnly
      />
   );
}
