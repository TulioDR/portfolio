import projects from "@/data/projects";
import Header from "../../Header";
import DeviceMotionProjectCard from "../Large/Layouts/Grid/GridProjectCard";
import { useMotionValue } from "framer-motion";
import ProjectsReactLenis from "../../ProjectsReactLenis";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";

type Props = {};

export default function Small({}: Props) {
   const motionValue = useMotionValue(0);

   const { isLoaded } = usePreloaderContext();

   return (
      <ProjectsReactLenis>
         <div className="px-4">
            <Header showHeader={isLoaded} smoothScroll={motionValue} />
            <div className="w-full grid sm:grid-cols-2 gap-y-16 gap-x-8 -mt-24 pb-24">
               {projects.map((project) => (
                  <DeviceMotionProjectCard
                     key={project.title}
                     project={project}
                  />
               ))}
            </div>
         </div>
      </ProjectsReactLenis>
   );
}
