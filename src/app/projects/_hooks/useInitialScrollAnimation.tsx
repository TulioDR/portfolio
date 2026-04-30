import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";

export default function useInitialScrollAnimation() {
   const [showHeader, setShowHeader] = useState(false);
   const [scope, animate] = useAnimate();

   const lenis = useLenis();

   const { isLoaded } = usePreloaderContext();
   useEffect(() => {
      const startAnimation = async () => {
         console.log(lenis);
         if (!lenis) return;
         lenis.scrollTo("right", { immediate: true, lock: true });
         if (!isLoaded) return;
         console.log("easing functions");

         lenis.scrollTo("left", {
            duration: 1.5,
            lock: true,
            easing: (x) =>
               x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
         });
         await animate(
            ".project-card-container",
            { height: "100%" },
            { duration: 0.5, delay: stagger(0.1, { from: "last" }) },
         );
         animate(".project-card-container", { overflow: "visible" });
         setShowHeader(true);
      };
      startAnimation();
   }, [lenis, isLoaded, animate]);

   // function easingFunction(x: number): number {
   //    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
   // }

   return { showHeader, scope };
}
