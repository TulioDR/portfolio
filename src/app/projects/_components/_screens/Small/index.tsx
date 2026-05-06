import projects from "@/data/projects";
import Header from "../../Header";
import DeviceMotionProjectCard from "../Large/Layouts/Grid/GridProjectCard";
import ReactLenis from "lenis/react";
import { useMotionValue } from "framer-motion";

type Props = {};

export default function Small({}: Props) {
   const motionValue = useMotionValue(0);

   return (
      <ReactLenis className="w-screen h-svh overflow-y-auto px-4">
         <Header smoothScroll={motionValue} />
         <div className="w-full grid sm:grid-cols-2 gap-y-16 sm:gap-8 -mt-24 pb-24">
            {projects.map((project) => (
               <DeviceMotionProjectCard key={project.title} project={project} />
            ))}
         </div>
      </ReactLenis>
   );
}
