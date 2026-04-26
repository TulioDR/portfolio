import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";
import React from "react";

type Props = {
   number: number;
};

export default function Tooltip({ number }: Props) {
   const { language } = useLanguageContext();
   const { page } = language.home;

   return (
      <div
         className={`absolute top-1 left-2 text-accent rounded-sm pointer-events-none z-20`}
      >
         <AnimatedText
            initial
            text={`${page} 00${number}`}
            className="w-min uppercase text-left text-[10px] sm:text-xs 2xl:text-sm font-bold leading-tight"
         />
      </div>
   );
}
