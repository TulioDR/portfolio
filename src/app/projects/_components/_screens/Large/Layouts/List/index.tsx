import ProjectsReactLenis from "@/app/projects/_components/ProjectsReactLenis";
import projects from "@/data/projects";
import ListProjectCard from "./ListProjectCard";
import { MotionValue } from "framer-motion";
import useProjectsLenisScroll from "@/app/projects/_hooks/useProjectsLenisScroll";
import ListHeader from "./ListHeader";

type Props = {
   currentScroll: MotionValue<number>;
};

export default function List({ currentScroll }: Props) {
   const { scrollRef } = useProjectsLenisScroll(currentScroll);
   return (
      <ProjectsReactLenis scrollRef={scrollRef}>
         <div className="h-screen w-full pointer-events-none"></div>
         <div className="w-full flex flex-col -mt-24 min-h-max px-32 z-10 pb-8">
            <ListHeader />
            {projects.map((project) => (
               <ListProjectCard key={project.title} project={project} />
            ))}
         </div>
      </ProjectsReactLenis>
   );
}
