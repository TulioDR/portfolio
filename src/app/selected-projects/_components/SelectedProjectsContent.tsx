"use client";

import { SELECTED_PROJECTS } from "@/data/projects";
import PageTitle from "@/components/PageTitle";
import useLanguageContext from "@/context/LanguageContext";
import PageDescription from "@/components/PageDescription";
import { useState } from "react";
import ProjectSelector from "./ProjectSelector";
import SelectedProject from "./SelectedProject";

type Props = {};

export default function SelectedProjectsContent({}: Props) {
   const { language } = useLanguageContext();
   const { title, description } = language.selectedProjects;

   const [currentIndex, setCurrentIndex] = useState<number>(0);

   return (
      <div className="w-full h-svh flex items-center justify-center overflow-hidden">
         <div className="flex-2 h-full flex flex-col justify-center items-center relative">
            <PageTitle title={title} className="w-min" />
            <div className="lg:w-96">
               <PageDescription text={description} />
            </div>
            <div className="absolute bottom-8 w-full h-32 flex justify-center gap-1">
               {SELECTED_PROJECTS.map((project, index) => (
                  <ProjectSelector
                     key={project.title}
                     project={project}
                     onPointerEnter={() => setCurrentIndex(index)}
                     isSelected={index === currentIndex}
                  />
               ))}
            </div>
         </div>
         <div className="flex-1 h-full">
            <div className="w-full h-full pr-8 flex items-center justify-center">
               <SelectedProject currentIndex={currentIndex} />
            </div>
         </div>
      </div>
   );
}
