"use client";

import PageHeader from "./PageHeader";
import WorkCard from "./WorkCard";
import ReactLenis from "lenis/react";

type Props = {};

export default function WorkPageContent({}: Props) {
   return (
      <ReactLenis root>
         <div className="px-4 lg:px-32 pb-24 lg:pb-8">
            <PageHeader />
            <div className="grid grid-cols-1 gap-8 w-full -mt-24 lg:-mt-32">
               {Array.from({ length: 2 }).map((_, index) => (
                  <WorkCard key={index} />
               ))}
            </div>
         </div>
      </ReactLenis>
   );
}
