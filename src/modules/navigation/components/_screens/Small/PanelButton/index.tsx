import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Tooltip from "./Tooltip";
import GestureHandler from "@/components/GestureHandler";
import usePageTransitionContext from "@/context/PageTransitionContext";

type Props = {
   text: string;
   href: string;
   number: number;
};

export default function PanelButton({ text, href, number }: Props) {
   const [restart, setRestart] = useState(false);
   const [isHovered, setIsHovered] = useState(false);

   const handleEnter = () => {
      setRestart((prev) => !prev);
      setIsHovered(true);
   };

   const handleLeave = () => {
      setIsHovered(false);
   };
   const { startNavigation } = usePageTransitionContext();
   const handleClick = () => startNavigation(href);

   return (
      <GestureHandler
         onEnter={handleEnter}
         onLeave={handleLeave}
         onClick={handleClick}
         className={`rounded-sm relative py-1 px-2 select-none text-left ${
            isHovered ? "bg-black text-white" : "text-black"
         }`}
      >
         {isHovered && <Tooltip number={number} />}
         <AnimatedText
            restart={restart}
            text={text}
            className="text-4xl xl:text-5xl 2xl:text-7xl font-black uppercase tracking-tighter pointer-events-none"
         />
      </GestureHandler>
   );
}
