import React from "react";
import { motion } from "framer-motion";
import SkillsPV from "./PagePreview/SkillsPV";
import ContactPV from "./PagePreview/ContactPV";
import AboutPV from "./PagePreview/AboutPV";
import ProjectsPV from "./PagePreview/ProjectsPV";
import SelectedProjectsPV from "./PagePreview/SelectedProjectsPV";
import ProjectsBackground from "../../HomeSection/ProjectsBackground";

type Props = {
   selectedNav: string | null;
   showContent: boolean;
};

export default function HomeScreen({ selectedNav, showContent }: Props) {
   return (
      <div
         style={{
            boxShadow:
               "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            textShadow: "none",
         }}
         className={`bg-text p-2 ml-px rounded overflow-hidden w-min ${
            showContent ? "" : "pointer-events-none"
         }`}
      >
         <motion.div className="border-black bg-primary border-8 rounded-sm w-min">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: showContent ? 1 : 0 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
               className="h-[50svh] w-[50svw] relative"
            >
               <div
                  className={`absolute top-0 left-0 w-full h-full z-10 ${
                     !selectedNav ? "" : "opacity-0 pointer-events-none"
                  }`}
               >
                  <ProjectsBackground />
               </div>
               {selectedNav === "skills" && <SkillsPV />}
               {selectedNav === "projects" && <ProjectsPV />}
               {selectedNav === "about" && <AboutPV />}
               {selectedNav === "contact" && <ContactPV />}
               {selectedNav === "selected-projects" && <SelectedProjectsPV />}
            </motion.div>
         </motion.div>
      </div>
   );
}
