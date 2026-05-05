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

   const [xAxisIndex, setXAxisIndex] = useState<number | null>(null);
   const [yAxisIndex, setYAxisIndex] = useState<number | null>(null);

   const changeXAxisIndex = (xAxis: number | null) => {
      setXAxisIndex(xAxis);
   };

   const changeYAxisIndex = (yAxis: number | null) => {
      setYAxisIndex(yAxis);
   };

   return {
      mouseX,
      mouseY,
      getMousePosition,
      xAxisIndex,
      yAxisIndex,
      changeXAxisIndex,
      changeYAxisIndex,
   };
}
