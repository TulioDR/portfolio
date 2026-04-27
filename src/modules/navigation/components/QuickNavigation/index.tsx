import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import NavMenuSlider from "./NavMenuSlider";
import NavMenuItems from "./NavMenuItems";

type Props = {};

export default function QuickNavigation({}: Props) {
   const { mouseX, mouseY, getMousePosition, mouseContainerRef } =
      useMousePosition();

   const [xAxis, setXAxis] = useState<number | null>(null);
   const [yAxis, setYAxis] = useState<number | null>(null);

   const isXAxis = xAxis || xAxis === 0;
   const isYAxis = yAxis || yAxis === 0;

   return (
      <div className="w-full h-full bg-black/90 backdrop-blur p-8">
         <div className="w-full flex items-center h-full border-y border-line">
            <div className="h-full w-16 border-x border-line"></div>
            <motion.div
               onMouseMove={getMousePosition}
               ref={mouseContainerRef}
               className="flex flex-1 relative px-8"
            >
               <AnimatePresence>
                  {isXAxis && isYAxis && (
                     <NavMenuSlider
                        mouseX={mouseX}
                        mouseY={mouseY}
                        xAxis={xAxis}
                        yAxis={yAxis}
                     />
                  )}
               </AnimatePresence>
               <NavMenuItems setXAxis={setXAxis} setYAxis={setYAxis} />
            </motion.div>
            <div className="h-full w-16 border-x border-line"></div>
         </div>
      </div>
   );
}
