import { useState } from "react";

import Pagination from "./Pagination";
import Slides from "./Slides";
import TrianglePagination from "./TrianglePagination";
import useSkillsSlides from "@/app/skills/hooks/useSkillsSlides";

type Props = {};

export default function SkillsSlider({}: Props) {
   const [activeIndex, setActiveIndex] = useState<number>(0);
   const [isForward, setIsForward] = useState<boolean>(true);

   const handleNavigation = (nextIndex: number) => {
      setActiveIndex(nextIndex);
      const totalSlides = 3;
      if (nextIndex === activeIndex) return;
      let forward = true;
      if (activeIndex === totalSlides - 1 && nextIndex === 0) {
         forward = true;
      } else if (activeIndex === 0 && nextIndex === totalSlides - 1) {
         forward = false;
      } else {
         forward = nextIndex > activeIndex;
      }
      setIsForward(forward);
   };

   const { SKILL_SLIDES } = useSkillsSlides();

   return (
      <div className="flex flex-col lg:flex-row w-full lg:h-main-height gap-4">
         <div className="h-32 lg:h-full grid lg:grid-rows-3 gap-4">
            <Pagination
               activeIndex={activeIndex}
               handleNavigation={handleNavigation}
               SKILL_SLIDES={SKILL_SLIDES}
            />
            <TrianglePagination
               PAGINATION_LENGTH={SKILL_SLIDES.length}
               activeIndex={activeIndex}
               isForward={isForward}
            />
         </div>
         <div className="flex-1 h-full overflow-hidden">
            <Slides
               SKILL_SLIDES={SKILL_SLIDES}
               activeIndex={activeIndex}
               setActiveIndex={setActiveIndex}
            />
         </div>
      </div>
   );
}
