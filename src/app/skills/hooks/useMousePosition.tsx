import { useMotionValue } from "framer-motion";
import { useRef } from "react";

export default function useMousePosition() {
   const mouseContainerRef = useRef<HTMLDivElement>(null);

   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   // Get mouse position relative to container
   const getMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = mouseContainerRef.current!.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      mouseX.set(x);
      mouseY.set(y);
   };

   return { mouseX, mouseY, getMousePosition, mouseContainerRef };
}
