import React from "react";
import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
   children: React.ReactNode;
   disabled: boolean;
};

export default function Container({
   onClick,
   setIsHovered,
   children,
   disabled,
}: Props) {
   return (
      <motion.button
         onClick={onClick}
         onPointerEnter={() => setIsHovered(true)}
         onPointerLeave={() => setIsHovered(false)}
         exit={{ pointerEvents: "none" }}
         className={`flex-1 h-full flex items-center justify-center cursor-pointer hover:bg-black/20 overflow-hidden pointer-events-auto ${disabled ? "opacity-40 pointer-events-none" : "cursor-pointer"}`}
      >
         {children}
      </motion.button>
   );
}
