import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   showV: boolean;
};

export default function ClockV({ showV }: Props) {
   const SHORT_DURATION = 0.2;
   const LONG_DURATION = SHORT_DURATION * 2;
   return (
      <AnimatePresence>
         {showV && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute z-40 top-0 left-0 w-full h-full flex items-center justify-center"
            >
               <div className="relative -rotate-45 aspect-[2/1] -translate-y-1/2 w-1/2">
                  <motion.div
                     initial={{ height: "0%" }}
                     animate={{ height: "100%" }}
                     transition={{ duration: SHORT_DURATION }}
                     className="absolute top-0 left-0 w-2 bg-green-600"
                  />
                  <motion.div
                     initial={{ width: "0%" }}
                     animate={{ width: "100%" }}
                     transition={{
                        duration: LONG_DURATION,
                        delay: SHORT_DURATION,
                     }}
                     className="absolute bottom-0 left-0 h-2 bg-green-600"
                  />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
