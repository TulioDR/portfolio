import ProjectType from "@/types/ProjectType";
import ProjectCardBody from "@/app/(main)/projects/_components/ProjectCardBody";
import useProjectTooltip from "@/app/(main)/projects/_hooks/useProjectTooltip";
import ProjectTooltip from "@/app/(main)/projects/_components/ProjectTooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
import FrontImage from "./FrontImage";
import FrontParallaxContainer from "./FrontParallaxContainer";
import { motion } from "framer-motion";

type Props = {
   project: ProjectType;
   isSelected: boolean;
   setOpenedLink: React.Dispatch<React.SetStateAction<string | null>>;
   handleHoveredTitle: (
      latest: number,
      entryThreshold: number,
      exitThreshold: number,
   ) => void;
};

export default function CardFront({
   project,
   isSelected,
   setOpenedLink,
   handleHoveredTitle,
}: Props) {
   const { getMousePosition, mouseX, mouseY, endHover, isHovered } =
      useProjectTooltip();

   const [isClickable, setIsClickable] = useState<boolean>(false);
   useEffect(() => {
      if (!isSelected) {
         setIsClickable(false);
         return;
      }
      const timer = setTimeout(() => setIsClickable(true), 500);
      return () => clearTimeout(timer);
   }, [isSelected]);

   const handleLinkClick = () => {
      setOpenedLink(project.link);
   };

   const [scaleImage, setScaleImage] = useState<boolean>(false);

   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.8 }}
         transition={{ duration: 0.2 }}
         className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
      >
         <ProjectTooltip
            showTooltip={isSelected && isHovered}
            mouseX={mouseX}
            mouseY={mouseY}
         />
         <FrontParallaxContainer
            handleHoveredTitle={handleHoveredTitle}
            setScaleImage={setScaleImage}
         >
            <Link
               href={`/projects/${project.link}`}
               onClick={handleLinkClick}
               onPointerMove={getMousePosition}
               onPointerEnter={getMousePosition}
               onPointerLeave={endHover}
               className={`w-full h-full relative ${isClickable ? "" : "pointer-events-none"}`}
            >
               <FrontImage isHovered={scaleImage} project={project} />
               <div className="w-full absolute top-full left-0">
                  <ProjectCardBody project={project} initial whiteLine />
               </div>
            </Link>
         </FrontParallaxContainer>
      </motion.div>
   );
}
