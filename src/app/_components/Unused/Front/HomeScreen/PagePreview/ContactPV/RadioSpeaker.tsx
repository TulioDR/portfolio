import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useWindowWidth from "@/hooks/useWindowWidth";

type Props = {
   right?: true;
   variants: any;
   STROKE_WIDTH: number;
};

export default function RadioSpeaker({ right, variants, STROKE_WIDTH }: Props) {
   const ref = useRef<HTMLDivElement>(null);
   const [height, setHeight] = useState(STROKE_WIDTH);
   const [width, setWidth] = useState(STROKE_WIDTH);

   const { windowWidth } = useWindowWidth();

   useEffect(() => {
      const el = ref.current!.getBoundingClientRect();
      setHeight(el.height);
      setWidth(el.width);
   }, [windowWidth]);

   return (
      <div ref={ref} className={`w-11/12 ${right ? "ml-auto" : " mr-auto"}`}>
         <svg
            width={width}
            height={height}
            className=""
            viewBox={`0 0 ${width} ${height + 1}`}
         >
            <motion.rect
               x={STROKE_WIDTH / 2}
               y={STROKE_WIDTH / 2}
               width={width - STROKE_WIDTH}
               height={height - STROKE_WIDTH}
               ry={width / 2}
               rx={height / 2}
               strokeWidth={STROKE_WIDTH}
               className="stroke-line fill-none"
               variants={variants}
            />
         </svg>
      </div>
   );
}
