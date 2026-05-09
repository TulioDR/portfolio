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
            <PageHeader />
            <div className="mx-auto w-full px-4 lg:px-8 xl:px-main-spacing flex flex-col gap-main-spacing pb-24 lg:pb-8">
               <SkillsSection />
               <StrengthsSection />
            </div>
         </div>
      </ReactLenis>
   );
}
