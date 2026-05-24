import { stagger, Transition, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import {
   HOME_CARD_SELECTOR,
   SCALE_SELECTOR,
} from "../_constants/ANIMATION_CLASSNAMES";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";

export default function useHomeInitialAnimation() {
   const { isLoaded } = usePreloaderContext();
   const [scope, animate] = useAnimate();
   const transition: Transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

   const [startAnimations, setStartAnimations] = useState(false);

   useEffect(() => {
      if (!scope || !isLoaded) return;
      const initialAnimation = async () => {
         await animate(
            "." + SCALE_SELECTOR,
            { scale: 1 },
            { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
         );
         setStartAnimations(true);
         animate(
            "." + HOME_CARD_SELECTOR,
            { z: 0 },
            { delay: stagger(0.1), ...transition },
         );
         console.log("animation finished");
      };
      initialAnimation();
   }, [isLoaded]);

   return { scope, startAnimations };
}
