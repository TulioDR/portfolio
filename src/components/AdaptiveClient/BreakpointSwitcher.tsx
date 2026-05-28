"use client";

import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { XL_MEDIA_QUERY } from "@/constants/MEDIA_QUERIES";

type Props = {
   small: ReactNode;
   large: ReactNode;
   breakpoint?: number;
};

export default function BreakpointSwitcher({
   small,
   large,
   breakpoint = XL_MEDIA_QUERY,
}: Props) {
   const isSmall = useMediaQuery({ maxWidth: breakpoint });

   return <>{isSmall ? small : large}</>;
}
