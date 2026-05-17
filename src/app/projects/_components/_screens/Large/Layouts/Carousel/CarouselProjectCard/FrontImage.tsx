import { motion, useMotionValueEvent, useTransform } from "framer-motion";
import Image from "next/image";
import ProjectType from "@/types/ProjectType";
import { CARD_ASPECT_RATIO } from "@/app/projects/_constants/ASPECT_RATIO";
import useScrollParallaxImage from "@/app/projects/_hooks/useScrollParallaxImage";
import ProjectCardBody from "@/app/projects/_components/ProjectCardBody";
import useProjectTooltip from "@/app/projects/_hooks/useProjectTooltip";
import ProjectTooltip from "@/app/projects/_components/ProjectTooltip";
import TransitionLink from "@/modules/pageTransition/components/TransitionLink";

type Props = {
   project: ProjectType;
   isSelected: boolean;
   hoveredTitle: string | null;
   setHoveredTitle: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function FrontImage({
   project,
   isSelected,
   hoveredTitle,
   setHoveredTitle,
}: Props) {
   const { scrollXProgress, imgRef } = useScrollParallaxImage();

   const x = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

   useMotionValueEvent(scrollXProgress, "change", (latest) => {
      if (!imgRef.current) return;

      const cardWidth = imgRef.current.clientWidth;
      const viewportWidth = window.innerWidth;

      const totalDistance = viewportWidth + cardWidth;

      const halfCardPercent = cardWidth / 2 / totalDistance;

      const entryThreshold = 0.5 - halfCardPercent;
      const exitThreshold = 0.5 + halfCardPercent;

      if (latest >= entryThreshold && latest <= exitThreshold) {
         if (hoveredTitle !== project.title) setHoveredTitle(project.title);
      } else {
         if (hoveredTitle === project.title) setHoveredTitle(null);
      }
   });

   const { getMousePosition, mouseX, mouseY, endHover, isHovered } =
      useProjectTooltip();

   return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
         <div
            ref={imgRef}
            style={{ aspectRatio: CARD_ASPECT_RATIO }}
            className="h-[50vh] relative"
         >
            <ProjectTooltip
               showTooltip={isSelected && isHovered}
               mouseX={mouseX}
               mouseY={mouseY}
            />
            <motion.div
               style={{ right: x, x: x }}
               onPointerMove={getMousePosition}
               onPointerLeave={endHover}
               className={`absolute top-0 aspect-video h-full flex items-center justify-center`}
            >
               <TransitionLink
                  href={`/projects/${project.link}`}
                  className={`w-full h-full ${isSelected ? "" : "pointer-events-none"}`}
               >
                  <div className="w-full h-full overflow-hidden">
                     <motion.div
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full h-full"
                     >
                        <Image
                           alt={project.link}
                           src={project.landingImg || project.showcaseImg}
                           sizes="100%"
                           fill
                           priority
                           className="object-cover"
                        />
                     </motion.div>
                  </div>
                  <div className="w-full absolute top-full left-0">
                     <ProjectCardBody project={project} initial />
                  </div>
               </TransitionLink>
            </motion.div>
         </div>
      </div>
   );
}
