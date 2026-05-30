"use client";

import { SELECTED_PROJECTS } from "@/data/projects";
import PageTitle from "@/components/Typography/PageTitle";
import useLanguageContext from "@/context/LanguageContext";
import { useState } from "react";
import ProjectSelector from "./ProjectSelector";
import SelectedProject from "./SelectedProject";
import PageDescription from "@/components/Typography/PageDescription";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";
import ProjectSelectorContainer from "./ProjectSelectorContainer";
import SelectedProjectContainer from "./SelectedProjectContainer";

type Props = {};

export default function Large({}: Props) {
   const { language } = useLanguageContext();
   const { title, description } = language.selectedProjects;

   const [currentIndex, setCurrentIndex] = useState<number>(0);

   const { isLoaded } = usePreloaderContext();

   return (
      <div className="w-full h-svh flex items-center justify-center overflow-hidden">
         <div className="flex-2 h-full flex flex-col justify-center items-center relative">
            {isLoaded && (
               <>
                  <PageTitle title={title} className="w-min" />
                  <div className="lg:w-96">
                     <PageDescription text={description} />
                  </div>
               </>
            )}
            <ProjectSelectorContainer>
               {SELECTED_PROJECTS.map((project, index) => (
                  <ProjectSelector
                     key={project.title}
                     project={project}
                     onPointerEnter={() => setCurrentIndex(index)}
                     isSelected={index === currentIndex}
                  />
               ))}
            </ProjectSelectorContainer>
         </div>
         <div className="flex-1 h-full">
            <SelectedProjectContainer>
               <SelectedProject currentIndex={currentIndex} />
            </SelectedProjectContainer>
         </div>
      </div>
   );
}
