"use client";

import Large from "./../_components/_screens/Large";
import Small from "./../_components/_screens/Small";
import useHomeMotion from "./../_hooks/useHomeMotion";
import { motion, Transition } from "framer-motion";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";

export default function HomeContent() {
   const { handleMouseLeave, handleMouseMove, rotateX, rotateY } =
      useHomeMotion();

   const { isLoaded } = usePreloaderContext();
   const transition: Transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

   return (
      <motion.div
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{ perspective: 3000 }}
         className="h-svh w-full overflow-hidden bg-text"
      >
         <motion.div
            initial={{ scale: 3 }}
            animate={{ scale: isLoaded ? 1 : 3, transition }}
            exit={{ scale: 3, transition }}
            style={{
               transformStyle: "preserve-3d",
               rotateX: rotateX,
               rotateY: rotateY,
            }}
            className="h-full w-full"
         >
            <Large />
            <Small />
         </motion.div>
      </motion.div>
   );
}
