import React from "react";
import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
   children: React.ReactNode;
};

export default function Container({ onClick, setIsHovered, children }: Props) {
   return (
      <div className="h-full flex-1 flex justify-center items-center overflow-hidden">
         <motion.button
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            exit={{ pointerEvents: "none" }}
            className="flex-1 h-full flex items-center justify-center cursor-pointer hover:bg-black/20 pointer-events-auto"
         >
            {children}
         </motion.button>
      </div>
   );
}
