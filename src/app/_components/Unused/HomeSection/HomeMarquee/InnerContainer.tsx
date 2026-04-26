import React from "react";
import { motion, MotionValue } from "framer-motion";

type Props = {
   children: React.ReactNode;
   className?: string;
   x?: MotionValue<string>;
   GAP: number;
};

export default function InnerContainer({
   children,
   className = "",
   x,
   GAP,
}: Props) {
   return (
      <motion.div
         style={{
            x,
            gap: GAP,
            paddingLeft: GAP / 2,
            paddingRight: GAP / 2,
         }}
         className={`h-full flex ${className}`}
      >
         {children}
      </motion.div>
   );
}
