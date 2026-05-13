import { useEffect, useState } from "react";
import ScrollMark from "./ScrollMark";
import AnimatedText from "@/components/AnimatedText";
import useTextRestart from "@/hooks/useTextRestart";

type Props = {};

export default function FinalMessage({}: Props) {
   const [isPhaseActive, setIsPhaseActive] = useState<boolean>(false);

   const { restart, handleRestart } = useTextRestart();

   useEffect(() => {
      if (isPhaseActive) handleRestart();
   }, [isPhaseActive, handleRestart]);

   return (
      <div className="w-full h-svh flex items-center">
         <div className="flex w-full items-center pb-1">
            <div className="h-1 flex-1 bg-white/10">
               <ScrollMark setIsPhaseActive={setIsPhaseActive} />
            </div>
            <AnimatedText
               text="To be continued..."
               restart={restart}
               className="uppercase"
            />
            <div className="h-1 flex-1"></div>
         </div>
      </div>
   );
}
