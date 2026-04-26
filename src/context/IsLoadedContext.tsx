"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface IsLoadedContextInterface {
   isLoaded: boolean;
   setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
   targetRoute: string | null;
   startNavigation: (url: string) => void;
   completeNavigation: () => void;
}

const IsLoadedContext = createContext({} as IsLoadedContextInterface);

export default function useIsLoadedContext() {
   return useContext(IsLoadedContext);
}

type Props = {
   children: React.ReactNode;
};

export function IsLoadedContextProvider({ children }: Props) {
   const router = useRouter();
   const pathname = usePathname();
   const [isLoaded, setIsLoaded] = useState<boolean>(false);
   const [targetRoute, setTargetRoute] = useState<string | null>(null);

   const startNavigation = (url: string) => {
      setTargetRoute(url);
   };
   const completeNavigation = () => {
      if (targetRoute) router.push(targetRoute);
   };
   useEffect(() => setTargetRoute(null), [pathname]);

   useEffect(() => {
      const handleLoad = () => {
         setTimeout(() => setIsLoaded(true), 1000);
      };
      if (document.readyState === "complete") {
         handleLoad();
      } else {
         window.addEventListener("load", handleLoad);
         return () => window.removeEventListener("load", handleLoad);
      }
   }, []);

   const value: IsLoadedContextInterface = {
      isLoaded,
      setIsLoaded,
      targetRoute,
      startNavigation,
      completeNavigation,
   };

   return (
      <IsLoadedContext.Provider value={value}>
         {children}
      </IsLoadedContext.Provider>
   );
}
