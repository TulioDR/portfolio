"use client";

import Large from "./_screens/Large";
import Small from "./_screens/Small";

type Props = {};

export default function SelectedProjectsContent({}: Props) {
   return (
      <>
         <div className="hidden xl:block">
            <Large />
         </div>
         <div className="xl:hidden">
            <Small />
         </div>
      </>
   );
}
