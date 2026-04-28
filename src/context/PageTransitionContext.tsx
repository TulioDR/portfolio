"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface PageTransitionContextInterface {
   targetRoute: string | null;
   startNavigation: (url: string) => void;
   completeNavigation: () => void;
}

const PageTransitionContext = createContext(
   {} as PageTransitionContextInterface,
);

export default function usePageTransitionContext() {
   return useContext(PageTransitionContext);
}

type Props = {
   children: React.ReactNode;
};

export function PageTransitionContextProvider({ children }: Props) {
   const router = useRouter();
   const pathname = usePathname();
   const [targetRoute, setTargetRoute] = useState<string | null>(null);

   const startNavigation = (url: string) => {
      setTargetRoute(url);
   };
   const completeNavigation = () => {
      if (targetRoute) router.push(targetRoute);
   };
   useEffect(() => setTargetRoute(null), [pathname]);

   const value: PageTransitionContextInterface = {
      targetRoute,
      startNavigation,
      completeNavigation,
   };

   return (
      <PageTransitionContext.Provider value={value}>
         {children}
      </PageTransitionContext.Provider>
   );
}
