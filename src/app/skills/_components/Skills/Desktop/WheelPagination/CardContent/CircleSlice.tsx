import React from "react";
import { motion } from "framer-motion";

type Props = {
   index: number;
   isSelected: boolean;
};

export default function CircleSlice({ index, isSelected }: Props) {
   return (
      <motion.div className="w-full h-full bg-primary">
         <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
            <div
               className={`absolute w-[calc(200%+16px)] aspect-square rounded-full flex items-center justify-center bg-gray-500 overflow-hidden
                  ${index === 0 ? "top-0 left-0" : ""}
                  ${index === 1 ? "top-0 right-0" : ""}
                  ${index === 2 ? "bottom-0 left-0" : ""}
                  ${index === 3 ? "bottom-0 right-0" : ""}   
               `}
            >
               <motion.div
                  animate={{ width: isSelected ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square bg-accent rounded-full"
               />
               <div className="w-[55%] rounded-full bg-primary aspect-square absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>
         </div>
      </motion.div>
   );
}
