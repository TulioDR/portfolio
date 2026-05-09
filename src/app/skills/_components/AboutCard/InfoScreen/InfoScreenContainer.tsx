import React from "react";
import { motion, Transition } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function InfoScreenContainer({ children }: Props) {
   const TRANSITION: Transition = {
      duration: 0.8,
      ease: [0.2, 0.6, 0.8, 0.4],
   };
   return (
      <div className="w-full h-full absolute top-0 left-0 z-30 overflow-hidden">
         <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={TRANSITION}
            className="w-full h-full flex relative"
         >
            <div className="absolute bottom-full left-0 w-full bg-white h-px! -translate-y-px" />
            <div className="absolute top-full left-0 w-full bg-white h-px! translate-y-px" />
            <div className="w-full h-full overflow-hidden">
               <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={TRANSITION}
                  className="w-full bg-primary h-full flex justify-center"
               >
                  <div className="flex flex-col h-full aspect-square justify-center items-center text-center gap-5 p-5">
                     {children}
                  </div>
               </motion.div>
            </div>
         </motion.div>
      </div>
   );
}
