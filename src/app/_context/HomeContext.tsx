"use client";

import { stagger, Transition, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect } from "react";
import {
   HOME_CARD_SELECTOR,
   SCALE_SELECTOR,
   ICON_SELECTOR,
   CIRCULAR_SELECTOR,
} from "../_constants/ANIMATION_CLASSNAMES";
import { ENTER_EASE, EXIT_EASE } from "@/constants/TRANSITIONS";
import { AnimationScope } from "framer-motion";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";

interface ContextInterface {
   scope: AnimationScope;
   exitAnimation: (href: string) => void;
}

const HomeContext = createContext({} as ContextInterface);
export default function useHomeContext() {
   return useContext(HomeContext);
}

type Props = {
   children: React.ReactNode;
};
export function HomeContextProvider({ children }: Props) {
   const [scope, animate] = useAnimate();
   const router = useRouter();

   const { isLoaded } = usePreloaderContext();
   const transition: Transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

   useEffect(() => {
      if (!scope || !isLoaded) return;
      const initialAnimation = async () => {
         await animate(
            "." + SCALE_SELECTOR,
            { scale: 1 },
            { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
         );
         animate("." + ICON_SELECTOR, { scale: 1 }, ENTER_EASE);
         animate("." + CIRCULAR_SELECTOR, { scale: 1 }, ENTER_EASE);

         animate(
            "." + HOME_CARD_SELECTOR,
            { z: 0 },
            { delay: stagger(0.2), ...transition },
         );
      };
      initialAnimation();
   }, [isLoaded, animate, scope]);

   const exitAnimation = async (href: string) => {
      animate("." + ICON_SELECTOR, { scale: 0 }, { duration: 0.1 });
      await animate("." + SCALE_SELECTOR, { scale: 4 }, EXIT_EASE);
      router.push(href);
   };

   const value: ContextInterface = {
      scope,
      exitAnimation,
   };
   return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
