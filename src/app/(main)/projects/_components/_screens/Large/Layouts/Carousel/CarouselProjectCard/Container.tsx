import { CARD_ASPECT_RATIO } from "@/app/(main)/projects/_constants/ASPECT_RATIO";
import { PROJECT_ANIMATION_DURATION } from "@/app/(main)/projects/_constants/DURATIONS";
import { motion, useMotionValue, useAnimate } from "framer-motion";

import { useEffect } from "react";
type Props = {
   children: React.ReactNode;
   id: string;
   onClick: () => void;
   isSelected: boolean;
};

export default function Container({
   children,
   id,
   onClick,
   isSelected,
}: Props) {
   const INITIAL_Z_INDEX = 10;
   const FINAL_Z_INDEX = 15;
   const OPEN_DURATION = 0.6;
   const CLOSE_DURATION = PROJECT_ANIMATION_DURATION;

   const zIndex = useMotionValue<number>(INITIAL_Z_INDEX);
   const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

   const [scope, animate] = useAnimate();

   useEffect(() => {
      const controls = animate(
         zIndex,
         isSelected ? FINAL_Z_INDEX : INITIAL_Z_INDEX,
         { duration: isSelected ? OPEN_DURATION : CLOSE_DURATION, ease: EASE },
      );
      return () => controls.stop();
   }, [isSelected]);

   useEffect(() => {
      if (isSelected) {
         animate(
            ".size-changer",
            { width: "calc(100vw + 4px)" },
            { duration: OPEN_DURATION, ease: EASE },
         );
      } else {
         animate(
            ".size-changer",
            { width: "100%" },
            { duration: CLOSE_DURATION, ease: EASE },
         );
      }
   }, [isSelected, EASE]);

   return (
      <div
         id={id}
         ref={scope}
         style={{ aspectRatio: CARD_ASPECT_RATIO }}
         className="h-[50svh] flex items-center justify-center max-w-min shrink-0"
         onClick={onClick}
      >
         <motion.div
            style={{ aspectRatio: CARD_ASPECT_RATIO, zIndex }}
            initial={{ width: "100%" }}
            className="size-changer flex items-center justify-center"
         >
            <motion.div
               initial={{ height: 0 }}
               exit={{ height: 0 }}
               transition={{ duration: PROJECT_ANIMATION_DURATION }}
               className="w-full project-card-container shrink-0 overflow-hidden flex items-center justify-center"
            >
               <div className="h-full w-full flex items-center justify-center bg-black border border-line relative overflow-hidden">
                  {children}
               </div>
            </motion.div>
         </motion.div>
      </div>
   );
}
