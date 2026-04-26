import useLanguageContext from "@/context/LanguageContext";
import React from "react";

type Props = {};

export default function BackComponent({}: Props) {
   const { language } = useLanguageContext();
   const { coder, developer, engineer } = language.home.flipCards;
   return (
      <div className="flex flex-col gap-2 items-center justify-center text-sm sm:text-base text-black bg-text h-full w-full">
         <div>{coder}</div>
         <div>{developer}</div>
         <div>{engineer}</div>
      </div>
   );
}
