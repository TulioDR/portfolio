import HomeNameAndSocials from "@/app/_components/HomeNameAndSocials";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {};

export default function SmallHomeNameAndSocial({}: Props) {
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => setIsMounted(true), []);

   if (!isMounted) return <></>;

   return createPortal(
      <div className="w-full flex justify-center fixed bottom-4 xl:hidden">
         <HomeNameAndSocials />
      </div>,
      document.body,
   );
}
