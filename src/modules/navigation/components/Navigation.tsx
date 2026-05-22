"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import AnimationContainer from "./AnimationContainer";
import { XL_MEDIA_QUERY } from "@/constants/MEDIA_QUERIES";
import Large from "./_screens/Large";
import Small from "./_screens/Small";
import usePageTransitionContext from "@/modules/pageTransition/context/PageTransitionContext";
import AdaptiveClient from "@/components/AdaptiveClient";
import dynamic from "next/dynamic";

const NoSSRNavButtons = dynamic(() => import("./NavButtons"), {
   ssr: false,
   loading: () => null,
});

export default function Navigation() {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

   const { targetRoute } = usePageTransitionContext();
   useEffect(() => {
      setIsMenuOpen(false);
   }, [targetRoute]);

   return (
      <>
         <AnimatePresence>
            {isMenuOpen && (
               <AnimationContainer>
                  <AdaptiveClient
                     small={<Small />}
                     large={<Large />}
                     breakpoint={XL_MEDIA_QUERY}
                  />
               </AnimationContainer>
            )}
         </AnimatePresence>
         <NoSSRNavButtons isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </>
   );
}
