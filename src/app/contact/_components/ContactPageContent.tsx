"use client";

import Large from "./ContactForm/_screens/Large";
import Small from "./ContactForm/_screens/Small";

type Props = {};

export default function ContactPageContent({}: Props) {
   return (
      <div>
         <div className="w-full hidden lg:block">
            <Large />
         </div>
         <div className="w-full lg:hidden">
            <Small />
         </div>
      </div>
   );
}
