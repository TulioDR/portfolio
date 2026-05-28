import {
   motion,
   MotionValue,
   useAnimate,
   useSpring,
   useTransform,
} from "framer-motion";
import { NAV_TRANSITION } from "@/modules/navigation/constants/NAV_TRANSITION";
import { useEffect } from "react";
import { ENTER_EASE, EXIT_EASE } from "@/constants/TRANSITIONS";

type Props = {
   children: React.ReactNode;
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   bottom?: true;
   isExpanded?: boolean;
};

export default function HoverPreviewContainer({
   children,
   mouseX,
   mouseY,
   bottom,
   isExpanded,
}: Props) {
   const [scope, animate] = useAnimate();

   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothX = useSpring(mouseX, smoothOptions);
   const smoothY = useSpring(mouseY, smoothOptions);

   useEffect(() => {
      if (isExpanded) {
         animate(
            scope.current,
            {
               x: "0%",
               y: "0%",
               left: 0,
               top: 0,
               width: "100vw",
               height: "100svh",
            },
            EXIT_EASE,
         );
      } else {
         animate(
            scope.current,
            {
               x: "-50%",
               y: bottom ? "0%" : "-50%",
               width: "24rem",
               height: "24rem",
            },
            ENTER_EASE,
         );
      }
   }, [isExpanded, scope.current, bottom]);

   const lockedLeft = useTransform(smoothX, (latestX) => {
      return isExpanded ? 0 : latestX;
   });
   const lockedTop = useTransform(smoothY, (latestY) => {
      return isExpanded ? 0 : latestY;
   });

   const smoothLockedLeft = useSpring(lockedLeft, smoothOptions);
   const smoothLockedTop = useSpring(lockedTop, smoothOptions);

   return (
      <motion.div
         ref={scope}
         initial={{ width: "24rem", height: "24rem" }}
         style={{
            left: isExpanded ? undefined : smoothLockedLeft,
            top: isExpanded ? undefined : smoothLockedTop,
            x: "-50%",
            y: bottom ? 0 : "-50%",
         }}
         className="fixed pointer-events-none"
      >
         <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={NAV_TRANSITION}
            className="w-full h-full overflow-hidden border border-line"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
