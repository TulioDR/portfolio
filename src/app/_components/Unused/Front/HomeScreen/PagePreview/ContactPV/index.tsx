import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import RadioSpeaker from "./RadioSpeaker";
import RadioSignal from "./RadioSignal";
import RadioWheel from "./RadioWheel";

type Props = {};

export default function ContactPV({}: Props) {
   const DURATION = 1;

   const containerControls = useAnimationControls();

   const radioVariants = {
      initial: {},
      animate: {},
   };

   const pathVariant = {
      initial: { pathLength: 0 },
      animate: { pathLength: 1, transition: { duration: DURATION } },
   };

   const [startAnimation, setStartAnimation] = useState<boolean>(false);

   useEffect(() => {
      const animation = async () => {
         await containerControls.start("animate");
         setStartAnimation(true);
      };
      animation();
   }, []);

   const STROKE_WIDTH = 1;

   return (
      <motion.div
         variants={radioVariants}
         initial="initial"
         animate={containerControls}
         className="h-full w-full p-5 flex flex-col gap-5 overflow-hidden"
      >
         <RadioSignal
            startAnimation={startAnimation}
            DURATION={DURATION}
            STROKE_WIDTH={STROKE_WIDTH}
            variants={pathVariant}
         />
         <div className="w-full flex-1 flex gap-5 overflow-hidden">
            <div className="flex-1 h-full grid grid-rows-4 gap-5">
               <RadioSpeaker
                  variants={pathVariant}
                  STROKE_WIDTH={STROKE_WIDTH}
                  right
               />
               <RadioSpeaker
                  variants={pathVariant}
                  STROKE_WIDTH={STROKE_WIDTH}
               />
               <RadioSpeaker
                  variants={pathVariant}
                  STROKE_WIDTH={STROKE_WIDTH}
               />
               <RadioSpeaker
                  variants={pathVariant}
                  STROKE_WIDTH={STROKE_WIDTH}
                  right
               />
            </div>
            <RadioWheel
               startAnimation={startAnimation}
               DURATION={DURATION}
               STROKE_WIDTH={STROKE_WIDTH}
               variants={pathVariant}
            />
         </div>
      </motion.div>
   );
}
