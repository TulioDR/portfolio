import { useEffect, useState } from "react";

export default function useHoveredTitle() {
   const [displayedTitle, setDisplayedTitle] = useState<string | null>(null);
   const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

   useEffect(() => {
      let timeoutId: NodeJS.Timeout;

      if (hoveredTitle) setDisplayedTitle(hoveredTitle);
      else timeoutId = setTimeout(() => setDisplayedTitle(null), 200);

      return () => clearTimeout(timeoutId);
   }, [hoveredTitle]);
   return { displayedTitle, hoveredTitle, setHoveredTitle };
}
