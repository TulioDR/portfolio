import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   project: ProjectModel;
};

export default function Img({ project }: Props) {
   const [height, setHeight] = useState<number>(0);
   const ref = useRef<HTMLDivElement>(null);
   useEffect(() => {
      const { height } = ref.current!.getBoundingClientRect();
      setHeight(height);
   }, []);

   const containerVariants = {
      initial: { height: 0 },
      animate: { height: "100%", transition: { duration: 0.4 } },
   };

   return (
      <div
         ref={ref}
         key={project.link}
         className="flex-1 h-full flex items-center"
      >
         {height && (
            <motion.div
               variants={containerVariants}
               initial="initial"
               animate="animate"
               className="w-full overflow-hidden flex items-center"
            >
               <div style={{ height }} className="relative w-full">
                  <Image
                     src={project.showcaseImg}
                     alt={project.title}
                     fill
                     sizes="100%"
                     className="object-cover"
                  />
               </div>
            </motion.div>
         )}
      </div>
   );
}
