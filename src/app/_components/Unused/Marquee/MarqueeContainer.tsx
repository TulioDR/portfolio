import React, { useRef } from "react";
import {
   AnimatePresence,
   motion,
   useAnimationFrame,
   useInView,
   useMotionValue,
   useScroll,
   useSpring,
   useTransform,
   useVelocity,
} from "framer-motion";
import useLanguageContext from "@/context/LanguageContext";
import InnerContainer from "./InnerContainer";
import { EXIT_EASE } from "@/constants/TRANSITIONS";

type Props = {
   children: React.ReactNode;
};

export default function MarqueeContainer({ children }: Props) {
   const { isEnglish } = useLanguageContext();

   const divRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(divRef);

   const baseX = useMotionValue(0);
   const { scrollY } = useScroll();
   const scrollVelocity = useVelocity(scrollY);

   const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
   });
   const velocityFactor = useTransform(
      smoothVelocity,
      [-1000, 0, 0, 1000],
      [-5, -1, 1, 5],
      { clamp: false }
   );

   const direction = useRef<number>(1);

   useAnimationFrame((_t, delta) => {
      if (!isInView) return;

      // Set direction
      if (smoothVelocity.get() < 0) direction.current = -1;
      else if (smoothVelocity.get() > 0) direction.current = 1;

      // Apply Loop
      if (baseX.get() >= 100 || baseX.get() <= -100) {
         baseX.jump(0);
         return;
      }

      const moveBy = (direction.current * delta) / 200;
      const velocity = Math.abs(velocityFactor.get());
      baseX.set(baseX.get() + moveBy * velocity);
   });

   const x = useTransform(baseX, [-100, 100], ["-100%", `100%`]);

   return (
      <div ref={divRef} className="w-screen h-main-spacing overflow-hidden">
         <motion.div
            exit={{ y: "-100%", transition: EXIT_EASE }}
            className="h-full w-full"
         >
            <AnimatePresence initial={false} mode="wait">
               <motion.div
                  key={isEnglish ? "en" : "es"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full flex justify-center"
               >
                  <InnerContainer x={x} className="relative">
                     <InnerContainer className="absolute right-full top-0">
                        {children}
                     </InnerContainer>
                     {children}
                     <InnerContainer className="absolute left-full top-0">
                        {children}
                     </InnerContainer>
                  </InnerContainer>
               </motion.div>
            </AnimatePresence>
         </motion.div>
      </div>
   );
}
