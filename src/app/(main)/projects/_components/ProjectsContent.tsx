"use client";

import Large from "./_screens/Large";
import { LG_MEDIA_QUERY } from "@/constants/MEDIA_QUERIES";
import Small from "./_screens/Small";
import AdaptiveClient from "@/components/AdaptiveClient";

export default function ProjectsContent() {
   return (
      <AdaptiveClient
         small={<Small />}
         large={<Large />}
         breakpoint={LG_MEDIA_QUERY}
      />
   );
}
