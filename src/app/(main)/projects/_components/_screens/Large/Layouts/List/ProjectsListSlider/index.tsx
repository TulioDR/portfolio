import projects from "@/data/projects";
import { MotionValue, motion } from "framer-motion";
import ProjectListSlide from "./ProjectListSlide";
import { NAV_TRANSITION } from "@/modules/navigation/constants/NAV_TRANSITION";
import { useEffect, useState } from "react";
import HoverPreviewContainer from "./HoverPreviewContainer";

type Props = {
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   yIndex: number | null;
   selectedIndex: number | null;
};

export default function ProjectsListSlider({
   mouseX,
   mouseY,
   yIndex,
   selectedIndex,
}: Props) {
   const [newY, setNewY] = useState<string>("0%");
   useEffect(() => {
      const newYIndex = selectedIndex === null ? yIndex : selectedIndex;
      if (newYIndex === null) return;
      setNewY(`${newYIndex * -100}%`);
   }, [selectedIndex, yIndex]);

   return (
      <HoverPreviewContainer
         mouseX={mouseX}
         mouseY={mouseY}
         selectedIndex={selectedIndex}
      >
         <motion.div
            initial={false}
            animate={{ y: newY }}
            transition={NAV_TRANSITION}
            className="relative w-full h-full"
         >
            {projects.map((project, index) => (
               <ProjectListSlide
                  key={project.title}
                  project={project}
                  index={index}
                  isSelected={selectedIndex !== null}
               />
            ))}
         </motion.div>
      </HoverPreviewContainer>
   );

   // return (
   //    <SliderContainer smoothX={smoothX} smoothY={smoothY} y={y}>
   //       {projects.map((project) => (
   //          <ProjectListSlide key={project.title} project={project} />
   //       ))}
   //    </SliderContainer>
   // );
}
