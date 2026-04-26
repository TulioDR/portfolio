import { AnimatePresence, MotionValue, motion, useSpring } from "framer-motion";
import React, { useRef, useState } from "react";

type Props = {
   showTooltip: boolean;
   x: MotionValue<number>;
   y: MotionValue<number>;
   dark?: true;
   text: string;
};

export default function ViewPageTooltip({
   x,
   y,
   showTooltip,
   dark,
   text,
}: Props) {
   const duration = 0.3;

   const innerRef = useRef<HTMLDivElement>(null);

   const [width, setWidth] = useState<number>(0);
   const onAnimationComplete = (definition: any) => {
      if (definition.scale !== 1) return;
      const { width } = innerRef.current!.getBoundingClientRect();
      setWidth(width);
   };

   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothX = useSpring(x, smoothOptions);
   const smoothY = useSpring(y, smoothOptions);

   const HEIGHT = 28;

   return (
      <AnimatePresence>
         {showTooltip && (
            <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1, transition: { duration } }}
               exit={{ scale: 0, transition: { duration, delay: duration } }}
               onAnimationComplete={onAnimationComplete}
               style={{
                  top: smoothY,
                  left: smoothX,
                  height: HEIGHT,
                  y: "-50%",
                  x: -HEIGHT / 2,
               }}
               className={`absolute p-1 z-40 rounded-full pointer-events-none flex items-center ${
                  dark ? "bg-primary text-white" : "bg-white text-black"
               }`}
            >
               <div className="aspect-square bg-accent rounded-full h-full" />
               <motion.div
                  layout
                  initial={{ width: 0 }}
                  animate={{ width, transition: { duration, delay: duration } }}
                  exit={{ width: 0, transition: { duration } }}
                  className="text-sm overflow-hidden"
               >
                  <div
                     ref={innerRef}
                     className="px-2 min-w-max flex items-center"
                  >
                     {text}
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
