import projects from "@/data/projects";
import Header from "../../Header";
import DeviceMotionProjectCard from "../Large/Layouts/Grid/GridProjectCard";
import ReactLenis from "lenis/react";

type Props = {};

export default function Small({}: Props) {
   return (
      <ReactLenis root>
         <div className="px-4">
            <div className="flex items-center justify-center w-full h-svh">
               <div className="-translate-y-12">
                  <Header />
               </div>
            </div>
            <div className="w-full grid sm:grid-cols-2 gap-4 md:gap-8 -mt-24 pb-24">
               {projects.map((project) => (
                  <DeviceMotionProjectCard
                     key={project.title}
                     project={project}
                  />
               ))}
            </div>
         </div>
      </ReactLenis>
   );
}
