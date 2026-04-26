import ProjectModel from "@/models/ProjectModel";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
   project: ProjectModel;
};

export default function ProjectCard({ project }: Props) {
   const item = {
      initial: { height: 0 },
      animate: { height: "100%", transition: { duration: 0.4 } },
   };

   return (
      <div className="h-full aspect-video flex items-center ">
         <motion.div
            variants={item}
            className="w-full flex items-center justify-center overflow-hidden"
         >
            <div className="w-full aspect-video relative flex-shrink-0">
               <Image
                  src={project.showcaseImg}
                  alt={project.title}
                  fill
                  sizes="100%"
                  className="object-cover"
               />
            </div>
         </motion.div>
      </div>
   );
}
