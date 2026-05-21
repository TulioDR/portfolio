import { useState } from "react";

import Slides from "./Slides";
import useSkillsSlides from "@/app/skills/_hooks/useSkillsSlides";
import SlidesHandler from "./SlidesHandler";

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
      <div className="flex flex-col lg:flex-row w-full lg:h-160 xl:h-150 gap-4">
         <div className="flex-2 overflow-hidden h-full ">
            <SlidesHandler
               activeIndex={activeIndex}
               handleNavigation={handleNavigation}
               SKILL_SLIDES={SKILL_SLIDES}
               isForward={isForward}
            />
         </div>
         <div className="flex-5 overflow-hidden lg:h-full ">
            <Slides
               SKILL_SLIDES={SKILL_SLIDES}
               activeIndex={activeIndex}
               setActiveIndex={setActiveIndex}
            />
         </div>
      </div>
   );
}
