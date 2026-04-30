import { CARD_ASPECT_RATIO } from "@/app/projects/_constants/ASPECT_RATIO";
import { motion, useMotionValue, animate } from "framer-motion";

import { useEffect } from "react";
type Props = {
   children: React.ReactNode;
   id: string;
   controls: any;
   onClick: () => void;
   isSelected: boolean;
};

export default function Container({
   children,
   id,
   controls,
   onClick,
   isSelected,
}: Props) {
   const zIndex = useMotionValue<number>(1);
   const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

   useEffect(() => {
      const controls = animate(zIndex, isSelected ? 10 : 1, {
         duration: isSelected ? 1 : 0.5,
         ease: EASE,
      });
      return () => controls.stop();
   }, [isSelected]);

   const variants: any = {
      isSelected: {
         // Because of the border with add 2 pixels
         width: "calc(100vw + 2px)",
         transition: { duration: 1, ease: EASE },
      },
      isNotSelected: {
         width: "100%",
         transition: { duration: 0.5, ease: EASE },
      },
   };

   return (
      <div
         id={id}
         style={{ aspectRatio: CARD_ASPECT_RATIO }}
         className="h-full flex items-center max-w-min shrink-0"
         onClick={onClick}
      >
         <motion.div
            // variants={item}
            initial={{ height: 0, overflow: "hidden" }}
            exit={{ height: 0, overflow: "hidden" }}
            className={`w-full h-full flex items-center justify-center project-card-container`}
         >
            <motion.div
               style={{ zIndex, aspectRatio: CARD_ASPECT_RATIO }}
               variants={variants}
               initial={false}
               animate={controls}
               className="flex items-center justify-center shrink-0 relative overflow-hidden bg-black border border-line"
            >
               {children}
            </motion.div>
         </motion.div>
      </div>
   );
}
