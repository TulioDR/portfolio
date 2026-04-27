import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function AnimationContainer({ children }: Props) {
   const transition = { duration: 0.2 };
   return (
      <div className="fixed top-0 left-0 z-50 w-screen h-svh p-0">
         <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={transition}
            className="w-full h-full overflow-hidden"
         >
            <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               exit={{ x: "100%" }}
               transition={transition}
               className="w-full h-full overflow-hidden"
            >
               {children}
            </motion.div>
         </motion.div>
      </div>
   );
}
