"use client";

import { SELECTED_PROJECTS } from "@/data/projects";
import ProjectPanel from "./ProjectPanel";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

export default function SelectedProjectsContent({}: Props) {
   const [openedProject, setOpenedProject] = useState<number | null>(null);

   return (
      <div className="w-screen h-svh py-24 lg:py-32 px-4 lg:px-8 flex items-center justify-center">
         <div className="overflow-hidden w-full h-full">
            <motion.div
               initial={{ x: "100%" }}
               animate={{ x: "0%" }}
               exit={{ x: "100%" }}
               transition={{ duration: 0.4 }}
               className="w-full h-full overflow-hidden"
            >
               <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full bg-line p-px flex flex-col lg:flex-row gap-px overflow-hidden"
               >
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
               </motion.div>
            </motion.div>
         </div>
      </div>
   );
}
