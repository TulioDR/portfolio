import { motion } from "framer-motion";
import { LINE_SELECTOR } from "../_constants/LINE_SELECTOR";

type Props = {
   vertical?: true;
   className?: string;
   onAnimationComplete?: () => void;
   reverse?: true;
};

export default function AnimatedLine({
   vertical,
   className = "",
   onAnimationComplete,
   reverse,
}: Props) {
   return (
      <div
         className={`shrink-0 flex 
            ${className}
            ${vertical ? "h-full w-px" : "w-full h-px"}
            ${reverse ? "justify-end items-end" : "justify-start items-start"}
         `}
      >
         <motion.div
            initial={vertical ? { height: 0 } : { width: 0 }}
            exit={vertical ? { height: 0 } : { width: 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={onAnimationComplete}
            className={`bg-line 
               ${LINE_SELECTOR}
               ${vertical ? "w-full" : "h-full"}
            `}
         />
      </div>
   );
}
