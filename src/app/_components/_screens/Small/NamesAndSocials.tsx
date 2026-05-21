import { createPortal } from "react-dom";
import MyName from "../../MyName";
import Socials from "@/components/Socials";
import { useEffect, useState } from "react";

type Props = {};

export default function NamesAndSocials({}: Props) {
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return <></>;
   return createPortal(
      <div className="w-full flex flex-col items-center justify-center gap-2 fixed bottom-4 lg:hidden">
         <MyName />
         <Socials tooltipPosition="top" />
      </div>,
      document.body || undefined,
   );
}
