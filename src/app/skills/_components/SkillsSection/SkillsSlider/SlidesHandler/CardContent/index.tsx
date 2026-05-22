import { SkillSlideType } from "@/app/skills/_types/SkillType";
import TrianglePagination from "./TrianglePagination";
import AnimatedText from "@/components/AnimatedText";
import PaginationButton from "./PaginationButton";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   activeIndex: number;
   handleNavigation: (nextIndex: number) => void;
   SKILL_SLIDES: SkillSlideType[];
   isForward: boolean;
};

export default function CardContent({
   activeIndex,
   handleNavigation,
   SKILL_SLIDES,
   isForward,
}: Props) {
   const currentText = SKILL_SLIDES[activeIndex].description;

   const { language } = useLanguageContext();
   const { description } = language.skills.skills;

   return (
      <div className="w-full h-full bg-text flex flex-col p-4 gap-4">
         <div className="w-full flex gap-2">
            <div className="flex-1 hidden xl:flex aspect-square bg-black rounded-full overflow-hidden items-center justify-center">
               <TrianglePagination
                  activeIndex={activeIndex}
                  isForward={isForward}
                  SKILL_SLIDES={SKILL_SLIDES}
               />
            </div>
            <div className="flex lg:flex-col w-full xl:w-36 2xl:w-50 gap-1">
               {SKILL_SLIDES.map((slide, index) => (
                  <PaginationButton
                     isActive={activeIndex === index}
                     key={index}
                     slide={slide}
                     onClick={() => handleNavigation(index)}
                  />
               ))}
            </div>
         </div>
         <div className="text-black">
            <AnimatedText className="text-lg font-black" text={description} />
            <AnimatedText className="text-sm" text={currentText} />
         </div>
      </div>
   );
}
