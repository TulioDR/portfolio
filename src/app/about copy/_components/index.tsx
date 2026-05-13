import React from "react";

import useDeviceSizeContext from "@/context/useDeviceSizeContext";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

type Props = {};

export default function Timeline({}: Props) {
   const { isMobile } = useDeviceSizeContext();

   if (isMobile) return <Mobile />;
   return <Desktop />;
}
