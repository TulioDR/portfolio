import React from "react";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";

type Props = {
   xPercentage: MotionValue<number>;
   x: MotionValue<number>;
   y: MotionValue<number>;
   isOn: boolean;
};

export default function Wand({ xPercentage, x, y, isOn }: Props) {
   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothX = useSpring(x, smoothOptions);
   const smoothY = useSpring(y, smoothOptions);
   const smoothXPercentage = useSpring(xPercentage, smoothOptions);

   const rotateZ = useTransform(smoothXPercentage, [0.1, 0.9], [-8, 8]);

   return (
      <motion.div
         style={{ x: "-50%", top: smoothY, left: smoothX, rotateZ }}
         className="absolute aspect-[1/12] w-12 flex flex-col z-20 rounded-2xl overflow-hidden shadow-lg pointer-events-none"
      >
         <div
            className={`w-full h-1/5 duration-500 bg-gradient-to-r from-orange-700 via-accent to-orange-700 ${
               isOn ? "brightness-100" : "brightness-50"
            }`}
         />
         <div className="flex-1 w-full bg-gradient-to-r from-gray-500 via-about to-gray-500" />
      </motion.div>
   );
}
