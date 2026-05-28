import projects from "@/data/projects";
import { MotionValue } from "framer-motion";
import GridProjectCard from "./GridProjectCard";
import ProjectsReactLenis from "../../../../ProjectsReactLenis";
import useProjectsLenisScroll from "@/app/(main)/projects/_hooks/useProjectsLenisScroll";
import { useParams } from "next/navigation";

type Props = {
   currentScroll: MotionValue<number>;
};

export default function Grid({ currentScroll }: Props) {
   const { scrollRef } = useProjectsLenisScroll(currentScroll);

   const params = useParams();
   const projectParam = params.project;
   return (
      <ProjectsReactLenis scrollRef={scrollRef}>
         <div className="h-screen w-full pointer-events-none"></div>
         <div className="w-full grid grid-cols-2 gap-x-8 gap-y-16 2xl:gap-x-16 2xl:gap-y-32 -mt-36 min-h-max px-24 pb-8">
            {projects.map((project, index) => (
               <GridProjectCard
                  key={project.title}
                  project={project}
                  isLeft={index % 2 !== 0}
                  isSelected={projectParam === project.link}
               />
            ))}
         </div>
      </ProjectsReactLenis>
   );
}
