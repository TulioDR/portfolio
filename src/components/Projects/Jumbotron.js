import Container from "components/Container";
import Img from "./Jumbotron/Img";

import { useState } from "react";
import LanguagesUsed from "./LanguagesUsed";

import LanguagesBtn from "./LanguagesBtn";
import JumbotronDescription from "./Jumbotron/JumbotronDescription";
import { useIdiom } from "context/IdiomContext";
import RedirectBtn from "./RedirectBtn";

export default function Jumbotron() {
   const { currentIdiom } = useIdiom();
   const { projects, repository, website } = currentIdiom.projects;

   const [currentProject, setCurrentProject] = useState(projects[0]);

   const [showLanguages, setShowLanguages] = useState(false);
   const toggle = () => {
      setShowLanguages(!showLanguages);
   };

   return (
      <Container>
         <div className="flex space-x-2">
            <div className="w-32 flex flex-col space-y-2">
               {projects.map((project, index) => (
                  <Img
                     key={index}
                     {...{ currentProject, setCurrentProject, project }}
                  />
               ))}
            </div>
            <div className="flex-1 relative text-white overflow-hidden">
               <img
                  src={`/projects/${currentProject.img}`}
                  alt={currentProject.name}
                  className="w-full object-cover xl:h-125 2xl:h-auto"
               />
               <div className="h-full w-full flex flex-col justify-between p-10 absolute top-0 bg-gradient-to-r from-black to-transparent bg-black bg-opacity-40">
                  <div className="flex justify-between items-center">
                     <div className="font-medium text-2xl">
                        {currentProject.year}
                     </div>
                     <LanguagesBtn onClick={toggle} {...{ showLanguages }} />
                  </div>
                  <div className="flex w-full relative">
                     <JumbotronDescription
                        showLanguages={showLanguages}
                        name={currentProject.name}
                        description={currentProject.description}
                     />
                     <LanguagesUsed
                        {...{ showLanguages }}
                        languages={currentProject.languages}
                     />
                     <div className="flex flex-col justify-end space-y-4 ml-8 z-10">
                        <RedirectBtn repo jumbo link="#">
                           {repository}
                        </RedirectBtn>
                        <RedirectBtn website jumbo link="#">
                           {website}
                        </RedirectBtn>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
}
