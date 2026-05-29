import React from "react";
import { motion } from "framer-motion";
import { MAIN_EASING } from "@/constants/TRANSITIONS";

type Props = {
   left?: true;
   children: React.ReactNode;
   setShowArrowHead: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ArrowBody({ children, left, setShowArrowHead }: Props) {
   const DURATION = 1 / 2;
   const transition = { duration: DURATION, ease: MAIN_EASING };

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
            className={`h-0.5 relative flex items-center bg-white
               ${left ? "" : " justify-end"}
               
            `}
         >
            {children}
         </motion.div>
      </div>
   );
}
