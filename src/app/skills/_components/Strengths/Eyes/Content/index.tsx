import React, { useEffect, useRef, useState } from "react";
import { MotionValue, useInView, useMotionValue } from "framer-motion";
import Pupil from "./Pupil";
import useSmoothMotion from "@/hooks/useSmoothMotion";

export default function Content() {
   // const { isMobile } = useDeviceSizeContext();
   const isMobile = false;

   const element = useRef<HTMLDivElement>(null);
   const distanceFromCenter = useMotionValue(1);
   const rotate = useMotionValue(0);
   const rotateReverse = useMotionValue(0);

   const isInView = useInView(element);

   const [isNear, setIsNear] = useState<boolean>(false);
   const [isOnLeftSide, setIsOnLeftSide] = useState<boolean>(false);
   const [isOnRightSide, setIsOnRightSide] = useState<boolean>(false);

   const getDistanceFromCenter = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = element.current!.getBoundingClientRect();
      const width = rect.width;
      const radius = width / 2;
      const centerX = rect.left + radius;
      const centerY = rect.top + radius;
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;
      const distance = Math.sqrt(x * x + y * y);
      const percentage = distance / radius;
      distanceFromCenter.set(percentage);
   };

   useEffect(() => {
      const getRotationAngle = (event: MouseEvent) => {
         if (!isInView) return;
         const { clientX: x, clientY: y } = event;
         const { left, width, top, height } =
            element.current!.getBoundingClientRect();
         const centerX = left + width / 2;
         const centerY = top + height / 2;
         const angleRad = Math.atan2(y - centerY, x - centerX);
         const angle = (angleRad * 180) / Math.PI;
         rotate.set(angle);
         rotateReverse.set(-angle);
         if (-90 < angle && angle < 90) {
            setIsOnRightSide(true);
            setIsOnLeftSide(false);
         } else {
            setIsOnRightSide(false);
            setIsOnLeftSide(true);
         }
      };
      window.addEventListener("mousemove", getRotationAngle);
      return () => window.removeEventListener("mousemove", getRotationAngle);
   }, [rotate, rotateReverse, isInView]);

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
         onMouseMove={getDistanceFromCenter}
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
