import React from "react";
import { AnimationControls, MotionValue, motion } from "framer-motion";

type Props = {
   animationControls: AnimationControls;
   pathLength: MotionValue<number>;
};

export default function ClockPath({ animationControls, pathLength }: Props) {
   const strokeWidth = 8;
   return (
      <svg
         style={{ padding: strokeWidth / 2 }}
         className="w-full h-full -rotate-90 overflow-visible"
      >
         <motion.circle
            r="50%"
            cx="50%"
            cy="50%"
            className="stroke-accent fill-transparent"
            animate={animationControls}
            style={{ pathLength, strokeWidth }}
         />
      </svg>
   );
}
