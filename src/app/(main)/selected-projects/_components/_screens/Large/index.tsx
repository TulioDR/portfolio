"use client";

import { SELECTED_PROJECTS } from "@/data/projects";
import PageTitle from "@/components/Typography/PageTitle";
import useLanguageContext from "@/context/LanguageContext";
import { useState } from "react";
import ProjectSelector from "./ProjectSelector";
import SelectedProject from "./SelectedProject";
import PageDescription from "@/components/Typography/PageDescription";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";
import { ENTER_EASE } from "@/constants/TRANSITIONS";
import { motion } from "framer-motion";

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
            <motion.div
               initial={{ y: "100%", opacity: 0 }}
               animate={{
                  y: isLoaded ? "0%" : "100%",
                  opacity: isLoaded ? 1 : 0,
               }}
               transition={ENTER_EASE}
               className="absolute bottom-8 w-full h-32 flex justify-center gap-1"
            >
               {SELECTED_PROJECTS.map((project, index) => (
                  <ProjectSelector
                     key={project.title}
                     project={project}
                     onPointerEnter={() => setCurrentIndex(index)}
                     isSelected={index === currentIndex}
                  />
               ))}
            </motion.div>
         </div>
         <div className="flex-1 h-full">
            <motion.div
               initial={{ x: "100%", opacity: 0 }}
               animate={{
                  x: isLoaded ? "0%" : "100%",
                  opacity: isLoaded ? 1 : 0,
               }}
               transition={ENTER_EASE}
               className="w-full h-full pr-8 flex items-center justify-center"
            >
               <SelectedProject currentIndex={currentIndex} />
            </motion.div>
         </div>
      </div>
   );
}
