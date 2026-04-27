"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// import useDeviceSizeContext from "@/context/useDeviceSizeContext";
import QuickNavigation from "./QuickNavigation";
import NavButtons from "./NavButtons";
import PanelNavigation from "./PanelNavigation";
import AnimationContainer from "./AnimationContainer";
import { XL_MEDIA_QUERY } from "@/constants/MEDIA_QUERIES";
import { useMediaQuery } from "react-responsive";
import useIsLoadedContext from "@/context/IsLoadedContext";

export default function Navigation() {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

   const { targetRoute } = useIsLoadedContext();
   useEffect(() => {
      setIsMenuOpen(false);
   }, [targetRoute]);

   const isSmall = useMediaQuery({ maxWidth: XL_MEDIA_QUERY });

   return (
      <>
         <AnimatePresence>
            {isMenuOpen && (
               <AnimationContainer>
                  {isSmall ? <PanelNavigation /> : <QuickNavigation />}
               </AnimationContainer>
            )}
         </AnimatePresence>
         <NavButtons
            isSmall={isSmall}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
         />
      </>
   );
}
