import { SkillSlideType } from "@/app/skills/_types/SkillType";
import PaginationButton from "./PaginationButton";

type Props = {
   activeIndex: number;
   handleNavigation: (nextIndex: number) => void;
   SKILL_SLIDES: SkillSlideType[];
};

export default function SkillsPagination({
   activeIndex,
   handleNavigation,
   SKILL_SLIDES,
}: Props) {
   return (
      <div className="h-full w-full flex divide-black divide-x">
         {SKILL_SLIDES.map(({ name }, index) => (
            <PaginationButton
               key={index}
               name={name}
               onClick={() => handleNavigation(index)}
               isActive={activeIndex === index}
            />
         ))}
      </div>
   );
}
