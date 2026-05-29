"use client";

import React, { useEffect, useState } from "react";
import ScrollAdvice from "./ScrollAdvice";
import projects from "@/data/projects";
import NavigationButton from "./NavigationButton";
import ProjectType from "@/types/ProjectType";

type Props = {
   selectedProject: ProjectType;
   setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType | null>>;
};

export default function CarouselModal({
   selectedProject,
   setSelectedProject,
}: Props) {
   const [currentIndex, setCurrentIndex] = useState<number>(0);
   useEffect(() => {
      setCurrentIndex(projects.indexOf(selectedProject));
   }, [selectedProject]);

   const goPrev = () => {
      setSelectedProject(projects[currentIndex - 1]);
   };
   const goNext = () => {
      setSelectedProject(projects[currentIndex + 1]);
   };

   return (
      <div className="fixed z-20 top-0 left-0 w-screen h-svh text-white flex items-center pointer-events-none">
         <div className="flex h-[50svh] w-full">
            <NavigationButton
               left
               onClick={goPrev}
               disabled={currentIndex <= 0}
            />
            <div className="aspect-video h-full shrink-0" />
            <NavigationButton
               onClick={goNext}
               disabled={currentIndex >= projects.length - 1}
            />
         </div>
         <ScrollAdvice />
      </div>
   );
}
