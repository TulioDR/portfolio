import React, { useState } from "react";
import Card from "./Card";
import { motion, useSpring } from "framer-motion";

import projects from "@/data/projects";
import Wand from "./Wand";
import useWandPosition from "@/app/skills/hooks/useWandPosition";

type Props = {};

export default function Content({}: Props) {
   const {
      mouseContainerRef,
      getMousePosition,
      setInitialPosition,
      xPercentage,
      wandX,
      wandY,
   } = useWandPosition();

   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothWandX = useSpring(wandX, smoothOptions);

   const [isHovered, setIsHovered] = useState(false);

   const handleMouseEnter = () => setIsHovered(true);
   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      getMousePosition(e);
   };
   const handleMouseLeave = () => {
      setIsHovered(false);
      setInitialPosition();
   };

   // const { isMobile } = useDeviceSizeContext();
   const isMobile = false;
   return (
      <motion.div
         ref={mouseContainerRef}
         onMouseEnter={handleMouseEnter}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         className="w-full h-full relative flex items-center justify-center px-10 bg-primary"
      >
         <Wand isOn={isHovered} xPercentage={xPercentage} x={wandX} y={wandY} />
         <Card
            tile1
            smoothWandX={smoothWandX}
            src={projects[0].showcaseImg}
            alt="1"
         />
         {!isMobile && (
            <>
               <Card
                  tile2
                  smoothWandX={smoothWandX}
                  src={projects[1].showcaseImg}
                  alt="2"
               />
               <Card
                  tile3
                  smoothWandX={smoothWandX}
                  src={projects[2].showcaseImg}
                  alt="3"
               />
            </>
         )}
      </motion.div>
   );
}
