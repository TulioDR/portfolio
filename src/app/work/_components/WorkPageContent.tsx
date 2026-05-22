"use client";

import PageHeader from "./PageHeader";
import WorkCard from "./WorkCard";
import ReactLenis from "lenis/react";

type Props = {};

export default function WorkPageContent({}: Props) {
   return (
      <ReactLenis root>
         <div className="px-4 lg:px-24 pb-24 lg:pb-4">
            <PageHeader />
            <div className="grid grid-cols-1 gap-8 w-full -mt-24 lg:-mt-36">
               {Array.from({ length: 2 }).map((_, index) => (
                  <WorkCard key={index} />
               ))}
            </div>
         </div>
      </ReactLenis>
   );
}
