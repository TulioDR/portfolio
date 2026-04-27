import useLanguageContext from "@/context/LanguageContext";
import React from "react";

type Props = {};

export default function TranslateIcon({}: Props) {
   const { isEnglish } = useLanguageContext();
   return (
      <span className="absolute top-1 right-2 font-semibold text-accent">
         {isEnglish ? "EN" : "ES"}
      </span>
   );
}
