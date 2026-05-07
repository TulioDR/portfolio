import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectType from "@/types/ProjectType";
import ProjectCardBody from "@/app/projects/_components/ProjectCardBody";
import PanelBackImg from "./PanelBackImg";
import PanelTitle from "./PanelTitle";
import PanelBackground from "./PanelBackground";
import PanelTop from "./PanelTop";

type Props = {
   project: ProjectType;
   isOpen: boolean;
   openProject: () => void;
   closeProject: () => void;
   number: number;
};

export default function ProjectPanel({
   project,
   openProject,
   closeProject,
   isOpen,
   number,
}: Props) {
   const [showContent, setShowContent] = useState(false);

   useEffect(() => {
      if (!isOpen) setShowContent(false);
   }, [isOpen]);

   const onAnimationComplete = () => {
      if (isOpen) setShowContent(true);
   };

   return (
      <motion.div
         onHoverStart={openProject}
         onHoverEnd={closeProject}
         onClick={openProject}
         animate={{ flex: isOpen ? 3 : 1 }}
         transition={{ duration: 0.2 }}
         onAnimationComplete={onAnimationComplete}
         className="flex h-full relative overflow-hidden"
      >
         <PanelBackground isHovered={isOpen} />

         <PanelTop number={number} isOpen={isOpen} />

         {showContent && (
            <motion.div className="absolute inset-0 flex items-end p-4 lg:p-8 z-10">
               <ProjectCardBody initial project={project} />
            </motion.div>
         )}

         <PanelTitle isHovered={isOpen} title={project.title} />

         <PanelBackImg
            src={project.showcaseImg}
            alt={project.link}
            isHovered={isOpen}
         />
      </motion.div>
   );
}
