import { SELECTED_PROJECTS } from "@/data/projects";
import ReactLenis from "lenis/react";
import PageHeader from "./PageHeader";
import SelectedProject from "./SelectedProject";
import { motion } from "framer-motion";
import { useState } from "react";
import NavigationButton from "./NavigationButton";
import { MAIN_EASING } from "@/constants/TRANSITIONS";

type Props = {};

export default function Small({}: Props) {
   const [currentIndex, setCurrentIndex] = useState<number>(0);

   const nextIndex = () => {
      if (currentIndex === SELECTED_PROJECTS.length - 1) return;
      setCurrentIndex((prev) => prev + 1);
   };

   const prevIndex = () => {
      if (currentIndex === 0) return;
      setCurrentIndex((prev) => prev - 1);
   };

   return (
      <ReactLenis root>
         <div className="w-full px-4 lg:px-8">
            <PageHeader />
            <div className="h-svh w-full pt-24 lg:pt-32 -mt-48 lg:-mt-64 pb-4 lg:pb-8 gap-4 lg:gap-8 flex flex-col">
               <div className="w-full flex-1 overflow-hidden relative border border-line">
                  <motion.div
                     style={{
                        width: `${SELECTED_PROJECTS.length * 100}%`,
                     }}
                     animate={{
                        x: `-${(currentIndex / SELECTED_PROJECTS.length) * 100}%`,
                        transition: { duration: 0.5, ease: MAIN_EASING },
                     }}
                     className="absolute top-0 left-0 h-full flex"
                  >
                     {SELECTED_PROJECTS.map((project) => (
                        <SelectedProject
                           key={project.title}
                           project={project}
                        />
                     ))}
                  </motion.div>
                  <div className="absolute gap-2 justify-center pb-4 inset-0 z-20 pointer-events-none flex items-end">
                     {SELECTED_PROJECTS.map((_, index) => (
                        <div
                           key={index}
                           className={`h-2 rounded-full aspect-square ${index === currentIndex ? "bg-accent" : "bg-white"}`}
                        />
                     ))}
                  </div>
               </div>
               <div className="flex h-16 w-full justify-center items-center py-2 gap-2">
                  <NavigationButton
                     onClick={prevIndex}
                     disabled={currentIndex === 0}
                  />
                  <NavigationButton
                     onClick={nextIndex}
                     right
                     disabled={currentIndex === SELECTED_PROJECTS.length - 1}
                  />
               </div>
            </div>
         </div>
      </ReactLenis>
   );
}
