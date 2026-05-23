import { useState } from "react";
import Tooltip from "./Tooltip";
import AnimatedText from "@/components/AnimatedText";
import TransitionLink from "@/modules/pageTransition/components/TransitionLink";
import RecommendedTooltip from "./RecommendedTooltip";
import { motion } from "framer-motion";

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
   const [restart, setRestart] = useState(false);
   const [isHovered, setIsHovered] = useState(false);

   const handleEnter = () => {
      onMouseEnter();
      setRestart((prev) => !prev);
      setIsHovered(true);
   };

   const handleLeave = () => {
      onMouseLeave();
      setIsHovered(false);
   };

   return (
      <div
         style={{ transformStyle: "preserve-3d" }}
         className={`relative flex-1 ${className}`}
      >
         <motion.div
            animate={{ z: isHovered ? -49 : 0 }}
            className="w-full h-full"
         >
            <div
               className={`w-full h-full rounded-sm flex items-center justify-center  shadow-lg
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
