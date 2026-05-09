import { MotionValue, useSpring } from "framer-motion";

export default function useSmoothMotion(motionValue: MotionValue<number>) {
   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothMotion = useSpring(motionValue, smoothOptions);
   return { smoothMotion };
}
