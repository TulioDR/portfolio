import { createContext, useContext, useState } from "react";
import english from "../translations/en/global.json";
import spanish from "../translations/es/global.json";

const IdiomContext = createContext();

export function useIdiom() {
   return useContext(IdiomContext);
}

export default function IdiomProvider({ children }) {
   const [currentIdiom, setCurrentIdiom] = useState(english);

   const setSpanish = () => setCurrentIdiom(spanish);
   const setEnglish = () => setCurrentIdiom(english);

   const value = { currentIdiom, setSpanish, setEnglish };
   return (
      <IdiomContext.Provider value={value}>{children}</IdiomContext.Provider>
   );
}
