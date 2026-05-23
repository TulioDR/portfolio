import { useEffect, useRef, useState } from "react";
import { MotionValue, useInView, useMotionValue } from "framer-motion";
import Pupil from "./Pupil";
import useSmoothMotion from "@/hooks/useSmoothMotion";

export default function Content() {
   const isMobile = false;

   const element = useRef<HTMLDivElement>(null);
   const distanceFromCenter = useMotionValue(1);
   const rotate = useMotionValue(0);
   const rotateReverse = useMotionValue(0);

   const isInView = useInView(element);

   const [isNear, setIsNear] = useState<boolean>(false);
   const [isOnLeftSide, setIsOnLeftSide] = useState<boolean>(false);
   const [isOnRightSide, setIsOnRightSide] = useState<boolean>(false);

   useEffect(() => {
      const updateEyePosition = (e: PointerEvent) => {
         if (!isInView || !element.current) return;

         // Logic: If it's a touch, only move the eyes if the finger is actually on the screen (buttons > 0)
         // If it's a mouse, it will always track.
         if (e.pointerType === "touch" && e.buttons === 0) return;

         const { clientX: x, clientY: y } = e;
         const rect = element.current.getBoundingClientRect();
         const centerX = rect.left + rect.width / 2;
         const centerY = rect.top + rect.height / 2;
         const radius = rect.width / 2;

         // 1. Calculate Rotation
         const angleRad = Math.atan2(y - centerY, x - centerX);
         const angle = (angleRad * 180) / Math.PI;
         rotate.set(angle);
         rotateReverse.set(-angle);

         // 2. Calculate Distance (How far the pupil moves)
         const dx = x - centerX;
         const dy = y - centerY;
         const distance = Math.sqrt(dx * dx + dy * dy);

         // Clamp to 1 so the pupil doesn't fly out of the head
         const percentage = Math.min(distance / radius, 1);
         distanceFromCenter.set(percentage);

         // 3. Side Detection
         const isRight = -90 < angle && angle < 90;
         setIsOnRightSide(isRight);
         setIsOnLeftSide(!isRight);
      };

      const handlePointerUp = () => {
         distanceFromCenter.set(0);
      };

      // Use pointer events to cover mouse and touch simultaneously
      window.addEventListener("pointermove", updateEyePosition);
      window.addEventListener("pointerdown", updateEyePosition);
      window.addEventListener("pointerup", handlePointerUp);

      return () => {
         window.removeEventListener("pointermove", updateEyePosition);
         window.removeEventListener("pointerdown", updateEyePosition);
         window.removeEventListener("pointerup", handlePointerUp);
      };
   }, [isInView, rotate, rotateReverse, distanceFromCenter]);

   const onMouseEnter = () => {
      setIsNear(true);
   };
   const onMouseLeave = () => {
      setIsNear(false);
      distanceFromCenter.set(1);
   };

   const { smoothMotion: rotateSmooth } = useSmoothMotion(rotate);
   const { smoothMotion: rotateReverseSmooth } = useSmoothMotion(rotateReverse);
   const { smoothMotion: distanceSmooth } = useSmoothMotion(distanceFromCenter);

   const rotateValue = isMobile ? rotateSmooth : rotate;
   const rotateReverseValue = isMobile ? rotateReverseSmooth : rotateReverse;
   const distanceValue = isMobile ? distanceSmooth : distanceFromCenter;

   const isNearValue = isMobile ? false : isNear;

   return (
      <div
         ref={element}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         className="aspect-square flex items-center w-full bg-primary"
      >
         <Pupil
            leftEye
            rotate={rotateValue as MotionValue<number>}
            rotateReverse={rotateReverseValue as MotionValue<number>}
            distanceFromCenter={distanceValue as MotionValue<number>}
            isActive={isOnLeftSide}
            isNear={isNearValue}
         />
         <Pupil
            rightEye
            rotate={rotateValue as MotionValue<number>}
            rotateReverse={rotateReverseValue as MotionValue<number>}
            distanceFromCenter={distanceValue as MotionValue<number>}
            isActive={isOnRightSide}
            isNear={isNearValue}
         />
      </div>
   );
}
