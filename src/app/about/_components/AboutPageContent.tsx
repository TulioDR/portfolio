"use client";

import ReactLenis from "lenis/react";
import Large from "./_screens/Large";
import Small from "./_screens/Small";

type Props = {};

export default function AboutPageContent({}: Props) {
   return (
      <ReactLenis root>
         <div className="lg:hidden">
            <Small />
         </div>
         <div className="hidden lg:block">
            <Large />
         </div>
      </ReactLenis>
   );
}
