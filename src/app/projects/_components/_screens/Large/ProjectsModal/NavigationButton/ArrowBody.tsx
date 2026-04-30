import React from "react";
import { motion } from "framer-motion";

type Props = {
   left?: true;
   disabled: boolean;
   children: React.ReactNode;
   setShowArrowHead: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ArrowBody({
   children,
   left,
   disabled,
   setShowArrowHead,
}: Props) {
   const DURATION = 1 / 2;
   const transition = { duration: DURATION };

   const handleAnimationComplete = (e: any) => {
      if (e.width === "100%") setShowArrowHead(true);
   };
   const handleAnimationStart = (e: any) => {
      if (e.width === 0) setShowArrowHead(false);
   };

   return (
      <div className={`w-20 flex ${left ? "justify-end" : ""}`}>
         <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%", transition: transition }}
            exit={{ width: 0, transition: transition }}
            onAnimationStart={handleAnimationStart}
            onAnimationComplete={handleAnimationComplete}
            className={`h-0.5 relative flex items-center
               ${left ? "" : " justify-end"}
               ${disabled ? "bg-gray-400" : "bg-white"}
            `}
         >
            {children}
         </motion.div>
      </div>
   );
}
