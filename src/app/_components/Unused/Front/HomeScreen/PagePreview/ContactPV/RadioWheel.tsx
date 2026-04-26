import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

type Props = {
   startAnimation: boolean;
   DURATION: number;
   STROKE_WIDTH: number;
   variants: any;
};

export default function RadioWheel({
   startAnimation,
   DURATION,
   STROKE_WIDTH,
   variants,
}: Props) {
   const controls = useAnimationControls();
   useEffect(() => {
      const transition = { duration: DURATION };
      if (startAnimation) controls.start({ rotate: 90, transition });
      else controls.start({ rotate: -45, transition });
   }, [startAnimation, DURATION, controls]);

   const handlerVariant = {
      initial: { height: 0 },
      animate: { height: "100%", transition: { duration: 1 } },
   };

   return (
      <motion.div className="aspect-square h-full relative rounded-full overflow-hidden p-px">
         <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: DURATION / 5 }}
            className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
         >
            <div className="bg-text rounded-full aspect-square w-1/3"></div>
         </motion.div>
         <svg
            style={{ padding: STROKE_WIDTH / 2 }}
            className="w-full h-full overflow-visible "
         >
            <motion.circle
               r="50%"
               cx="50%"
               cy="50%"
               className="stroke-line fill-transparent"
               strokeWidth={STROKE_WIDTH}
               variants={variants}
            />
         </svg>
         <div className="absolute top-0 left-0 w-full h-1/2 flex items-end ">
            <motion.div
               variants={handlerVariant}
               className="w-full h-full flex justify-center"
            >
               <motion.div
                  initial={{ rotate: -45 }}
                  animate={controls}
                  className="bg-text w-1 h-full origin-bottom "
               />
            </motion.div>
         </div>
      </motion.div>
   );
}
