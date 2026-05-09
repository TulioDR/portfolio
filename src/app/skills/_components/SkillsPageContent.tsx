"use client";

import ReactLenis from "lenis/react";
import Header from "./Header";
import Skills from "./Skills";
import Strengths from "./Strengths";

type Props = {};

export default function SkillsPageContent({}: Props) {
   return (
      <ReactLenis root>
         <div className="w-full overflow-hidden">
            <Header />
            <div className="mx-auto w-full px-4 lg:px-8 xl:px-main-spacing flex flex-col gap-main-spacing pb-24 lg:pb-8">
               <Skills />
               <Strengths />
            </div>
         </div>
      </ReactLenis>
   );
}
