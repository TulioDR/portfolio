import { SkillSlideType } from "@/app/skills/_types/SkillType";
import AboutCard from "../../../AboutCard";
import CardContent from "./CardContent";

type Props = {
   activeIndex: number;
   handleNavigation: (nextIndex: number) => void;
   SKILL_SLIDES: SkillSlideType[];
};

export default function Pagination({
   activeIndex,
   handleNavigation,
   SKILL_SLIDES,
}: Props) {
   return (
      <AboutCard
         content={
            <CardContent
               activeIndex={activeIndex}
               handleNavigation={handleNavigation}
               SKILL_SLIDES={SKILL_SLIDES}
            />
         }
         screenOnly
      />
   );
}
