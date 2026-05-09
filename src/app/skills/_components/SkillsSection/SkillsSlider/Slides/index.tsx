import React from "react";
import AboutCard from "../../../AboutCard";
import { SkillSlideType } from "@/app/skills/_types/SkillType";
import CardContent from "./CardContent";

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
            <CardContent
               activeIndex={activeIndex}
               setActiveIndex={setActiveIndex}
               SKILL_SLIDES={SKILL_SLIDES}
            />
         }
         screenOnly
      />
   );
}
