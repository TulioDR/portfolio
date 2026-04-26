import React from "react";
import { motion, MotionValue } from "framer-motion";

type Props = {
   x: MotionValue<string>;
   y: MotionValue<string>;
};

export default function Desktop({ x, y }: Props) {
   return (
      <motion.div
         style={{ x: x, y: y }}
         className="flex w-full h-full relative border border-line"
      >
         <div className="h-full flex flex-col relative">
            <div className="h-full w-px bg-line top-0 left-1/2 -translate-x-1/2 absolute" />
            <div className="w-full flex-1 relative border-b border-line" />
            <div className="pl-px">
               <div className="w-[50vw] h-[50svh] p-4 box-content flex items-center">
                  <div className="h-px w-full bg-line" />
               </div>
            </div>
            <div className="w-full flex-1 relative border-t border-line" />
         </div>

         <div className="h-full w-16 relative border-x border-line" />

         <div className="flex-1 h-full relative flex flex-col">
            <div className="h-full w-px bg-line top-0 left-1/2 -translate-x-1/2 absolute" />
            <div className="w-full flex-1 relative border-b border-line" />
            <div className="w-full h-[50vh] py-4 box-content flex items-center">
               <div className="h-px w-full bg-line" />
            </div>
            <div className="w-full flex-1 relative border-t border-line" />
         </div>

         <div className="h-full w-16 relative border-l border-line" />
      </motion.div>
   );
}
