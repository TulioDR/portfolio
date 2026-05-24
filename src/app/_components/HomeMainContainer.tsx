import React from "react";
import { motion } from "framer-motion";
import useHomeContext from "../_context/HomeContext";
import useHomeMotion from "../_hooks/useHomeMotion";
import { SCALE_SELECTOR } from "../_constants/ANIMATION_CLASSNAMES";

type Props = {
   children: React.ReactNode;
};

export default function HomeMainContainer({ children }: Props) {
   const { handleMouseLeave, handleMouseMove, rotateX, rotateY } =
      useHomeMotion();

   const { scope } = useHomeContext();
   return (
      <motion.div
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{ perspective: 3000 }}
         ref={scope}
         className="h-svh w-full overflow-hidden bg-text relative"
      >
         <motion.div
            initial={{ scale: 4 }}
            style={{
               transformStyle: "preserve-3d",
               rotateX: rotateX,
               rotateY: rotateY,
            }}
            className={`w-full h-full pointer-events-none ${SCALE_SELECTOR}`}
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
