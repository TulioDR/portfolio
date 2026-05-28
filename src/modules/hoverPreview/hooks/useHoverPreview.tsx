import { useMotionValue } from "framer-motion";
import { useState } from "react";

export default function useHoverPreview() {
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   const getMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);
   };

   const [xIndex, setXIndex] = useState<number | null>(null);
   const [yIndex, setYIndex] = useState<number | null>(null);

   const changeXAxisIndex = (xAxis: number | null) => {
      setXIndex(xAxis);
   };

   const changeYAxisIndex = (yAxis: number | null) => {
      setYIndex(yAxis);
   };

   return {
      mouseX,
      mouseY,
      getMousePosition,
      xIndex,
      yIndex,
      changeXAxisIndex,
      changeYAxisIndex,
   };
}
