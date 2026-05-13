import { useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function useHeaderAnimation() {
   const horizontalLine = useAnimationControls();
   const verticalLine = useAnimationControls();
   const description = useAnimationControls();
   const mouse = useAnimationControls();

   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   useEffect(() => {
      if (!isMounted) return;
      const startAnimation = async () => {
         await horizontalLine.start("animate");
         verticalLine.start("animate");
         description.start("animate");
         mouse.start("animate");
      };
      startAnimation();
   }, [, horizontalLine, verticalLine, description, mouse, isMounted]);

   return {
      horizontalLine,
      verticalLine,
      description,
      mouse,
   };
}
