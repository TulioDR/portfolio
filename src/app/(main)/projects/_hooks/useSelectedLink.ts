import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function useSelectedLink() {
   const pathname = usePathname();
   const previousPathRef = useRef<string | null>(null);

   const [selectedLink, setSelectedLink] = useState<string | null>(null);

   const changeSelectedLink = (link: string) => {
      // if (selectedLink) setSelectedLink(null);
      // else setSelectedLink(link);

      setSelectedLink(link);
   };

   useEffect(() => {
      if (previousPathRef.current) {
         const wasOnModal = previousPathRef.current.startsWith("/projects/");
         const isBackOnHome = pathname === "/projects";

         if (wasOnModal && isBackOnHome) {
            console.log("modal closed");
            setSelectedLink(null);
         }
      }

      previousPathRef.current = pathname;
   }, [pathname]);

   return { selectedLink, changeSelectedLink };
}
