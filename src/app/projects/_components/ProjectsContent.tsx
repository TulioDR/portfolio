"use client";

import { useMediaQuery } from "react-responsive";
import Large from "./_screens/Large";
import { LG_MEDIA_QUERY } from "@/constants/MEDIA_QUERIES";
import Small from "./_screens/Small";
import { useEffect, useState } from "react";

export default function ProjectsContent() {
   const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);
   const isSmall = useMediaQuery({ maxWidth: LG_MEDIA_QUERY });

   useEffect(() => {
      setIsSmallScreen(isSmall);
   }, [isSmall]);

   if (isSmallScreen === null) return <></>;
   return <>{isSmallScreen ? <Small /> : <Large />}</>;
}
