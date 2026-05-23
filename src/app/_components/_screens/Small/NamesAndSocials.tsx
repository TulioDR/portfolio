import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import HomeNameAndSocials from "../../HomeNameAndSocials";

type Props = {};

export default function NamesAndSocials({}: Props) {
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return <></>;
   return createPortal(
      <div className="w-full flex justify-center fixed bottom-4 xl:hidden">
         <HomeNameAndSocials />
      </div>,
      document.body || undefined,
   );
}
