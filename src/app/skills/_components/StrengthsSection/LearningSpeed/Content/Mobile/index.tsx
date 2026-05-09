import { useRef } from "react";
import { useScroll } from "framer-motion";
import VelocityMeter from "../VelocityMeter";
import useSmoothMotion from "@/hooks/useSmoothMotion";
import { ALL_SKILLS } from "@/app/skills/_constants/SKILLS";
import SkillCard from "@/app/skills/_components/SkillsSection/SkillsSlider/Slides/CardContent/SkillSlide/SkillCard";

type Props = {};

export default function Mobile({}: Props) {
   const containerRef = useRef(null);
   const { scrollX } = useScroll({ container: containerRef });

   const { smoothMotion } = useSmoothMotion(scrollX);

   return (
      <div className="w-full h-full relative">
         <div
            ref={containerRef}
            className="w-full h-full p-5 flex gap-1 overflow-x-auto"
         >
            {ALL_SKILLS.map((skill) => (
               <SkillCard key={skill.name} skill={skill} bigText disableHover />
            ))}
         </div>
         <VelocityMeter motionValue={smoothMotion} />
      </div>
   );
}
