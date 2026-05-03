import { useScroll } from "framer-motion";
import { useLenis } from "lenis/react";
import { useRef, useState, useEffect } from "react";

export default function useScrollParallaxImage() {
   const imgRef = useRef<HTMLDivElement>(null);
   const [containerElement, setContainerElement] = useState<HTMLElement | null>(
      null,
   );

   const lenis = useLenis((lenisInstance) => {
      const wrapper = lenisInstance.options.wrapper;
      if (!containerElement && wrapper instanceof HTMLElement) {
         setContainerElement(wrapper);
      }
   });

   useEffect(() => {
      const wrapper = lenis?.options.wrapper;
      if (wrapper instanceof HTMLElement) {
         setContainerElement(wrapper);
      }
   }, [lenis]);

   const { scrollXProgress } = useScroll({
      target: imgRef,
      offset: ["start end", "end start"],
      axis: "x",
      container: containerElement ? { current: containerElement } : undefined,
   });

   return { scrollXProgress, imgRef };
}
