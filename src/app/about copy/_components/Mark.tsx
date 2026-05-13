import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef } from "react";

type Props = {
   isOn: boolean;
   setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Mark({ isOn, setIsOn }: Props) {
   const isMobile = false;

   const ref = useRef(null);
   const { scrollYProgress, scrollXProgress } = useScroll({
      target: ref,
      offset: ["center center", "center center"],
      axis: isMobile ? "y" : "x",
   });

   useMotionValueEvent(
      isMobile ? scrollYProgress : scrollXProgress,
      "change",
      (latest) => {
         if (latest === 1) setIsOn(true);
         else setIsOn(false);
      },
   );
   return (
      <div
         ref={ref}
         className={`aspect-square duration-300 border border-accent outline-8 outline-primary bg-primary z-10 ${
            isOn ? "h-6 lg:h-10" : "h-3 lg:h-6"
         }`}
      />
   );
}
