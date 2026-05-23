import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";
import { ENTER_EASE } from "@/constants/TRANSITIONS";

export default function useInitialScrollAnimation(isInitialAnimation: boolean) {
   const [showHeader, setShowHeader] = useState(false);
   const [scope, animate] = useAnimate();

   const lenis = useLenis();

   const { isLoaded } = usePreloaderContext();
   useEffect(() => {
      if (!isInitialAnimation) {
         const quickAnimation = async () => {
            animate(".project-card-container", { height: "100%" }, ENTER_EASE);
            setShowHeader(true);
         };
         quickAnimation();
         return;
      }
      const startAnimation = async () => {
         if (!lenis) return;
         lenis.scrollTo("right", { immediate: true, lock: true });
         if (!isLoaded) return;

         lenis.scrollTo("left", {
            duration: 1.5,
            lock: true,
            easing: (x) =>
               x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
         });
         await animate(
            ".project-card-container",
            { height: "100%" },
            {
               ...ENTER_EASE,
               delay: stagger(0.1, { from: "last" }),
            },
         );
         setShowHeader(true);
      };
      startAnimation();
   }, [lenis, isLoaded, animate, isInitialAnimation, ENTER_EASE]);

   // function easingFunction(x: number): number {
   //    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
   // }

   return { showHeader, scope };
}
