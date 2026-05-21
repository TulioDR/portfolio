import GridProjectCard from "@/app/projects/_components/_screens/Large/Layouts/Grid/GridProjectCard";
import ProjectsReactLenis from "@/app/projects/_components/ProjectsReactLenis";
import useProjectsLenisScroll from "@/app/projects/_hooks/useProjectsLenisScroll";
import projects from "@/data/projects";
import { MotionValue } from "framer-motion";

type Props = {
   currentScroll: MotionValue<number>;
};

export default function Grid({ currentScroll }: Props) {
   const { scrollRef } = useProjectsLenisScroll(currentScroll);
   return (
      <ProjectsReactLenis scrollRef={scrollRef}>
         <div className="h-screen w-full pointer-events-none"></div>
         <div className="w-full grid grid-cols-2 gap-x-8 gap-y-16 2xl:gap-x-16 2xl:gap-y-32 -mt-36 min-h-max px-32 pb-8">
            {projects.map((project) => (
               <GridProjectCard key={project.title} project={project} />
            ))}
         </div>
      </ProjectsReactLenis>
   );
}
