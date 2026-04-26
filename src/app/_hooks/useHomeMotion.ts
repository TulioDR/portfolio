import { useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

export default function useHomeMotion() {
   const x = useMotionValue(0);
   const y = useMotionValue(0.25);

   const springConfig = {
      stiffness: 150,
      damping: 30,
      mass: 0.5,
      restDelta: 0.001,
   };
   const mouseXSpring = useSpring(x, springConfig);
   const mouseYSpring = useSpring(y, springConfig);

   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, 30]);
   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [5, -5]);

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
   };

   const handleMouseLeave = () => {
      x.set(0);
      y.set(0.25);
   };

   useEffect(() => {
      const handleOrientation = (e: DeviceOrientationEvent) => {
         // gamma: left to right tilt [-90, 90]
         // beta: front to back tilt [-180, 180]
         if (e.gamma !== null && e.beta !== null) {
            // Map tilt to a similar -0.5 to 0.5 range
            // We divide by a smaller number (like 30) so the user doesn't
            // have to flip their phone upside down to see the effect
            x.set(Math.max(Math.min(e.gamma / 60, 0.5), -0.5));
            y.set(Math.max(Math.min((e.beta - 45) / 60, 0.5), -0.5));
         }
      };

      window.addEventListener("deviceorientation", handleOrientation);
      return () =>
         window.removeEventListener("deviceorientation", handleOrientation);
   }, [x, y]);

   return { handleMouseLeave, handleMouseMove, rotateX, rotateY };
}
