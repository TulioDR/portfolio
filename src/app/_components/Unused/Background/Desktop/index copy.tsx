import React from "react";
import { motion, MotionValue } from "framer-motion";

type Props = {
   x: MotionValue<string>;
   y: MotionValue<string>;
};

export default function Background({ x, y }: Props) {
   return (
      <motion.div
         style={{ x: x, y: y }}
         className="flex w-full h-full relative "
      >
         <motion.div className="h-full w-px absolute top-0 left-0 bg-line" />
         <motion.div className="h-px w-full absolute top-0 left-0 bg-line" />
         {/* <motion.div className="h-full w-px absolute right-0 top-0 bg-line" /> */}
         <motion.div className="h-px w-full absolute bottom-0 left-0 bg-line" />
         <div className="h-full flex flex-col relative">
            <motion.div className="h-full w-px bg-line top-0 left-1/2 -translate-x-1/2 absolute" />
            <div className="w-full flex-1 relative">
               <motion.div className="h-px w-full absolute bottom-0 left-0 bg-line" />
            </div>
            <div className="pl-px">
               <div className="w-[50vw] h-[50vh] p-4 box-content relative">
                  <motion.div className="h-px w-full absolute top-1/2 -translate-y-1/2 left-0 bg-line" />
               </div>
            </div>
            <div className="w-full flex-1 relative">
               <motion.div className="h-px w-full absolute top-0 left-0 bg-line" />
            </div>
         </div>
         <div className="h-full w-16 relative">
            <motion.div className="h-full w-px absolute top-0 left-0 bg-line" />
            <motion.div className="h-full w-px absolute right-0 top-0 bg-line" />
         </div>
         <div className="flex-1 h-full relative flex flex-col">
            <motion.div className="h-full w-px bg-line top-0 left-1/2 -translate-x-1/2 absolute" />
            <div className="w-full flex-1 relative">
               <motion.div className="h-px w-full absolute bottom-0 left-0 bg-line" />
            </div>
            <div className="">
               <div className="full h-[50vh] p-4 box-content relative">
                  <motion.div className="h-px w-full absolute top-1/2 -translate-y-1/2 left-0 bg-line" />
               </div>
            </div>
            <div className="w-full flex-1 relative">
               <motion.div className="h-px w-full absolute top-0 left-0 bg-line" />
            </div>
         </div>
         <div className="h-full w-16 relative">
            <motion.div className="h-full w-px absolute top-0 left-0 bg-line" />
            <motion.div className="h-full w-px absolute right-0 top-0 bg-line" />
         </div>
      </motion.div>
   );
}
