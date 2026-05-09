import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
   showSound: boolean;
};

export default function Sound({ showSound }: Props) {
   return (
      <AnimatePresence>
         {showSound && (
            <motion.div
               initial={{ x: "-50%" }}
               exit={{
                  y: "-50%",
                  opacity: 0,
                  transition: { duration: 0.5 },
               }}
               className="bottom-full absolute w-full text-center text-xs pb-1"
            >
               "click"
            </motion.div>
         )}
      </AnimatePresence>
   );
}
