import React from "react";
import Desktop from "./Desktop";
import useLanguageContext from "@/context/LanguageContext";
import Mobile from "./Mobile";

type Props = {
   setSelectedNav: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function SelectedProjects({ setSelectedNav }: Props) {
   const { language } = useLanguageContext();
   const { selectedProjects } = language.home.panel;
   return (
      <>
         <div className="hidden sm:block">
            <Desktop
               number={5}
               onMouseEnter={() => setSelectedNav("selected-projects")}
               onMouseLeave={() => setSelectedNav(null)}
               text={selectedProjects}
               href="/selected-projects"
            />
         </div>
         <div className="sm:hidden">
            <Mobile number={5} href="/selected-projects" />
         </div>
      </>
   );
}
