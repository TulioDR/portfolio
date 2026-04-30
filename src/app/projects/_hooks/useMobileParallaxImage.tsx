import { MotionValue, useSpring, useTransform } from "framer-motion";

export default function useMobileParallaxImage(
   motionChange: MotionValue<number>
) {
   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothTurn = useSpring(motionChange, smoothOptions);

   const position = useTransform(smoothTurn, [-45, 45], [1, 0]);

   return { position };
}
