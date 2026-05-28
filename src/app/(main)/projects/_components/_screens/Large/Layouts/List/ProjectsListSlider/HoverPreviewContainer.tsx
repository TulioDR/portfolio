import {
   motion,
   MotionValue,
   useAnimate,
   useSpring,
   useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { EXIT_EASE } from "@/constants/TRANSITIONS";

type Props = {
   children: React.ReactNode;
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   selectedIndex: number | null;
};

export default function HoverPreviewContainer({
   children,
   mouseX,
   mouseY,
   selectedIndex,
}: Props) {
   const [scope, animate] = useAnimate();

   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothX = useSpring(mouseX, smoothOptions);
   const smoothY = useSpring(mouseY, smoothOptions);

   const isExpanded = selectedIndex !== null;

   const initialValues = {
      x: "-50%",
      y: "-50%",
      width: "24rem",
      height: "24rem",
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
   };

   const endingValues = {
      x: 0,
      y: 0,
      left: 0,
      top: 0,
      width: "100vw",
      height: "100svh",
   };

   useEffect(() => {
      if (isExpanded) {
         animate(scope.current, endingValues, EXIT_EASE);
      } else {
         animate(scope.current, initialValues, EXIT_EASE);
      }
   }, [isExpanded]);

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
         initial={initialValues}
         style={{
            left: isExpanded ? undefined : smoothLockedLeft,
            top: isExpanded ? undefined : smoothLockedTop,
         }}
         className="fixed pointer-events-none"
      >
         <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: EXIT_EASE }}
            exit={{ scale: 0, transition: EXIT_EASE }}
            className="w-full h-full overflow-hidden"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
