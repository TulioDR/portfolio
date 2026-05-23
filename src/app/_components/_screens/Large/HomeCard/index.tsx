import { useState } from "react";
import Tooltip from "./Tooltip";
import AnimatedText from "@/components/AnimatedText";
import TransitionLink from "@/modules/pageTransition/components/TransitionLink";
import RecommendedTooltip from "./RecommendedTooltip";
import { motion, useAnimate } from "framer-motion";
import { HOME_CARD_SELECTOR } from "@/app/_constants/ANIMATION_CLASSNAMES";

type Props = {
   className?: string;
   text: string;
   href: string;
   onMouseEnter: () => void;
   onMouseLeave: () => void;
   number: number;
   recommended?: true;
};

export default function HomeCard({
   recommended,
   className = "",
   text,
   href,
   onMouseEnter,
   onMouseLeave,
   number,
}: Props) {
   const [scope, animate] = useAnimate();
   const [restart, setRestart] = useState(false);
   const [isHovered, setIsHovered] = useState(false);

   const handleEnter = () => {
      onMouseEnter();
      setRestart((prev) => !prev);
      setIsHovered(true);
      animate("." + HOME_CARD_SELECTOR, { z: -49 });
   };

   const handleLeave = () => {
      onMouseLeave();
      setIsHovered(false);
      animate("." + HOME_CARD_SELECTOR, { z: 0 });
   };

   return (
      <div
         ref={scope}
         style={{ transformStyle: "preserve-3d" }}
         className={`relative flex-1 ${className}`}
      >
         <motion.div
            initial={{ z: -49 }}
            className={`w-full h-full ${HOME_CARD_SELECTOR}`}
         >
            <div
               className={`w-full h-full rounded-sm flex items-center justify-center shadow-lg
               ${isHovered ? "bg-black text-white" : "text-black bg-white"}
            `}
            >
               {recommended && <RecommendedTooltip />}
               <AnimatedText
                  restart={restart}
                  text={text}
                  className="text-4xl xl:text-[2vw] font-black uppercase"
               />
               {isHovered && <Tooltip number={number} />}
            </div>
         </motion.div>
         <TransitionLink
            href={href}
            onPointerEnter={handleEnter}
            onPointerLeave={handleLeave}
            className="absolute inset-0 pointer-events-auto"
         />
         <motion.div
            style={{ z: -50 }}
            className="absolute inset-0 bg-white rounded-sm opacity-60"
         />
      </div>
   );
}
