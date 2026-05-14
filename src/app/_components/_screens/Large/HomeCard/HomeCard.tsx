import { useState } from "react";
import Tooltip from "./Tooltip";
import AnimatedText from "@/components/AnimatedText";
import TransitionLink from "@/modules/pageTransition/components/TransitionLink";

type Props = {
   className?: string;
   text: string;
   href: string;
   onMouseEnter: () => void;
   onMouseLeave: () => void;
   number: number;
};

export default function HomeCard({
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
         className={`relative w-full flex-1 ${className}`}
      >
         <TransitionLink
            href={href}
            onPointerEnter={handleEnter}
            onPointerLeave={handleLeave}
            style={{ transform: `translateZ(${50}px)` }}
            className={`w-full h-full rounded-sm flex items-center justify-center pointer-events-auto shadow-lg
               ${isHovered ? "bg-black text-white" : "text-black bg-white"}
            `}
         >
            <AnimatedText
               restart={restart}
               text={text}
               className="text-4xl xl:text-4xl 2xl:text-5xl font-black uppercase tracking-tighter pointer-events-none"
            />
            {isHovered && <Tooltip number={number} />}
         </TransitionLink>
         <div className="absolute inset-0 bg-white rounded-sm opacity-60" />
      </div>
   );
}
