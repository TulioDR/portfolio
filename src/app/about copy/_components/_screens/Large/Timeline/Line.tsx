import React from "react";
import { motion, MotionValue } from "framer-motion";

type Props = {
   lineRef: React.MutableRefObject<null>;
   width: MotionValue<string>;
};

export default function Line({ lineRef, width }: Props) {
   return (
      <div className="absolute inset-0 flex items-center pointer-events-none">
         <div ref={lineRef} className="h-px w-full">
            <motion.div style={{ width }} className="h-full bg-accent" />
         </div>
      </div>
   );
}
