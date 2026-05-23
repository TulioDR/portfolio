"use client";

import Large from "./../_components/_screens/Large";
import Small from "./../_components/_screens/Small";
import useHomeMotion from "./../_hooks/useHomeMotion";
import { motion, Transition } from "framer-motion";
import useHomeInitialAnimation from "../_hooks/useHomeInitialAnimation";
import { SCALE_SELECTOR } from "../_constants/ANIMATION_CLASSNAMES";

export default function HomeContent() {
   const { handleMouseLeave, handleMouseMove, rotateX, rotateY } =
      useHomeMotion();

   const transition: Transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

   const { scope, startAnimations } = useHomeInitialAnimation();

   return (
      <motion.div
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{ perspective: 3000 }}
         ref={scope}
         className="h-svh w-full overflow-hidden bg-text"
      >
         <motion.div
            initial={{ scale: 3 }}
            exit={{ scale: 3, transition }}
            style={{
               transformStyle: "preserve-3d",
               rotateX: rotateX,
               rotateY: rotateY,
            }}
            className={`w-full h-full pointer-events-none ${SCALE_SELECTOR}`}
         >
            <Large startAnimations={startAnimations} />
            <Small startAnimations={startAnimations} />
         </motion.div>
      </motion.div>
   );
}
