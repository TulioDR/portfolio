import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
   setIsPhaseActive?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ScrollMark({ setIsPhaseActive }: Props) {
   const [isOn, setIsOn] = useState<boolean>(false);

   useEffect(() => {
      if (setIsPhaseActive) setIsPhaseActive(isOn);
   }, [isOn, setIsPhaseActive]);

   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["center center", "center center"],
   });

   useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (latest === 1) setIsOn(true);
      else setIsOn(false);
   });

   return (
      <div ref={ref} className="w-full h-full">
         <motion.div
            className="h-full origin-left bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isOn ? 1 : 0 }}
            transition={{ duration: 0.2 }}
         />
      </div>
   );
}
