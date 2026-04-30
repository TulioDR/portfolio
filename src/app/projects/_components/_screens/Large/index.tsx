"use client";

import { useState } from "react";
import ProjectsModal from "./ProjectsModal";
import { AnimatePresence } from "framer-motion";
import ReactLenis from "lenis/react";
import ProjectType from "@/types/ProjectType";
import ProjectsMarks from "./ProjectsMarks";
import ScrollableContent from "./ScrollableContent";

type Props = {};

export default function Large({}: Props) {
   const [selectedP, setSelectedP] = useState<ProjectType | null>(null);
   const onWheel = () => setSelectedP(null);

   return (
      <ReactLenis
         options={{ orientation: "horizontal" }}
         style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
         }}
         onWheel={onWheel}
         className="h-svh w-screen overflow-x-auto [&::-webkit-scrollbar]:hidden"
      >
         <ProjectsMarks />
         <ScrollableContent selectedP={selectedP} setSelectedP={setSelectedP} />
         <AnimatePresence>
            {selectedP && (
               <ProjectsModal
                  selectedProject={selectedP}
                  setSelectedProject={setSelectedP}
               />
            )}
         </AnimatePresence>
      </ReactLenis>
   );
}
