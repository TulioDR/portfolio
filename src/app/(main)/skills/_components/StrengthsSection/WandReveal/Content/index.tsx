import { useState } from "react";
import Card from "./Card";
import { motion, useSpring } from "framer-motion";

import projects from "@/data/projects";
import Wand from "./Wand";
import useWandPosition from "@/app/(main)/skills/_hooks/useWandPosition";

type Props = {};

export default function Content({}: Props) {
   const {
      mouseContainerRef,
      getPointerPosition,
      setInitialPosition,
      xPercentage,
      wandX,
      wandY,
   } = useWandPosition();

   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothWandX = useSpring(wandX, smoothOptions);
   const [isHovered, setIsHovered] = useState(false);

   const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === "mouse") {
         getPointerPosition(e);
      } else if (e.buttons > 0) {
         getPointerPosition(e);
      }
   };

   const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
      setIsHovered(true);
      getPointerPosition(e);
   };

   const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === "mouse") setIsHovered(true);
   };

   const handlePointerLeave = () => {
      setIsHovered(false);
      setInitialPosition();
   };

   return (
      <motion.div
         ref={mouseContainerRef}
         onPointerMove={handlePointerMove}
         onPointerEnter={handlePointerEnter}
         onPointerDown={handlePointerDown} // Crucial for "Grab" feel
         onPointerLeave={handlePointerLeave}
         onPointerUp={handlePointerLeave} // Reset when finger lifts
         className="w-full h-full relative flex items-center justify-center px-4 py-4 lg:px-10 bg-primary"
      >
         <Wand isOn={isHovered} xPercentage={xPercentage} x={wandX} y={wandY} />
         <Card tile1 smoothWandX={smoothWandX} project={projects[0]} />
         <Card tile2 smoothWandX={smoothWandX} project={projects[1]} />
         <Card tile3 smoothWandX={smoothWandX} project={projects[2]} />
      </motion.div>
   );
}
