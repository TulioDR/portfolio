import useDeviceSizeContext from "@/context/useDeviceSizeContext";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useEffect, useState } from "react";

type Props = {};

export default function ProjectsBackground({}: Props) {
   const { isMobile } = useDeviceSizeContext();

   const [swipeValue, setSwipeValue] = useState<boolean>(false);
   useEffect(() => {
      const interval = setInterval(() => {
         setSwipeValue((prev) => !prev);
      }, 1500);
      return () => clearInterval(interval);
   }, []);

   if (isMobile) return <Mobile swipeValue={swipeValue} />;
   return <Desktop swipeValue={swipeValue} />;
}
