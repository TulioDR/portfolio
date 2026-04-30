"use client";

import React, { useEffect, useState } from "react";
import ModalTitle from "./ModalTitle";
import ScrollAdvice from "./ScrollAdvice";
import projects from "@/data/projects";
import NavigationButton from "./NavigationButton";
import LearnMoreButton from "./LearnMoreButton";
import ProjectType from "@/types/ProjectType";

type Props = {
   selectedProject: ProjectType;
   setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType | null>>;
};

export default function ProjectsModal({
   selectedProject,
   setSelectedProject,
}: Props) {
   const [currentIndex, setCurrentIndex] = useState<number>(0);
   const [isLast, setIsLast] = useState(false);
   const [isFirst, setIsFirst] = useState(false);

   useEffect(() => {
      setCurrentIndex(projects.indexOf(selectedProject));
   }, [selectedProject]);

   useEffect(() => {
      setIsLast(currentIndex >= projects.length - 1);
      setIsFirst(currentIndex <= 0);
   }, [currentIndex]);

   const goPrev = () => {
      if (isFirst) return;
      setSelectedProject(projects[currentIndex - 1]);
   };
   const goNext = () => {
      if (isLast) return;
      setSelectedProject(projects[currentIndex + 1]);
   };

   const [showPanel, setShowPanel] = useState<boolean>(false);
   useEffect(() => {
      const timer = setTimeout(() => setShowPanel(true), 500);
      return () => clearTimeout(timer);
   }, []);

   if (!showPanel) return <></>;
   return (
      <div className="fixed z-20 top-0 left-0 w-screen h-svh text-white pointer-events-none flex flex-col">
         <div className="w-full flex-1 flex justify-center items-center">
            <ModalTitle title={selectedProject.title} />
         </div>
         <div className="flex">
            <NavigationButton left onClick={goPrev} disabled={isFirst} />
            <div className="aspect-video h-[50vh]" />
            <NavigationButton onClick={goNext} disabled={isLast} />
         </div>
         <div className="w-full flex-1 flex items-center justify-center">
            <LearnMoreButton />
         </div>
         <ScrollAdvice />
      </div>
   );
}
