import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Tooltip from "./Tooltip";
import TransitionLink from "@/modules/pageTransition/components/TransitionLink";

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

   return (
      <TransitionLink
         href={href}
         onPointerEnter={handleEnter}
         onPointerLeave={handleLeave}
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
      </TransitionLink>
   );
}
