import ProjectType from "@/types/ProjectType";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

export default function useProjectAutoScroll(selectedP: ProjectType | null) {
   const lenis = useLenis();

   useEffect(() => {
      if (!selectedP) return;
      if (!lenis) return;

      const card = document.getElementById(selectedP.title)!;
      const viewportWidth = window.innerWidth;
      const elementWidth = card.clientWidth;
      const centerOffset = -(viewportWidth / 2) + elementWidth / 2;

      lenis.scrollTo(card, {
         duration: 0.8,
         offset: centerOffset,
      });
   }, [selectedP, lenis]);

   return {};
}
