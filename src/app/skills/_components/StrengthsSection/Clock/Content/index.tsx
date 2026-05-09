import React, { useCallback, useEffect, useState } from "react";
import {
   useAnimationControls,
   useMotionValue,
   useMotionValueEvent,
   motion,
} from "framer-motion";
import ClockHand from "./ClockHand";
import HourMark from "./HourMark";
import ClockV from "./ClockV";
import ClockPath from "./ClockPath";
import ClockCenter from "./ClockCenter";
import GestureHandler from "@/components/GestureHandler";

type Props = {};

export default function Content({}: Props) {
   const hourHandControl = useAnimationControls();
   const minuteHandControl = useAnimationControls();
   const circleControl = useAnimationControls();

   const pathLength = useMotionValue(0);

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

         const transition = { duration, ease };

         const rotateHour = isStart ? "360deg" : "0deg";
         const rotateMinutes = isStart ? "4320deg" : "0deg";
         const pathLengthAnimation = isStart ? 1 : 0;

         hourHandControl.start({ rotate: rotateHour, transition });
         minuteHandControl.start({ rotate: rotateMinutes, transition });
         circleControl.start({ pathLength: pathLengthAnimation, transition });
      },
      [hourHandControl, minuteHandControl, circleControl, pathLength],
   );

   const [isHovered, setIsHovered] = useState(false);
   useEffect(() => {
      if (isHovered) isClockStarting(true);
      else isClockStarting(false);
   }, [isHovered, isClockStarting]);

   return (
      <GestureHandler
         onEnter={() => setIsHovered(true)}
         onLeave={() => setIsHovered(false)}
         el="div"
         className="w-full h-full p-5 bg-white"
      >
         <div className="w-full h-full relative">
            <ClockV showV={showV} />
            <ClockPath
               pathLength={pathLength}
               animationControls={circleControl}
            />
            <motion.div
               animate={{ opacity: showV ? 0 : 1 }}
               className="absolute top-0 left-0 w-full h-full"
            >
               {Array.from({ length: 12 }).map((_, index) => (
                  <HourMark key={index} hour={index + 1} />
               ))}
               <ClockHand animationControls={hourHandControl} />
               <ClockHand animationControls={minuteHandControl} minute />
               <ClockCenter />
            </motion.div>
         </div>
      </GestureHandler>
   );
}
