import ProjectType from "@/types/ProjectType";
import CardText from "./CardText";
import CardLine from "./CardLine";
import CardViewButton from "./CardViewButton";
import { useRouter } from "next/navigation";

type Props = {
   project: ProjectType;
   initial?: true;
};

export default function ProjectCardBody({ project, initial }: Props) {
   const router = useRouter();
   const goToProject = () => {
      router.push(`/projects/${project.link}`);
   };
   return (
      <div className="flex flex-col w-full gap-4 lg:gap-8 pt-4 lg:pt-8">
         <div className="flex justify-between items-center w-full gap-4">
            <CardText text={project.title} initial={initial} title />
            <CardViewButton onClick={goToProject} />
         </div>
         <CardLine initial={initial} />
         <div className="flex w-full justify-between">
            <CardText text="Front-End" initial={initial} />
            <CardText text="Next.js" initial={initial} />
         </div>
      </div>
   );
}
