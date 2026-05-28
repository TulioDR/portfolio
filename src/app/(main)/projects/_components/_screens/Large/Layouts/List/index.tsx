import projects from "@/data/projects";
import ListProjectCard from "./ListProjectCard";
import { AnimatePresence, MotionValue } from "framer-motion";
import ListHeader from "./ListHeader";
import ProjectsListSlider from "./ProjectsListSlider";
import { motion } from "framer-motion";
import useHoverPreview from "@/modules/hoverPreview/hooks/useHoverPreview";
import useProjectsLenisScroll from "@/app/(main)/projects/_hooks/useProjectsLenisScroll";
import ProjectsReactLenis from "../../../../ProjectsReactLenis";
import ProjectTooltip from "../../../../ProjectTooltip";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Props = {
   currentScroll: MotionValue<number>;
};

export default function List({ currentScroll }: Props) {
   const { scrollRef } = useProjectsLenisScroll(currentScroll);

   const { getMousePosition, yIndex, changeYAxisIndex, mouseX, mouseY } =
      useHoverPreview();

   const params = useParams();

   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
   useEffect(() => {
      const projectLink = params.project;
      const foundedIndex = projects.findIndex((p) => p.link === projectLink);

      if (foundedIndex >= 0) setSelectedIndex(foundedIndex);
      else setSelectedIndex(null);
   }, [params, projects, mouseY, mouseX]);

   const handlePointerLeave = () => {
      // Do not change to null to maintain the slider open
      if (selectedIndex !== null) return;
      changeYAxisIndex(null);
   };

   useEffect(() => {
      if (selectedIndex !== null) return;
      changeYAxisIndex(null);
   }, [selectedIndex]);

   return (
      <ProjectsReactLenis scrollRef={scrollRef}>
         <div className="h-screen w-full pointer-events-none"></div>
         <div className="w-full flex flex-col -mt-36 min-h-max px-24 z-10 pb-4">
            <ListHeader />
            <motion.div
               onPointerEnter={getMousePosition}
               onPointerMove={getMousePosition}
               onPointerLeave={handlePointerLeave}
               exit={{ pointerEvents: "none" }}
               className={`w-full flex flex-col ${selectedIndex !== null ? "pointer-events-none" : ""}`}
            >
               {projects.map((project, index) => (
                  <ListProjectCard
                     key={project.title}
                     project={project}
                     onClick={() => setSelectedIndex(index)}
                     onHover={() => changeYAxisIndex(index)}
                  />
               ))}
            </motion.div>
         </div>
         <AnimatePresence>
            {(yIndex !== null || selectedIndex !== null) && (
               <ProjectsListSlider
                  mouseX={mouseX}
                  mouseY={mouseY}
                  yIndex={yIndex}
                  selectedIndex={selectedIndex}
               />
            )}
         </AnimatePresence>
         <ProjectTooltip
            mouseX={mouseX}
            mouseY={mouseY}
            showTooltip={selectedIndex === null && yIndex !== null}
         />
      </ProjectsReactLenis>
   );
}
