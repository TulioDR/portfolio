import React from "react";
import { motion } from "framer-motion";

type Props = {
   vertical?: true;
   isHovered: boolean;
   reverse?: true;
};

export default function Cables({ vertical, isHovered, reverse }: Props) {
   return (
      <div
         className={`flex-1 flex justify-evenly
         ${vertical ? "w-full" : "flex-col h-2/3"}
      `}
      >
         {Array.from({ length: 4 }).map((_, index) => (
            <div
               key={index}
               className={`bg-gray-300 flex
                  ${vertical ? "w-0.5 h-full" : "h-0.5 w-full"}
                  ${reverse ? "justify-end items-end" : ""}
               `}
            >
               <motion.div
                  initial={false}
                  animate={
                     vertical
                        ? { height: isHovered ? "100%" : 0 }
                        : { width: isHovered ? "100%" : 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className={`bg-accent ${vertical ? "w-full" : "h-full"}`}
               />
            </div>
         ))}
      </div>
   );
}
