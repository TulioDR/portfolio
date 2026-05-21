import ProjectsReactLenis from "@/app/projects/_components/ProjectsReactLenis";
import projects from "@/data/projects";
import ListProjectCard from "./ListProjectCard";
import { MotionValue } from "framer-motion";
import useProjectsLenisScroll from "@/app/projects/_hooks/useProjectsLenisScroll";
import ListHeader from "./ListHeader";
import ProjectsListSlider from "./ProjectsListSlider";
import { motion } from "framer-motion";
import useHoverPreview from "@/modules/hoverPreview/hooks/useHoverPreview";
import ProjectTooltip from "@/app/projects/_components/ProjectTooltip";

type Props = {
   currentScroll: MotionValue<number>;
};

export default function List({ currentScroll }: Props) {
   const { scrollRef } = useProjectsLenisScroll(currentScroll);

   const { getMousePosition, yAxisIndex, changeYAxisIndex, mouseX, mouseY } =
      useHoverPreview();

   return (
      <ProjectsReactLenis scrollRef={scrollRef}>
         <div className="h-screen w-full pointer-events-none"></div>
         <div className="w-full flex flex-col -mt-28 min-h-max px-32 z-10 pb-8">
            <ListHeader />
            <motion.div
               onMouseMove={getMousePosition}
               onHoverEnd={() => changeYAxisIndex(null)}
               exit={{ pointerEvents: "none" }}
               className="w-full flex flex-col"
            >
               {projects.map((project, index) => (
                  <ListProjectCard
                     key={project.title}
                     project={project}
                     onHover={() => changeYAxisIndex(index)}
                  />
               ))}
            </motion.div>
         </div>
         <ProjectsListSlider
            mouseX={mouseX}
            mouseY={mouseY}
            yAxisIndex={yAxisIndex}
         />
         <ProjectTooltip
            mouseX={mouseX}
            mouseY={mouseY}
            showTooltip={yAxisIndex !== null}
         />
      </ProjectsReactLenis>
   );
}
