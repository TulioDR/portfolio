import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import TranslateIcon from "./TranslateIcon";
import MainTooltip from "@/components/MainTooltip";
import GestureHandler from "@/components/GestureHandler";

type Props = {
   icon: string;
   onClick: () => void;
   topLeft?: true;
   topRight?: true;
   bottomRight?: true;
   bottomLeft?: true;
   show?: boolean;
   translate?: true;
   tooltip: string;
};

export default function NavButton({
   icon,
   onClick,
   topLeft,
   topRight,
   bottomRight,
   bottomLeft,
   show = true,
   translate,
   tooltip,
}: Props) {
   const [isHovered, setIsHovered] = useState<boolean>(false);

   const onHoverStart = () => setIsHovered(true);
   const onHoverEnd = () => setIsHovered(false);

   return (
      <AnimatePresence>
         {show && (
            <GestureHandler
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               exit={{ scale: 0 }}
               transition={{ duration: 0.2 }}
               onClick={onClick}
               onEnter={onHoverStart}
               onLeave={onHoverEnd}
               className={`h-16 absolute flex items-center pointer-events-auto cursor-pointer justify-center aspect-square border border-line z-50 select-none
                  ${isHovered ? "bg-white text-black" : "bg-black text-text"}
                  ${topLeft ? "top-0 left-0" : ""}
                  ${topRight ? "top-0 right-0" : ""}
                  ${bottomRight ? "bottom-0 right-0" : ""}
                  ${bottomLeft ? " bottom-0 left-0" : ""}
               `}
            >
               <div className="relative w-full h-full flex items-center justify-center">
                  {isHovered && (
                     <MainTooltip
                        key={tooltip}
                        text={tooltip}
                        left={topRight || bottomRight}
                        right={topLeft || bottomLeft}
                     />
                  )}
                  <span className="material-symbols-outlined">{icon}</span>
                  {translate && <TranslateIcon />}
               </div>
            </GestureHandler>
         )}
      </AnimatePresence>
   );
}
