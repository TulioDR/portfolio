import React from "react";
import { motion } from "framer-motion";
import useDeviceSizeContext from "@/context/useDeviceSizeContext";

type Props = {
   children: React.ReactNode;
   containerRef: React.RefObject<HTMLDivElement>;
   onUpdate: (e: any) => void;
   onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function ScaleAnimationContainer({
   children,
   containerRef,
   onUpdate,
   onMouseMove,
}: Props) {
   const { isMobile } = useDeviceSizeContext();
   const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] };
   return (
      <div className="w-screen h-[100svh] overflow-hidden">
         <motion.div
            initial={{
               scale: isMobile ? 2 : 2.2,
               x: isMobile ? "0%" : "calc(50% - 96px)",
            }}
            animate={{ scale: 1, x: "0%" }}
            exit={{
               scale: isMobile ? 2 : 2.2,
               x: isMobile ? "0%" : "calc(50% - 96px)",
            }}
            onUpdate={onUpdate}
            transition={transition}
            ref={containerRef}
            onMouseMove={onMouseMove}
            className="w-full h-full p-4 lg:p-8 bg-text"
         >
            <div className="w-full h-full relative">{children}</div>
         </motion.div>
      </div>
   );
}
