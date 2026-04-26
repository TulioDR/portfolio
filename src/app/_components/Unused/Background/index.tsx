import React from "react";
import { MotionValue } from "framer-motion";
import useDeviceSizeContext from "@/context/useDeviceSizeContext";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

type Props = {
   x: MotionValue<string>;
   y: MotionValue<string>;
};

export default function Background({ x, y }: Props) {
   const { isMobile } = useDeviceSizeContext();

   if (isMobile) return <Mobile />;
   return <Desktop x={x} y={y} />;
}
