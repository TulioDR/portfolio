import React from "react";
import { motion } from "framer-motion";

type Props = {
   isHovered: boolean;
};

export default function CORE({ isHovered }: Props) {
   return (
      <motion.div
         className={`aspect-square w-full overflow-hidden rounded-md bg-primary border-text border-2 p-4 lg:p-1 xl:p-4 2xl:p-6 relative duration-300
            ${isHovered ? "delay-300" : "brightness-75"}   
         `}
      >
         <div className="w-full h-full flex items-center justify-center bg-text rounded-md">
            <span className="material-symbols-outlined text-accent !text-8xl sm:!text-8xl md:!text-9xl lg:!text-7xl xl:!text-8xl 2xl:!text-[9rem]">
               network_intelligence
            </span>
         </div>
      </motion.div>
   );
}
