import useSmoothMotion from "@/hooks/useSmoothMotion";
import { useMotionValue, useScroll, motion } from "framer-motion";
import { useRef, useState } from "react";
import VelocityMeter from "./VelocityMeter";
import SpeedCard from "./SpeedCard";
import { ALL_SKILLS } from "@/app/(main)/skills/_constants/SKILLS";

type Props = {};

export default function Content({}: Props) {
   const containerRef = useRef<HTMLDivElement>(null);
   const sliderRef = useRef<HTMLDivElement>(null);
   const { scrollX } = useScroll({ container: containerRef });

   const x = useMotionValue(0);
   const { smoothMotion: smoothMouse } = useSmoothMotion(x);
   const { smoothMotion: smoothScroll } = useSmoothMotion(scrollX);

   const [isMouse, setIsMouse] = useState<boolean>(true);

   const handleMouseMove = (e: React.PointerEvent<HTMLDivElement>) => {
      const nativeEvent = e.nativeEvent;
      if (nativeEvent.pointerType === "mouse") {
         setIsMouse(true);
      } else {
         setIsMouse(false);
         return;
      }

      const container = containerRef.current!.getBoundingClientRect();
      const relativeX = (e.clientX - container.left) / container.width;

      const padding = 0.1;
      const minBound = padding;
      const maxBound = 1 - padding;

      let percentage = (relativeX - minBound) / (maxBound - minBound);

      if (percentage < 0) percentage = 0;
      if (percentage > 1) percentage = 1;

      const scrollableWidth = sliderRef.current!.scrollWidth - container.width;
      x.set(scrollableWidth * -percentage);
   };

   const handleMouseLeave = (e: React.PointerEvent<HTMLDivElement>) => {
      const nativeEvent = e.nativeEvent;
      if (nativeEvent.pointerType === "mouse") {
         x.set(0);
      }
   };

   return (
      <div className="w-full h-full relative overflow-hidden bg-text">
         <motion.div
            onPointerMove={handleMouseMove}
            onPointerLeave={handleMouseLeave}
            ref={containerRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="w-full h-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
         >
            <motion.div
               ref={sliderRef}
               style={{ x: smoothMouse }}
               className="min-w-max h-full flex gap-1 xl:gap-4 p-4 overflow-hidden"
            >
               {ALL_SKILLS.map((skill) => (
                  <SpeedCard
                     key={skill.name}
                     logo={skill.logo}
                     name={skill.name}
                  />
               ))}
            </motion.div>
         </motion.div>
         {isMouse ? (
            <VelocityMeter key="mouse" motionValue={smoothMouse} />
         ) : (
            <VelocityMeter key="scroll" motionValue={smoothScroll} />
         )}
      </div>
   );
}
