import ProjectType from "@/types/ProjectType";
import { motion, useAnimate, useMotionValue } from "framer-motion";
import ProjectCardBody from "@/app/(main)/projects/_components/ProjectCardBody";
import useProjectTooltip from "@/app/(main)/projects/_hooks/useProjectTooltip";
import ProjectTooltip from "@/app/(main)/projects/_components/ProjectTooltip";
import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { ENTER_EASE, EXIT_EASE } from "@/constants/TRANSITIONS";
import BackImage from "./BackImage";
import FrontImage from "./FrontImage";
import Link from "next/link";

type Props = {
   project: ProjectType;
   isLeft: boolean;
   isSelected: boolean;
};

export default function GridProjectCard({
   project,
   isLeft,
   isSelected,
}: Props) {
   const { getMousePosition, mouseX, mouseY, endHover, isHovered } =
      useProjectTooltip();

   const lenis = useLenis();
   const [scope, animate] = useAnimate();

   useEffect(() => {
      if (!isSelected) return;
      if (!scope.current) return;
      if (!lenis) return;

      const DURATION = 1;
      const viewportHeight = window.innerHeight;
      const elementHeight = scope.current.offsetHeight;
      const centerOffset = -(viewportHeight / 2) + elementHeight / 2;
      lenis.scrollTo(scope.current, {
         offset: centerOffset,
         duration: DURATION,
      });
   }, [isSelected]);

   useEffect(() => {
      if (isSelected) {
         animate(
            scope.current,
            { width: "100vw", height: "100svh", x: isLeft ? 96 : -96 },
            EXIT_EASE,
         );
      } else {
         animate(
            scope.current,
            { width: "100%", height: "100%", x: 0 },
            ENTER_EASE,
         );
      }
   }, [isSelected]);

   const INITIAL_Z_INDEX = 0;
   const FINAL_Z_INDEX = 10;

   const zIndex = useMotionValue<number>(INITIAL_Z_INDEX);
   useEffect(() => {
      const controls = animate(
         zIndex,
         isSelected ? FINAL_Z_INDEX : INITIAL_Z_INDEX,
         isSelected ? ENTER_EASE : EXIT_EASE,
      );
      return () => controls.stop();
   }, [isSelected]);

   return (
      <>
         <Link
            href={`/projects/${project.link}`}
            onPointerEnter={getMousePosition}
            onPointerMove={getMousePosition}
            onPointerLeave={endHover}
            className="w-full flex flex-col"
         >
            <ProjectTooltip
               showTooltip={isHovered && !isSelected}
               mouseX={mouseX}
               mouseY={mouseY}
            />
            <div className="w-full aspect-square relative">
               <motion.div
                  style={{ zIndex }}
                  className={`absolute inset-0 flex items-center ${isLeft ? "justify-end" : "justify-start"}`}
               >
                  <motion.div
                     ref={scope}
                     initial={{ width: "100%", height: "100%" }}
                     className="shrink-0 overflow-hidden flex justify-center"
                  >
                     <motion.div
                        initial={{ width: 0, height: "100%" }}
                        animate={{ width: "100%", transition: ENTER_EASE }}
                        exit={{ width: 0, transition: EXIT_EASE }}
                        className="w-full h-full flex justify-center"
                     >
                        <div className="w-full h-full relative border border-line">
                           <BackImage project={project} />
                           <FrontImage
                              project={project}
                              isHovered={isHovered}
                              isSelected={isSelected}
                           />
                        </div>
                     </motion.div>
                  </motion.div>
               </motion.div>
            </div>
            <ProjectCardBody project={project} />
         </Link>
      </>
   );
}
