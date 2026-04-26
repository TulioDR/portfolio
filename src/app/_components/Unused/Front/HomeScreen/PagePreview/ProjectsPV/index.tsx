import projects from "@/assets/projects";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import PreviewTitle from "../../PreviewTitle";
import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function ProjectsPV({}: Props) {
   const { language } = useLanguageContext();
   const { projects: projectsTR } = language.home.preview;

   const container = {
      initial: { right: 0, x: 0 },
      animate: {
         right: "100%",
         x: "100%",
         transition: {
            staggerChildren: 0.16,
            staggerDirection: -1,
            duration: 1.5,
            ease: [0.65, 0, 0.35, 1],
         },
      },
   };
   return (
      <div className="w-full h-full overflow-hidden flex flex-col items-center justify-center gap-5">
         <PreviewTitle text={projectsTR} />

         <div className="h-[45%] w-full relative">
            <motion.div
               style={{ top: "50%", y: "-50%" }}
               variants={container}
               initial="initial"
               animate="animate"
               className="absolute h-full flex gap-5 px-5"
            >
               {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
               ))}
            </motion.div>
         </div>
      </div>
   );
}
