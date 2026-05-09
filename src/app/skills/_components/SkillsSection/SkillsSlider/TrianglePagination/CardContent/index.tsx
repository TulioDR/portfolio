import AnimatedText from "@/components/AnimatedText";
import TriangleSide from "./TriangleSide";
import { SkillSlideType } from "@/app/skills/_types/SkillType";

type Props = {
   activeIndex: number;
   isForward: boolean;
   SKILL_SLIDES: SkillSlideType[];
};

export default function CardContent({
   activeIndex,
   isForward,
   SKILL_SLIDES,
}: Props) {
   const currentText = SKILL_SLIDES[activeIndex].description;
   return (
      <div className="w-full h-full p-4">
         <div className="w-full h-full relative">
            <AnimatedText
               className="text-white z-10 relative"
               text={currentText}
            />
            <div className="absolute inset-0 flex items-end -translate-y-tri-thickness brightness-25">
               <div className="w-full h-10 z-10 px-10 -translate-y-3">
                  <div className="w-full h-full relative">
                     {Array.from({ length: SKILL_SLIDES.length }).map(
                        (_, index) => (
                           <TriangleSide
                              key={index}
                              index={index}
                              isForward={isForward}
                              isSelected={index === activeIndex}
                           />
                        ),
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
