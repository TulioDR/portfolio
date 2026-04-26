import projects from "@/assets/projects";
import React from "react";
import PreviewTitle from "../../PreviewTitle";
import useLanguageContext from "@/context/LanguageContext";
import Img from "./Img";

type Props = {};

export default function SelectedProjectsPV({}: Props) {
   const selectedProjects = [projects[0], projects[1], projects[2]];

   const { language } = useLanguageContext();
   const { selectedProjects: selectedTR } = language.home.preview;

   return (
      <div className="w-full h-full p-5">
         <div className="w-full h-full relative flex gap-5">
            <div className="w-full h-full top-0 absolute left-0 flex justify-center items-center z-10 bg-gradient-to-t from-transparent via-black/80 to-transparent">
               <PreviewTitle text={selectedTR} />
            </div>
            {selectedProjects.map((project) => (
               <Img key={project.link} project={project} />
            ))}
         </div>
      </div>
   );
}
