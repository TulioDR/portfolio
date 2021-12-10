import { useEffect, useState } from "react";

export default function useScroll() {
   const [onScroll, setOnScroll] = useState(false);

   useEffect(() => {
      const changeOnScroll = () => {
         if (window.scrollY > 0) setOnScroll(true);
         else setOnScroll(false);
      };
      window.addEventListener("scroll", changeOnScroll);
      return () => {
         window.removeEventListener("scroll", changeOnScroll);
      };
   });
   return [onScroll];
}
