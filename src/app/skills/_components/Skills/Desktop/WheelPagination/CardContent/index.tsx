import { useEffect, useState } from "react";
import CircleSlice from "./CircleSlice";
import AnimatedText from "@/components/AnimatedText";
import useSkillsPagination from "@/app/skills/hooks/useSkillsPagination";

type Props = {
   activeIndex: number;
};

export default function CardContent({ activeIndex }: Props) {
   const [restart, setRestart] = useState(false);

   useEffect(() => {
      setRestart((prev) => !prev);
   }, [activeIndex]);

   const { SKILL_PAGINATION } = useSkillsPagination();
   const currentText = SKILL_PAGINATION[activeIndex].description;
   return (
      <div className="w-full h-full relative flex">
         <AnimatedText
            restart={restart}
            className="text-white z-10 p-4"
            text={currentText}
         />

         <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2 grid-rows-2 opacity-30 p-4 gap-4">
            {Array.from({ length: SKILL_PAGINATION.length }).map((_, index) => (
               <CircleSlice
                  key={index}
                  index={index}
                  isSelected={activeIndex === index}
               />
            ))}
         </div>
      </div>
   );
}
