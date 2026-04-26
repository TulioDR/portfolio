import React from "react";
import { motion } from "framer-motion";

type Props = {
   start: boolean;
   middle?: true;
};

export default function Branch({ start, middle }: Props) {
   return (
      <div className="z-10 h-full aspect-square relative">
         {start && (
            <>
               <motion.div
                  initial={{ height: "0vh" }}
                  animate={{ height: "12.5vh" }}
                  transition={{ duration: 0.5 }}
                  className={`w-full absolute left-0 bg-accent ${
                     middle ? "top-0" : "bottom-0"
                  }`}
               />
               <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                  transition={{ duration: 0.1 }}
                  className="w-2 h-2 absolute bg-accent"
               />
            </>
         )}
      </div>
   );
}
