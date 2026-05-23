import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";

type Props = {
   distanceFromCenter: MotionValue<number>;
   rotateReverse: MotionValue<number>;
   rotate: MotionValue<number>;
   leftEye?: true;
   rightEye?: true;
   isActive: boolean;
   isNear: boolean;
};

export default function Pupil({
   distanceFromCenter,
   rotate,
   rotateReverse,
   leftEye,
   rightEye,
   isActive,
   isNear,
}: Props) {
   const x = useTransform(distanceFromCenter, [0, 1], ["-50%", "-100%"]);
   const left = useTransform(distanceFromCenter, [0, 1], ["50%", "100%"]);

   return (
      <div
         className={`w-1/2 aspect-square
            ${leftEye ? "translate-x-[10%]" : ""} 
            ${rightEye ? "-translate-x-[10%]" : ""}
         `}
      >
         <motion.div
            style={{ rotate: rotate }}
            className="aspect-square h-full relative"
         >
            <motion.div
               style={{ top: "50%", y: "-50%", x, left, rotate: rotateReverse }}
               className="aspect-square absolute w-2/3 flex justify-center items-end"
            >
               <motion.div
                  animate={{
                     height: isNear ? "130%" : isActive ? "115%" : "100%",
                     bottom: isNear ? "-10%" : isActive ? "-2%" : "0%",
                  }}
                  transition={{ type: "spring", duration: 0.2, bounce: 0.5 }}
                  style={{ borderRadius: 12 }}
                  className={`w-full bg-accent absolute left-0`}
               />
            </motion.div>
         </motion.div>
      </div>
   );
}
