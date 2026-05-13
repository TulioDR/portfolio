import AnimatedText from "@/components/AnimatedText";
import ScrollMark from "./ScrollMark";
import { useEffect, useState } from "react";
import useTextRestart from "@/hooks/useTextRestart";

type Props = {
   reverse: boolean;
   phase: any;
};

export default function Phase({ reverse, phase }: Props) {
   const [isPhaseActive, setIsPhaseActive] = useState<boolean>(false);

   const { restart, handleRestart } = useTextRestart();

   useEffect(() => {
      if (isPhaseActive) handleRestart();
   }, [isPhaseActive, handleRestart]);

   const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam unde fugit cum impedit quam omnis, dolorum atque suscipit laboriosam voluptas fuga nulla minus sunt est hic sequi expedita ex maiores quas doloremque culpa temporibus neque! Delectus autem nonexercitationem.";

   return (
      <div
         className={`w-full transition-500
            ${reverse ? "" : ""}
            ${isPhaseActive ? "" : "opacity-30"}
         `}
      >
         <div className="flex items-center mb-4">
            <div className={`h-1 bg-white/10 ${reverse ? "flex-1" : "w-4"}`}>
               <ScrollMark setIsPhaseActive={setIsPhaseActive} />
            </div>
            <AnimatedText
               text={phase.title}
               restart={restart}
               className="uppercase text-white text-xl"
            />
         </div>
         <div
            className={`w-full flex flex-col text-xs sm:text-sm base:text-base gap-4 text-text/50
               ${reverse ? "pl-8 sm:pl-16 md:pl-20 text-right" : "pl-4 pr-8 sm:pr-16 md:pr-20"}
            `}
         >
            <AnimatedText text={text} />
            <AnimatedText text={text} />
         </div>
      </div>
   );
}
