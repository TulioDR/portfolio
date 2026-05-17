import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import ProjectType from "@/types/ProjectType";
import ProjectCardBody from "@/app/projects/_components/ProjectCardBody";
import PanelBackImg from "./PanelBackImg";
import AnimatedText from "@/components/AnimatedText";
import useProjectTooltip from "@/app/projects/_hooks/useProjectTooltip";
import ProjectTooltip from "@/app/projects/_components/ProjectTooltip";

type Props = {
   project: ProjectType;
   topLeft?: true;
   topRight?: true;
   bottomLeft?: true;
   bottomRight?: true;
};

export default function ProjectPanel({
   project,
   topLeft,
   topRight,
   bottomLeft,
   bottomRight,
}: Props) {
   const [isOpen, setIsOpen] = useState(false);
   const [showContent, setShowContent] = useState(false);
   const [showTitle, setShowTitle] = useState(false);

   const openProject = () => setIsOpen((prev) => !prev);

   const [scope, animate] = useAnimate();

   const ASPECT_RATIO = 16 / 9;
   const INITIAL_HEIGHT = 12;
   const INITIAL_WIDTH = INITIAL_HEIGHT * ASPECT_RATIO;

   useEffect(() => {
      let initialAnimation = null;

      if (topLeft) initialAnimation = { top: 0, left: 0 };
      if (topRight) initialAnimation = { top: 0, right: 0 };
      if (bottomLeft) initialAnimation = { bottom: 0, left: 0 };
      if (bottomRight) initialAnimation = { bottom: 0, right: 0 };

      let finalAnimation = null;
      if (topLeft) finalAnimation = { top: 32, left: 128 };
      if (topRight) finalAnimation = { top: 32, right: 128 };
      if (bottomLeft) finalAnimation = { bottom: 32, left: 128 };
      if (bottomRight) finalAnimation = { bottom: 32, right: 128 };

      const DURATION = 0.5;

      const animations = async () => {
         if (isOpen) {
            await animate(
               scope.current,
               {
                  height: "100%",
                  width: "100%",
                  zIndex: 10,
                  ...initialAnimation,
               },
               { duration: DURATION, ease: [0.22, 1, 0.36, 1] },
            );
            setShowContent(true);
         } else {
            setShowContent(false);
            await animate(
               scope.current,
               {
                  height: `${INITIAL_HEIGHT}rem`,
                  width: `${INITIAL_WIDTH}rem`,
                  ...finalAnimation,
               },
               { duration: DURATION, ease: [0.22, 1, 0.36, 1] },
            );
            animate(scope.current, { zIndex: 0 });
         }
      };
      animations();
   }, [isOpen, INITIAL_HEIGHT, INITIAL_WIDTH]);

   const { getMousePosition, mouseX, mouseY, endHover, isHovered } =
      useProjectTooltip();
   return (
      <motion.div ref={scope} onClick={openProject} className={`absolute`}>
         <div
            onPointerEnter={() => setShowTitle(true)}
            onPointerLeave={() => setShowTitle(false)}
            className={`w-full h-full overflow-hidden border border-line bg-black relative
               ${isOpen ? "" : "hover:border-white active:border-white"}
            `}
         >
            {showContent && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute z-20 inset-0 flex justify-center items-center"
               >
                  <div
                     onPointerMove={getMousePosition}
                     onPointerLeave={endHover}
                     className="h-[50vh] aspect-video relative"
                  >
                     <PanelBackImg
                        src={project.landingImg || project.showcaseImg}
                        alt={project.link}
                        isOpen={true}
                     />
                     <ProjectTooltip
                        showTooltip={isHovered}
                        mouseX={mouseX}
                        mouseY={mouseY}
                     />
                     <div className="absolute top-full w-full left-0">
                        <ProjectCardBody initial project={project} whiteLine />
                     </div>
                  </div>
               </motion.div>
            )}

            <div
               className={`z-10 absolute inset-0 bg-black/70 duration-200 ${isOpen ? "opacity-100" : "opacity-0"}`}
            />

            <PanelBackImg
               src={project.showcaseImg}
               alt={project.link}
               isOpen={isOpen}
            />
         </div>
         {showTitle && !isOpen && (
            <div className="absolute top-full left-0 w-full text-center">
               <AnimatedText initial text={project.title} />
            </div>
         )}
      </motion.div>
   );
}
