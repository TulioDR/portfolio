"use client";

import { MotionValue, useSpring } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";

interface PreloaderContextInterface {
   isLoaded: boolean;
   setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
   progress: MotionValue<number>;
   isFinished: boolean;
   setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreloaderContext = createContext({} as PreloaderContextInterface);

export default function usePreloaderContext() {
   return useContext(PreloaderContext);
}

type Props = {
   children: React.ReactNode;
};

export function PreloaderContextProvider({ children }: Props) {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);
   const [numberValue, setNumberValue] = useState<number>(0);
   const [isFinished, setIsFinished] = useState(false);

   const progress = useSpring(0, {
      stiffness: 35,
      damping: 20,
   });

   useEffect(() => {
      progress.set(numberValue);
   }, [numberValue]);

   useEffect(() => {
      // 1. Start a "fake" progress animation for UX
      const interval = setInterval(() => {
         setNumberValue((prev) => {
            if (prev < 85) return prev + 1; // Slow down near the end
            return prev;
         });
      }, 30);

      const handleLoad = async () => {
         try {
            await document.fonts.ready;
            setNumberValue(100);
         } catch (e) {
            setNumberValue(100);
         }
      };

      if (document.readyState === "complete") {
         handleLoad();
      } else {
         window.addEventListener("load", handleLoad);
      }

      return () => {
         window.removeEventListener("load", handleLoad);
         clearInterval(interval);
      };
   }, []);

   const value: PreloaderContextInterface = {
      isLoaded,
      setIsLoaded,
      progress,
      isFinished,
      setIsFinished,
   };

   return (
      <PreloaderContext.Provider value={value}>
         {children}
      </PreloaderContext.Provider>
   );
}
