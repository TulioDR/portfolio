import { MotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { LenisRef } from "lenis/react";
import { useEffect, useRef, useState } from "react";

export default function useProjectsLenisScroll(
   currentScroll: MotionValue<number>,
) {
   const [containerElement, setContainerElement] = useState<HTMLElement | null>(
      null,
   );
   const scrollRef = useRef<LenisRef>(null);

   useEffect(() => {
      currentScroll.set(0);
   }, [currentScroll]);

   useEffect(() => {
      setContainerElement(scrollRef.current?.wrapper!);
   }, [scrollRef.current?.wrapper!]);

   const { scrollX, scrollY } = useScroll({
      container: containerElement ? { current: containerElement } : undefined,
   });

   useMotionValueEvent(scrollX, "change", (latest) => {
      currentScroll.set(latest);
   });
   useMotionValueEvent(scrollY, "change", (latest) => {
      currentScroll.set(latest);
   });

   return { scrollRef };
}
