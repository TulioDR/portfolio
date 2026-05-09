import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import VelocityMeter from "../VelocityMeter";
import useSmoothMotion from "@/hooks/useSmoothMotion";
import { ALL_SKILLS } from "@/app/skills/_constants/SKILLS";
import SkillCard from "@/app/skills/_components/SkillsSection/SkillsSlider/Slides/CardContent/SkillSlide/SkillCard";

type Props = {};

export default function Desktop({}: Props) {
   const containerRef = useRef<HTMLDivElement>(null);
   const sliderRef = useRef<HTMLDivElement>(null);

   const x = useMotionValue(0);

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current!.getBoundingClientRect();
      const mouseX =
         container.width * -0.15 + (e.clientX - container.left) * 1.3;

      const containerWidth = container.width;
      const percentage = mouseX / containerWidth;

      let newPercentage = percentage;
      if (percentage < 0) newPercentage = 0;
      if (percentage > 1) newPercentage = 1;

      x.set((sliderRef.current!.scrollWidth - containerWidth) * -newPercentage);
   };

   const { smoothMotion } = useSmoothMotion(x);

   const handleMouseLeave = () => {
      x.set(0);
   };

   return (
      <div
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         className="w-full h-full p-4 relative"
      >
         <div ref={containerRef} className="w-full h-full">
            <motion.div
               ref={sliderRef}
               style={{ x: smoothMotion }}
               className="min-w-max h-full flex gap-1 xl:gap-5"
            >
               {ALL_SKILLS.map((skill) => (
                  <SkillCard
                     key={skill.name}
                     skill={skill}
                     disableHover
                     bigText
                  />
               ))}
            </motion.div>
         </div>
         <VelocityMeter motionValue={smoothMotion} />
      </div>
   );
}
