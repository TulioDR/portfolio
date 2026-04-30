import useWindowWidth from "@/hooks/useWindowWidth";
import { useEffect, useState } from "react";

export default function useProjectCardHeight(id: string) {
   const [height, setHeight] = useState<number>(0);

   const { windowWidth } = useWindowWidth();
   useEffect(() => {
      const card = document.getElementById(id)!;
      const { height: newHeight } = card.getBoundingClientRect();
      setHeight(newHeight);
   }, [id, windowWidth]);
   return { height };
}
