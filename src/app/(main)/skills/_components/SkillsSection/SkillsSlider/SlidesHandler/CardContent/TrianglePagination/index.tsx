import { SkillSlideType } from "@/app/(main)/skills/_types/SkillType";
import TriangleSide from "./TriangleSide";

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
      <div className="h-[75%] aspect-square flex items-end translate-y-[-15%]">
         <div className="w-full h-4 2xl:h-8 z-10 px-2 2xl:px-4">
            <div className="w-full h-full relative">
               {Array.from({ length: SKILL_SLIDES.length }).map((_, index) => (
                  <TriangleSide
                     key={index}
                     index={index}
                     isForward={isForward}
                     isSelected={index === activeIndex}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
