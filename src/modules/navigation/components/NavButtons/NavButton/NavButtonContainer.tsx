import MainTooltip from "@/components/MainTooltip";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
   children: React.ReactNode;
   topLeft?: true;
   topRight?: true;
   bottomRight?: true;
   bottomLeft?: true;
   tooltip: string;
};

export default function NavButtonContainer({
   children,
   topLeft,
   topRight,
   bottomRight,
   bottomLeft,
   tooltip,
}: Props) {
   const [isHovered, setIsHovered] = useState<boolean>(false);
   const onHoverStart = () => setIsHovered(true);
   const onHoverEnd = () => setIsHovered(false);

   return (
      <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0 }}
         transition={{ duration: 0.2 }}
         onPointerEnter={onHoverStart}
         onPointerLeave={onHoverEnd}
         className={`h-16 absolute flex items-center pointer-events-auto cursor-pointer justify-center aspect-square border border-line z-50 select-none
            ${isHovered ? "bg-white text-black" : "bg-black text-text"}
            ${topLeft ? "top-0 left-0" : ""}
            ${topRight ? "top-0 right-0" : ""}
            ${bottomRight ? "bottom-0 right-0" : ""}
            ${bottomLeft ? " bottom-0 left-0" : ""}
         `}
      >
         {isHovered && (
            <MainTooltip
               key={tooltip}
               text={tooltip}
               left={topRight || bottomRight}
               right={topLeft || bottomLeft}
            />
         )}
         {children}
      </motion.div>
   );
}
