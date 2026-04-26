import React from "react";
import { motion, MotionValue } from "framer-motion";

type Props = {
   children: React.ReactNode;
   className?: string;
   x?: MotionValue<string>;
};

export default function InnerContainer({ children, className = "", x }: Props) {
   const GAP = 40;
   return (
      <motion.div
         style={{
            x,
            gap: GAP,
            paddingLeft: GAP / 2,
            paddingRight: GAP / 2,
         }}
         className={`min-w-max h-full flex items-center ${className}`}
      >
         {children}
      </motion.div>
   );
}
