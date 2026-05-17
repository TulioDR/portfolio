import { useMotionValue } from "framer-motion";
import { useState } from "react";

export default function useProjectTooltip() {
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   const [isHovered, setIsHovered] = useState(false);
   const endHover = () => setIsHovered(false);

   const getMousePosition = (e: React.PointerEvent<HTMLElement>) => {
      if (!isHovered) setIsHovered(true);
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);
   };

   return {
      getMousePosition,
      endHover,
      isHovered,
      mouseX,
      mouseY,
   };
}
