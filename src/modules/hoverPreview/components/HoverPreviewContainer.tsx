import { motion, MotionValue, useSpring } from "framer-motion";
import { NAV_TRANSITION } from "@/modules/navigation/constants/NAV_TRANSITION";

type Props = {
   children: React.ReactNode;
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   bottom?: true;
};

export default function HoverPreviewContainer({
   children,
   mouseX,
   mouseY,
   bottom,
}: Props) {
   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothX = useSpring(mouseX, smoothOptions);
   const smoothY = useSpring(mouseY, smoothOptions);

   return (
      <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0 }}
         transition={NAV_TRANSITION}
         style={{
            left: smoothX,
            top: smoothY,
            x: "-50%",
            y: bottom ? 0 : "-50%",
         }}
         className="fixed aspect-square w-96 pointer-events-none overflow-hidden border border-line"
      >
         {children}
      </motion.div>
   );
}
