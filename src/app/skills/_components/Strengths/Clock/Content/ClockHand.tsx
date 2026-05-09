import React from "react";
import { AnimationControls, motion } from "framer-motion";

type Props = {
   minute?: true;
   animationControls: AnimationControls;
};

export default function ClockHand({ minute, animationControls }: Props) {
   return (
      <div className="absolute top-0 left-0 w-full h-1/2 flex items-end justify-center">
         <motion.div
            animate={animationControls}
            className={`w-1 bg-black origin-bottom ${
               minute ? "h-4/5" : "h-1/2"
            } `}
         />
      </div>
   );
}
