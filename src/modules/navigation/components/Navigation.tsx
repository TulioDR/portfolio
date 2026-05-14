"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavButtons from "./NavButtons";
import AnimationContainer from "./AnimationContainer";
import { XL_MEDIA_QUERY } from "@/constants/MEDIA_QUERIES";
import { useMediaQuery } from "react-responsive";
import Large from "./_screens/Large";
import Small from "./_screens/Small";
import usePageTransitionContext from "@/modules/pageTransition/context/PageTransitionContext";

export default function Navigation() {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

   const { targetRoute } = usePageTransitionContext();
   useEffect(() => {
      setIsMenuOpen(false);
   }, [targetRoute]);

   const isSmall = useMediaQuery({ maxWidth: XL_MEDIA_QUERY });

   const [isSmallPage, setIsSmallPage] = useState<boolean>(false);
   useEffect(() => {
      setIsSmallPage(isSmall);
   }, [isSmall]);

   return (
      <>
         <AnimatePresence>
            {isMenuOpen && (
               <AnimationContainer>
                  {isSmall ? <Small /> : <Large />}
               </AnimationContainer>
            )}
         </AnimatePresence>
         <NavButtons
            isSmall={isSmallPage}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
         />
      </>
   );
}
