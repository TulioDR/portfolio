"use client";

import ReactLenis from "lenis/react";
import BackButton from "./BackButton";
import PageHeader from "./PageHeader";
import Description from "./Description";
import TechStack from "./TechStack";
import Features from "./Features";
import ProjectType from "@/types/ProjectType";
import Background from "./Background";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ENTER_EASE } from "@/constants/TRANSITIONS";

type Props = {
   project: ProjectType | undefined;
   background?: true;
};

export default function ProjectDetailsPageContent({
   project,
   background,
}: Props) {
   useEffect(() => {
      console.log(project);
   }, [project]);

   if (!project) return <></>;
   return (
      <div className="fixed top-0 left-0 w-screen h-svh z-40">
         {background && <Background project={project} />}
         <BackButton />
         <ReactLenis
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden relative"
         >
            <PageHeader project={project} />
            <div className="w-full px-24 pb-4">
               <motion.div
                  initial={{ y: "9rem" }}
                  animate={{ y: "0rem" }}
                  transition={ENTER_EASE}
                  className="bg-text w-full flex flex-col gap-32 p-8 2xl:p-24 -mt-36"
               >
                  <Description project={project} />
                  <TechStack techStack={project.techStack} />
                  <Features features={project.translations.english.features} />
               </motion.div>
            </div>
         </ReactLenis>
      </div>
   );
}
