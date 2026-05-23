import { SkillSlideType } from "@/app/(main)/skills/_types/SkillType";
import AboutCard from "../../../AboutCard";
import CardContent from "./CardContent";

type Props = {
   activeIndex: number;
   handleNavigation: (nextIndex: number) => void;
   SKILL_SLIDES: SkillSlideType[];
   isForward: boolean;
};

export default function SlidesHandler({
   activeIndex,
   handleNavigation,
   SKILL_SLIDES,
   isForward,
}: Props) {
   return (
      <AboutCard
         screenOnly
         content={
            <CardContent
               activeIndex={activeIndex}
               handleNavigation={handleNavigation}
               SKILL_SLIDES={SKILL_SLIDES}
               isForward={isForward}
            />
         }
      />
   );
}
