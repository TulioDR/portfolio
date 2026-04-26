import React from "react";
import { motion, useAnimationControls } from "framer-motion";

type Props = {
   frontComponent: React.ReactNode;
   backComponent: React.ReactNode;
};

export default function FlipCard({ frontComponent, backComponent }: Props) {
   const controls = useAnimationControls();

   const DURATION = 0.4;
   const startRotation = () => {
      controls.start({ rotateY: 180, transition: { duration: DURATION } });
   };
   const endRotation = () => {
      controls.start({ rotateY: 360, transition: { duration: DURATION } });
   };

   const handleUpdate = (e: any) => {
      if (e.rotateY === 360) {
         controls.start({ rotateY: 0, transition: { duration: 0 } });
      }
   };

   return (
      <motion.div
         // style={{ perspective: "2000px" }}
         onTapStart={startRotation}
         onTap={endRotation}
         onTapCancel={endRotation}
         onHoverStart={startRotation}
         onHoverEnd={endRotation}
         className="flex-1 h-full select-none"
      >
         <motion.div
            style={{ transformStyle: "preserve-3d" }}
            animate={controls}
            onUpdate={handleUpdate}
            className="w-full h-full relative"
         >
            <motion.div
               style={{ backfaceVisibility: "hidden" }}
               className="absolute top-0 left-0 w-full h-full overflow-hidden"
            >
               {frontComponent}
            </motion.div>
            <motion.div
               style={{
                  backfaceVisibility: "hidden",
                  rotateY: 180,
               }}
               className="absolute top-0 left-0 z-10 w-full h-full"
            >
               {backComponent}
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
