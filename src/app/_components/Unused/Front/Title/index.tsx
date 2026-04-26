import AnimatedText from "@/components/AnimatedText";
import useLanguageContext from "@/context/LanguageContext";
import React from "react";

type Props = {};

export default function Title({}: Props) {
   const { language } = useLanguageContext();
   const { title } = language.home;

   return (
      <div className="w-full flex-1 flex items-center justify-center">
         <AnimatedText
            text={title}
            className="font-black uppercase tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
         />
      </div>
   );
}
