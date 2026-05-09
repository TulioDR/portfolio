import { useMotionValue, useMotionValueEvent } from "framer-motion";
import { useCallback, useEffect } from "react";
import useMousePosition from "./useMousePosition";

export default function useWandPosition() {
   const { mouseX, mouseY, getMousePosition, mouseContainerRef } =
      useMousePosition();

   const wandX = useMotionValue(0);
   const wandY = useMotionValue(0);
   const xPercentage = useMotionValue(0);

   useMotionValueEvent(mouseX, "change", (current) => {
      const { width } = mouseContainerRef.current!.getBoundingClientRect();
      const newWandX = current * 1.3 + -0.15 * width;
      wandX.set(newWandX);
      xPercentage.set(newWandX / width);
   });
   useMotionValueEvent(mouseY, "change", (current) => {
      const { height } = mouseContainerRef.current!.getBoundingClientRect();
      const newWandY = current * 0.4 + 0.1 * height;
      wandY.set(newWandY);
   });

   const setInitialPosition = useCallback(() => {
      const rec = mouseContainerRef.current!.getBoundingClientRect();
      const { width, height } = rec;
      const finalXPosition = 0.1;

      wandY.set(height / 4);
      wandX.set(width * finalXPosition);
      xPercentage.set(finalXPosition);
   }, [xPercentage, wandX, wandY, mouseContainerRef]);

   useEffect(() => {
      setInitialPosition();
   }, [setInitialPosition]);

   return {
      mouseContainerRef,
      getMousePosition,
      setInitialPosition,
      xPercentage,
      wandX,
      wandY,
      mouseX,
      mouseY,
   };
}
