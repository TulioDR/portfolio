import React, { useState } from "react";
import SkillsPagination from "../SkillsPagination";
import SkillsSlides from "../SkillsSlides";

type Props = {};

export default function CardContent({}: Props) {
   const [activeIndex, setActiveIndex] = useState<number>(0);

   return (
      <div className="flex flex-col">
         <div className="w-full h-40">
            <SkillsPagination
               activeIndex={activeIndex}
               setActiveIndex={setActiveIndex}
            />
         </div>
         <SkillsSlides
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
         />
      </div>
   );
}
