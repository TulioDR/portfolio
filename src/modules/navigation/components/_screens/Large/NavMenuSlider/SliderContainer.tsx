import React from "react";
import { motion, MotionValue, useSpring } from "framer-motion";

type Props = {
   children: React.ReactNode;
   x: MotionValue<number>;
   y: MotionValue<number>;
};

export default function SliderContainer({ children, x, y }: Props) {
   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothX = useSpring(x, smoothOptions);
   const smoothY = useSpring(y, smoothOptions);
   return (
      <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0 }}
         transition={{ duration: 0.3 }}
         style={{
            left: smoothX,
            top: smoothY,
            x: "-50%",
            y: "-50%",
         }}
         className="absolute aspect-square w-64 pointer-events-none overflow-hidden"
      >
         {children}
      </motion.div>
   );
}
