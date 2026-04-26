import { useAnimationControls, motion, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import ChangingText from "@/modules/about/components/HomeAboutSection/Desktop/ViewMoreAbout/ChangingText";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   DURATION: number;
   STROKE_WIDTH: number;
   startAnimation: boolean;
   variants: any;
};

export default function RadioSignal({
   DURATION,
   STROKE_WIDTH,
   startAnimation,
   variants,
}: Props) {
   const ref = useRef<HTMLDivElement>(null);
   const markRef = useRef<HTMLDivElement>(null);

   const controls = useAnimationControls();
   useEffect(() => {
      if (startAnimation) {
         const { width } = markRef.current!.getBoundingClientRect();
         controls.start({ x: width });
      } else {
         controls.start({ x: 0 });
      }
   }, [startAnimation, controls]);

   const xValue = useMotionValue(0);
   const handleUpdate = (e: any) => xValue.set(e.x);

   const { windowWidth } = useWindowWidth();
   const [height, setHeight] = useState(STROKE_WIDTH);
   const [width, setWidth] = useState(STROKE_WIDTH);
   useEffect(() => {
      if (!ref.current) return;
      const el = ref.current.getBoundingClientRect();
      setHeight(el.height);
      setWidth(el.width);
   }, [windowWidth]);

   const { language } = useLanguageContext();
   const { contactMe, letsWork } = language.home.preview;

   return (
      <div ref={ref} className="w-full relative h-1/4 flex-shrink-0">
         <svg width={width} height={height}>
            <motion.rect
               x={STROKE_WIDTH / 2}
               y={STROKE_WIDTH / 2}
               width={width - STROKE_WIDTH}
               height={height - STROKE_WIDTH}
               strokeWidth={STROKE_WIDTH}
               className="stroke-line fill-none"
               variants={variants}
            />
         </svg>
         <div className="w-full h-full absolute top-0 left-0 px-20">
            <div
               ref={markRef}
               className="h-full w-full relative flex items-center uppercase"
            >
               <ChangingText
                  markPosition={xValue}
                  text1={contactMe}
                  text2={letsWork}
                  className="text-about"
               />
               <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <motion.div
                     style={{ x: 0 }}
                     animate={controls}
                     onUpdate={handleUpdate}
                     transition={{ duration: DURATION }}
                     className="w-1 h-full bg-accent"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
