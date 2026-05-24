import ProjectCardBody from "@/app/(main)/projects/_components/ProjectCardBody";
import { SELECTED_PROJECTS } from "@/data/projects";
import { motion } from "framer-motion";
import ProjectTooltip from "@/app/(main)/projects/_components/ProjectTooltip";
import useProjectTooltip from "@/app/(main)/projects/_hooks/useProjectTooltip";
import SelectedProjectImage from "./SelectedProjectImage";
import Link from "next/link";

type Props = {
   currentIndex: number;
};

export default function SelectedProject({ currentIndex }: Props) {
   const project = SELECTED_PROJECTS[currentIndex];

   const { getMousePosition, mouseX, mouseY, endHover, isHovered } =
      useProjectTooltip();
   return (
      <Link
         onPointerMove={getMousePosition}
         onPointerLeave={endHover}
         href={`/projects/${project.link}`}
         className="w-full flex flex-col"
      >
         <ProjectTooltip
            showTooltip={isHovered}
            mouseX={mouseX}
            mouseY={mouseY}
         />
         <div className="w-full aspect-video overflow-hidden">
            <motion.div
               animate={{
                  x: `-${(currentIndex / SELECTED_PROJECTS.length) * 100}%`,
               }}
               transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
               className="h-full flex min-w-max"
            >
               {SELECTED_PROJECTS.map((pj) => (
                  <SelectedProjectImage
                     key={pj.title}
                     project={pj}
                     isHovered={isHovered}
                  />
               ))}
            </motion.div>
         </div>
         <ProjectCardBody initial project={project} />
      </Link>
   );
}
