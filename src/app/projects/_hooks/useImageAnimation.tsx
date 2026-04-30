import { useAnimationControls } from "framer-motion";
import { useCallback, useMemo } from "react";
import { TOTAL_DURATION } from "../constants/DURATIONS";

export default function useImageAnimation(
   showBackground: boolean,
   setShowBackground: React.Dispatch<React.SetStateAction<boolean>>
) {
   const containerControls = useAnimationControls();
   const imageControls = useAnimationControls();
   const DURATION = showBackground ? 0 : TOTAL_DURATION;

   const EASE = useMemo(() => [0.22, 1, 0.36, 1], []);

   const TRANSITION = useMemo(
      () => ({ duration: DURATION, ease: EASE }),
      [DURATION, EASE]
   );

   const expandCard = useCallback(async () => {
      imageControls.start({ scale: 1, transition: TRANSITION });
      await containerControls.start({
         height: "100vh",
         width: "100vw",
         filter: "brightness(0.5)",
         zIndex: 10,
         transition: TRANSITION,
      });
      setShowBackground(true);
   }, [containerControls, TRANSITION, imageControls, setShowBackground]);

   const setToNormal = useCallback(() => {
      console.log("normal");
      imageControls.start({ scale: 1.5, transition: TRANSITION });
      containerControls.start({
         height: "100%",
         width: "100%",
         filter: "brightness(1)",
         transition: TRANSITION,
         transitionEnd: { zIndex: 0 },
      });
   }, [containerControls, TRANSITION, imageControls]);

   return { containerControls, imageControls, setToNormal, expandCard };
}
