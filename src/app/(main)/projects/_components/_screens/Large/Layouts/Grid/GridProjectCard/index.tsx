import ProjectType from "@/types/ProjectType";
import BackImage from "./BackImage";
import FrontImage from "./FrontImage";
import { motion } from "framer-motion";
import ProjectCardBody from "@/app/(main)/projects/_components/ProjectCardBody";
import useProjectTooltip from "@/app/(main)/projects/_hooks/useProjectTooltip";
import ProjectTooltip from "@/app/(main)/projects/_components/ProjectTooltip";
import TransitionLink from "@/modules/pageTransition/components/TransitionLink";
import { ENTER_EASE, EXIT_EASE } from "@/constants/TRANSITIONS";

type Props = {
   project: ProjectType;
};

export default function GridProjectCard({ project }: Props) {
   const { getMousePosition, mouseX, mouseY, endHover, isHovered } =
      useProjectTooltip();

   return (
      <TransitionLink
         href={`/projects/${project.link}`}
         onPointerMove={getMousePosition}
         onPointerLeave={endHover}
         className="w-full flex flex-col overflow-hidden"
      >
         <ProjectTooltip
            showTooltip={isHovered}
            mouseX={mouseX}
            mouseY={mouseY}
         />
         <div className="w-full aspect-square flex justify-center">
            <motion.div
               initial={{ width: 0 }}
               animate={{ width: "100%", transition: ENTER_EASE }}
               exit={{ width: 0, transition: EXIT_EASE }}
               className="h-full aspect-square flex justify-center overflow-hidden"
            >
               <div className="h-full aspect-square relative shrink-0 border border-line overflow-hidden">
                  <BackImage project={project} isHovered={isHovered} />
                  <FrontImage project={project} isHovered={isHovered} />
               </div>
            </motion.div>
         </div>
         <ProjectCardBody project={project} />
      </TransitionLink>
   );
}
