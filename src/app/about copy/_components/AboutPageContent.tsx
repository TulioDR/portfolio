"use client";

import ReactLenis, { LenisRef } from "lenis/react";
import Small from "./_screens/Small";
import Large from "./_screens/Large";
import { useRef } from "react";

type Props = {};

export default function AboutPageContent({}: Props) {
   const scrollerRef = useRef<LenisRef>(null);

   return (
      <>
         <div className="lg:hidden">
            <ReactLenis
               options={{ orientation: "vertical" }}
               root
               className="w-screen h-svh overflow-auto [&::-webkit-scrollbar]:hidden"
            >
               <Small />
            </ReactLenis>
         </div>
         {/* <div className="hidden lg:block"> */}
         <ReactLenis
            ref={scrollerRef}
            options={{ orientation: "horizontal" }}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="w-screen h-svh overflow-auto [&::-webkit-scrollbar]:hidden"
         >
            <Large scrollerRef={scrollerRef} />
         </ReactLenis>
         {/* </div> */}
      </>
   );
}
