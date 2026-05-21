"use client";

import ReactLenis from "lenis/react";
import PageHeader from "./PageHeader";
import SkillsSection from "./SkillsSection";
import StrengthsSection from "./StrengthsSection";

type Props = {};

export default function SkillsPageContent({}: Props) {
   return (
      <ReactLenis root>
         <div className="w-full overflow-hidden">
            <div className="w-full max-w-480 mx-auto ">
               <PageHeader />
               <div className="mx-auto w-full px-4 lg:px-8 xl:px-24 flex flex-col gap-32 pb-24 lg:pb-4 -mt-36">
                  <SkillsSection />
                  <StrengthsSection />
               </div>
            </div>
         </div>
      </ReactLenis>
   );
}
