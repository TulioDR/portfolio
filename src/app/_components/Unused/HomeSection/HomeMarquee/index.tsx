import React, { useRef } from "react";
import {
   useAnimationFrame,
   useInView,
   useMotionValue,
   useTransform,
} from "framer-motion";
import InnerContainer from "./InnerContainer";

type Props = {
   children: React.ReactNode;
   gap: number;
   isHovered?: boolean;
   reverse?: boolean;
   base: number;
};

export default function HomeMarquee({
   children,
   gap,
   isHovered,
   reverse,
   base,
}: Props) {
   const divRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(divRef);

   const baseX = useMotionValue(base);
   const direction = reverse ? -1 : 1;

   useAnimationFrame((_t, delta) => {
      if (!isHovered) return;
      if (!isInView) return;

      // Apply Loop
      if (baseX.get() >= 100 || baseX.get() <= -100) {
         baseX.jump(0);
         return;
      }
      const moveBy = (direction * delta) / 200;

      baseX.set(baseX.get() + moveBy * 1.5);
   });

   const x = useTransform(baseX, [-100, 100], ["-100%", `100%`]);

   return (
      <div
         ref={divRef}
         className="w-full h-full overflow-hidden flex justify-center relative"
      >
         <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full">
            <InnerContainer GAP={gap} x={x} className="relative">
               <InnerContainer GAP={gap} className="absolute right-full top-0">
                  {children}
               </InnerContainer>
               {children}
               <InnerContainer GAP={gap} className="absolute left-full top-0">
                  {children}
               </InnerContainer>
            </InnerContainer>
         </div>
      </div>
   );
}
