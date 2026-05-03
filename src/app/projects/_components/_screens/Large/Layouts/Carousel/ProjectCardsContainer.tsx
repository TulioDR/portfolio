import React from "react";
import { CARD_ASPECT_RATIO } from "@/app/projects/_constants/ASPECT_RATIO";
import { AnimationScope } from "framer-motion";

type Props = {
   children: React.ReactNode;
   scope: AnimationScope<any>;
};

export default function ProjectCardsContainer({ children, scope }: Props) {
   const spacerWidth = `calc(50vw - (50vh * ${CARD_ASPECT_RATIO}) / 2)`;
   return (
      <div ref={scope} className="h-svh flex items-center min-w-max">
         <div className="h-full w-screen pointer-events-none" />
         <div className={`gap-4 2xl:gap-8 h-1/2 flex -ml-32`}>{children}</div>
         <div
            style={{ minWidth: spacerWidth }}
            className="h-full shrink-0 pointer-events-none"
         />
      </div>
   );
}
