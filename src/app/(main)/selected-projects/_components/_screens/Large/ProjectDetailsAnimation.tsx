import { ENTER_EASE, EXIT_EASE } from "@/constants/TRANSITIONS";
import { SELECTED_PROJECTS } from "@/data/projects";
import ProjectType from "@/types/ProjectType";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

export default function ProjectDetailsAnimation({}: Props) {
   const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
      null,
   );

   const params = useParams();
   useEffect(() => {
      const projectParams = params.project as string;
      const index = SELECTED_PROJECTS.findIndex(
         (p) => p.link === projectParams,
      );
      if (index >= 0) {
         setSelectedProject(SELECTED_PROJECTS[index]);
      } else {
         setSelectedProject(null);
      }
   }, [params]);

   return (
      <AnimatePresence>
         {selectedProject && (
            <motion.div
               initial={{ y: "100%" }}
               animate={{ y: "0%", transition: ENTER_EASE }}
               exit={{ y: "-100%", transition: EXIT_EASE }}
               className="fixed inset-0 overflow-hidden z-20"
            >
               <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: "0%", transition: ENTER_EASE }}
                  exit={{ y: "100%", transition: EXIT_EASE }}
                  className="w-full h-full overflow-hidden"
               >
                  <Image
                     src={selectedProject.showcaseImg}
                     alt={selectedProject.title}
                     fill
                     className="object-cover"
                     sizes="100%"
                  />
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
