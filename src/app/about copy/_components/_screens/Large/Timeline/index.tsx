import { useEffect, useRef, useState } from "react";
import Line from "./Line";

import { useScroll, useTransform } from "framer-motion";
import Story from "./Story";
// import { START_WITH_REVERSE } from "@/modules/about/constants/DESKTOP_STORIES";
import Bracket from "../../../Bracket";
import { LenisRef, useLenis } from "lenis/react";

type Props = {
   scrollerRef: React.RefObject<LenisRef | null>;
};

export default function Timeline({}: Props) {
   const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null);

   const lenis = useLenis((lenisInstance) => {
      const wrapper = lenisInstance.options.wrapper;
      if (!scrollElement && wrapper instanceof HTMLElement) {
         setScrollElement(wrapper);
      }
   });

   useEffect(() => {
      const wrapper = lenis?.options.wrapper;
      if (wrapper instanceof HTMLElement) {
         setScrollElement(wrapper);
      }
   }, [lenis]);

   const ref = useRef(null);
   const { scrollXProgress } = useScroll({
      target: ref,
      offset: ["start center", "end center"],
      axis: "x",
      container: scrollElement ? { current: scrollElement } : undefined,
   });

   const width = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

   const stories = [1, 2, 3];

   const handleStoryLayout = (index: number): boolean => {
      if (false) return index % 2 === 0;
      else return index % 2 !== 0;
   };

   return (
      <div className="flex h-svh relative shrink-0">
         <Line width={width} lineRef={ref} />
         <div className="h-full flex gap-32 px-32 relative shrink-0">
            <div className="absolute top-0 left-0 h-full flex items-center">
               <div className="h-16 relative">
                  <Bracket />
               </div>
            </div>
            {stories.map((_, index) => (
               <Story key={index} reverse={handleStoryLayout(index)} />
            ))}
            <div className="absolute top-0 right-0 h-full flex items-center">
               <div className="h-16 relative">
                  <Bracket end />
               </div>
            </div>
         </div>
         <div className="w-screen h-screen flex justify-center">
            <Story reverse={handleStoryLayout(stories.length)} />
         </div>
      </div>
   );
}
