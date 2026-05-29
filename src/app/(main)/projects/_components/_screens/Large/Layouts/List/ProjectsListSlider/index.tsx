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
   selectedLink: string | null;
};

export default function ProjectsListSlider({
   mouseX,
   mouseY,
   yIndex,
   selectedLink,
}: Props) {
   const [newY, setNewY] = useState<string>("0%");
   useEffect(() => {
      if (selectedLink) {
         const index = projects.findIndex((p) => p.link === selectedLink);
         setNewY(`${index * -100}%`);
         return;
      }
      if (yIndex === null) return;
      setNewY(`${yIndex * -100}%`);
   }, [selectedLink, yIndex]);

   return (
      <HoverPreviewContainer
         mouseX={mouseX}
         mouseY={mouseY}
         selectedLink={selectedLink}
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
                  showFrontImage={!selectedLink && yIndex !== null}
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
