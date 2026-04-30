import React from "react";
import { motion } from "framer-motion";
import { ENTER_EASE } from "@/constants/TRANSITIONS";

interface Props {
   controls?: any;
}
export default function MouseIcon({ controls }: Props) {
   const mouseVariants: any = {
      initial: { y: "-100%" },
      animate: { y: "0%", transition: ENTER_EASE },
   };

   return (
      <div className="overflow-hidden w-min">
         <motion.div
            variants={mouseVariants}
            initial="initial"
            animate={controls || "animate"}
            className="w-7 h-12 pt-3 rounded-xl flex flex-col items-center border-2 border-gray-200"
         >
            <div className="w-1 h-4 rounded-full animate-bounce bg-gray-200" />
         </motion.div>
      </div>
   );
}
