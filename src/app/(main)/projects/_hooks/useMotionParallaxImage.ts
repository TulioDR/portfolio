import {
   useInView,
   useMotionValue,
   useSpring,
   useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function useMotionParallaxImage() {
   const turn = useMotionValue(0);
   const containerRef = useRef<HTMLImageElement>(null);
   const isInView = useInView(containerRef);

   useEffect(() => {
      if (!isInView) return;
      const handleTurn = (e: DeviceOrientationEvent) => turn.set(e.gamma || 0);
      const DOE = "DeviceOrientationEvent";

      if (DOE in window)
         window.addEventListener("deviceorientation", handleTurn, true);

      return () => {
         if (DOE in window)
            window.removeEventListener("deviceorientation", handleTurn, true);
      };
   }, [turn, isInView]);

   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothTurn = useSpring(turn, smoothOptions);

   const position = useTransform(smoothTurn, [-45, 45], [1, 0]);

   return { position, containerRef };
}
