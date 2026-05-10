import { useCallback, useEffect, useState } from "react";
import {
   useMotionValue,
   useMotionValueEvent,
   motion,
   useAnimate,
   Transition,
} from "framer-motion";
import ClockHand from "./ClockHand";
import HourMark from "./HourMark";
import ClockV from "./ClockV";
import ClockPath from "./ClockPath";
import ClockCenter from "./ClockCenter";

export default function Content() {
   const CIRCLE_SCOPE = "circle";
   const HOUR_SCOPE = "hour-hand";
   const MINUTE_SCOPE = "minute-hand";

   const pathLength = useMotionValue(0);
   const [scope, animate] = useAnimate();
   const [showV, setShowV] = useState<boolean>(false);

   useMotionValueEvent(pathLength, "change", (current) => {
      setShowV(current === 1);
   });

   const isClockStarting = useCallback(
      (isStart: boolean) => {
         const currentPathLength = pathLength.get();
         const MAX_DURATION = 3;
         const ease = "easeOut";

         let duration;
         if (isStart) {
            duration = MAX_DURATION - currentPathLength * MAX_DURATION;
         } else {
            duration = currentPathLength * MAX_DURATION;
         }

         const transition: Transition = { duration, ease };

         const rotateHour = isStart ? "360deg" : "0deg";
         const rotateMinutes = isStart ? "4320deg" : "0deg";
         const pathAnimation = isStart ? 1 : 0;

         animate("." + CIRCLE_SCOPE, { pathLength: pathAnimation }, transition);
         animate("." + HOUR_SCOPE, { rotate: rotateHour }, transition);
         animate("." + MINUTE_SCOPE, { rotate: rotateMinutes }, transition);
      },
      [pathLength, animate, CIRCLE_SCOPE, HOUR_SCOPE, MINUTE_SCOPE],
   );

   const [isHovered, setIsHovered] = useState(false);
   useEffect(() => {
      if (isHovered) isClockStarting(true);
      else isClockStarting(false);
   }, [isHovered, isClockStarting]);

   const handlePointerEnter = () => {
      setIsHovered(true);
   };

   const handlePointerLeave = () => {
      setIsHovered(false);
   };

   return (
      <motion.div
         onPointerEnter={handlePointerEnter}
         onPointerLeave={handlePointerLeave}
         className="w-full h-full p-4 bg-white"
      >
         <div ref={scope} className="w-full h-full relative">
            <ClockV showV={showV} />
            <ClockPath pathLength={pathLength} CIRCLE_SCOPE={CIRCLE_SCOPE} />
            <motion.div
               animate={{ opacity: showV ? 0 : 1 }}
               className="absolute top-0 left-0 w-full h-full"
            >
               {Array.from({ length: 12 }).map((_, index) => (
                  <HourMark key={index} hour={index + 1} />
               ))}
               <ClockHand SCOPE_CLASS={HOUR_SCOPE} />
               <ClockHand SCOPE_CLASS={MINUTE_SCOPE} minute />
               <ClockCenter />
            </motion.div>
         </div>
      </motion.div>
   );
}
