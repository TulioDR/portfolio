import { SkillSlideType } from "@/app/skills/_types/SkillType";
import AboutCard from "../../../AboutCard";
import CardContent from "./CardContent";

type Props = {
   activeIndex: number;
   isForward: boolean;
   SKILL_SLIDES: SkillSlideType[];
};

export default function TrianglePagination({
   activeIndex,
   isForward,
   SKILL_SLIDES,
}: Props) {
   return (
      <div className="row-span-2 aspect-square hidden lg:block">
         <AboutCard
            content={
               <CardContent
                  SKILL_SLIDES={SKILL_SLIDES}
                  activeIndex={activeIndex}
                  isForward={isForward}
               />
            }
            squareScreen
            screenOnly
         />
      </div>
   );
}
