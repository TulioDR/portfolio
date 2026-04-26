import React from "react";
import MouseIcon from ".";
import { AnimationControls } from "framer-motion";
import useDeviceSizeContext from "@/context/useDeviceSizeContext";

type Props = {
   controls?: AnimationControls;
};

export default function MobileMouseIcon({ controls }: Props) {
   const { isMobile } = useDeviceSizeContext();

   if (!isMobile) return <></>;
   return (
      <div className="absolute bottom-4 left-0 w-full h-16 flex items-center justify-center">
         <MouseIcon controls={controls} />
      </div>
   );
}
