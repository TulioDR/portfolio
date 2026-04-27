import projects from "@/data/projects";
import React from "react";
import MenuItem from "./MenuItem";
import NAV_ITEMS from "@/constants/NAV_ITEMS";

type Props = {
   setXAxis: React.Dispatch<React.SetStateAction<number | null>>;
   setYAxis: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function NavMenuItems({ setXAxis, setYAxis }: Props) {
   const onEnterMainPage = (xAxis: number) => {
      setXAxis(xAxis);
      setYAxis(0);
   };

   const onEnterSubPage = (xAxis: number, yAxis: number) => {
      setXAxis(xAxis);
      setYAxis(yAxis + 1);
   };

   const onExit = () => {
      setXAxis(null);
      setYAxis(null);
   };

   const selectedProjects = [projects[0], projects[1], projects[2]];

   return (
      <>
         {NAV_ITEMS.map((item, xAxis) => (
            <div key={xAxis} className={`flex-1 h-full flex flex-col`}>
               <MenuItem
                  onMouseEnter={() => onEnterMainPage(xAxis)}
                  onMouseLeave={onExit}
                  title={item.name}
                  href={item.link}
               />
               {item.name === "Projects" &&
                  projects.map((project, yAxis) => (
                     <MenuItem
                        key={yAxis}
                        onMouseEnter={() => onEnterSubPage(xAxis, yAxis)}
                        onMouseLeave={onExit}
                        title={project.title}
                        href={"/projects/" + project.link}
                        subpage
                     />
                  ))}
               {item.link === "/selected-projects" &&
                  selectedProjects.map((project, yAxis) => (
                     <MenuItem
                        key={yAxis}
                        onMouseEnter={() => onEnterSubPage(xAxis, yAxis)}
                        onMouseLeave={onExit}
                        title={project.title}
                        href={"/projects/" + project.link}
                        subpage
                     />
                  ))}
            </div>
         ))}
      </>
   );
}
