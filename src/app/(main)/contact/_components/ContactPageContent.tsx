"use client";

import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";
import Large from "./ContactForm/_screens/Large";
import Small from "./ContactForm/_screens/Small";

type Props = {};

export default function ContactPageContent({}: Props) {
   const { isLoaded } = usePreloaderContext();
   if (!isLoaded) return <></>;
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
