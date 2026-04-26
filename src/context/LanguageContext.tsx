"use client";

import english from "@/translations/en";
import spanish from "@/translations/es";
import TranslationType from "@/translations/types";
import { createContext, useContext, useEffect, useState } from "react";

interface ContextInterface {
   isEnglish: boolean;
   setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
   toggleLanguage: () => void;
   language: TranslationType;
}

const LanguageContext = createContext({} as ContextInterface);
export default function useLanguageContext() {
   return useContext(LanguageContext);
}

type Props = {
   children: React.ReactNode;
};
export function LanguageContextProvider({ children }: Props) {
   const [isEnglish, setIsEnglish] = useState<boolean>(true);
   const toggleLanguage = () => setIsEnglish((prev) => !prev);

   const [language, setLanguage] = useState<TranslationType>(english);

   useEffect(() => {
      if (isEnglish) setLanguage(english);
      else setLanguage(spanish);
   }, [isEnglish]);

   const value: ContextInterface = {
      isEnglish,
      setIsEnglish,
      toggleLanguage,
      language,
   };
   return (
      <LanguageContext.Provider value={value}>
         {children}
      </LanguageContext.Provider>
   );
}
