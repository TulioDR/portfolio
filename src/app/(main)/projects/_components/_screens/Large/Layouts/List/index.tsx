import PROJECTS from "@/data/projects";
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
   const [selectedLink, setSelectedLink] = useState<string | null>(null);

   useEffect(() => {
      const projectLink = params.project as string;
      const exists = PROJECTS.some((p) => p.link === projectLink);
      setSelectedLink(exists ? projectLink : null);
   }, [params.project, PROJECTS]);

   const handlePointerLeave = () => {
      // Do not change to null to maintain the slider open
      if (selectedLink) return;
      changeYAxisIndex(null);
   };

   useEffect(() => {
      if (selectedLink) return;
      changeYAxisIndex(null);
   }, [selectedLink]);

   useEffect(() => {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
   }, [selectedLink]);

   const getPositionIfNeeded = (e: React.MouseEvent<HTMLDivElement>) => {
      if (selectedLink) return;
      getMousePosition(e);
   };

   return (
      <ProjectsReactLenis scrollRef={scrollRef}>
         <div className="h-screen w-full pointer-events-none"></div>
         <div className="w-full flex flex-col -mt-36 min-h-max px-24 z-10 pb-4">
            <ListHeader />
            <motion.div
               onPointerEnter={getPositionIfNeeded}
               onPointerMove={getPositionIfNeeded}
               onPointerLeave={handlePointerLeave}
               exit={{ pointerEvents: "none" }}
               className={`w-full flex flex-col ${selectedLink ? "pointer-events-none" : ""}`}
            >
               {PROJECTS.map((project, index) => (
                  <ListProjectCard
                     key={project.title}
                     project={project}
                     onClick={() => setSelectedLink(project.link)}
                     onHover={() => changeYAxisIndex(index)}
                  />
               ))}
            </motion.div>
         </div>
         <AnimatePresence>
            {(yIndex !== null || selectedLink) && (
               <ProjectsListSlider
                  mouseX={mouseX}
                  mouseY={mouseY}
                  yIndex={yIndex}
                  selectedLink={selectedLink}
               />
            )}
         </AnimatePresence>
         <ProjectTooltip
            mouseX={mouseX}
            mouseY={mouseY}
            showTooltip={!selectedLink && yIndex !== null}
         />
      </ProjectsReactLenis>
   );
}
