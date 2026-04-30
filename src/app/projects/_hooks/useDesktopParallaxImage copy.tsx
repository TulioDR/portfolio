import {
   MotionValue,
   useMotionValue,
   useMotionValueEvent,
} from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

export default function useDesktopParallaxImage(
   motionChange: MotionValue<number>
) {
   const position = useMotionValue(0);

   const imgRef = useRef<HTMLImageElement>(null);

   const getCurrentPosition = useCallback(() => {
      if (!imgRef.current) return;
      const { width, right } = imgRef.current.getBoundingClientRect();
      const fullWidth = window.innerWidth + width;
      const currentPosition = right;

      const value = currentPosition / fullWidth;
      position.set(value);
   }, [position, imgRef]);

   useEffect(() => {
      getCurrentPosition();
   }, [getCurrentPosition]);

   useMotionValueEvent(motionChange, "change", () => {
      getCurrentPosition();
   });

   return { position, imgRef };
}
