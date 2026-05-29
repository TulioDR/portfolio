import { motion, MotionValue, useSpring } from "framer-motion";
type Props = {
   mouseX: MotionValue<number>;
   mouseY: MotionValue<number>;
   children: React.ReactNode;
};

export default function ProjectTooltipContainer({
   mouseX,
   mouseY,
   children,
}: Props) {
   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothX = useSpring(mouseX, smoothOptions);
   const smoothY = useSpring(mouseY, smoothOptions);

   return (
      <motion.div
         style={{ left: smoothX, top: smoothY, x: "-50%", y: "-50%" }}
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0 }}
         transition={{ duration: 0.2 }}
         className="py-2 px-4 rounded-md bg-accent fixed z-20 pointer-events-none min-w-max overflow-hidden"
      >
         {children}
      </motion.div>
   );
}
