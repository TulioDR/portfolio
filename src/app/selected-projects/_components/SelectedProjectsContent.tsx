"use client";

import { SELECTED_PROJECTS } from "@/data/projects";
import ProjectPanel from "./ProjectPanel";
import { useState } from "react";

type Props = {};

export default function SelectedProjectsContent({}: Props) {
   const [openedProject, setOpenedProject] = useState<number | null>(null);

   return (
      <div className="w-screen h-svh py-24 lg:py-32 px-4 lg:px-8">
         <div className="w-full h-full bg-line p-px flex flex-col lg:flex-row gap-px">
            {SELECTED_PROJECTS.map((project, index) => (
               <ProjectPanel
                  project={project}
                  key={project.link}
                  isOpen={openedProject === index}
                  number={index + 1}
                  openProject={() => setOpenedProject(index)}
                  closeProject={() => setOpenedProject(null)}
               />
            ))}
         </div>
      </div>
   );
}
