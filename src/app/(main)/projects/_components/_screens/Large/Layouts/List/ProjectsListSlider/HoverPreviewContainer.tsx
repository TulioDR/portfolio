import {
   motion,
   MotionValue,
   Transition,
   useAnimate,
   useSpring,
} from "framer-motion";
import { useEffect } from "react";
import { EXIT_EASE } from "@/constants/TRANSITIONS";

type Props = {
   children: React.ReactNode;
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   selectedLink: string | null;
};

export default function HoverPreviewContainer({
   children,
   mouseX,
   mouseY,
   selectedLink,
}: Props) {
   const [scope, animate] = useAnimate();
   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothX = useSpring(mouseX, smoothOptions);
   const smoothY = useSpring(mouseY, smoothOptions);
   const TRANSITION: Transition = { duration: 0.2 };

   useEffect(() => {
      const el = scope.current;
      if (selectedLink) {
         animate(el, { width: "100vw", height: "100svh" }, EXIT_EASE);
      } else {
         animate(el, { width: "24rem", height: "24rem" }, TRANSITION);
      }
   }, [selectedLink]);

   return (
      <motion.div
         ref={scope}
         initial={{ width: "24rem", height: "24rem" }}
         style={{ left: smoothX, top: smoothY, x: "-50%", y: "-50%" }}
         className="fixed pointer-events-none z-10"
      >
         <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={TRANSITION}
            className="w-full h-full overflow-hidden"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
