import ProjectType from "@/types/ProjectType";
import CardText from "./CardText";
import CardLine from "./CardLine";

type Props = {
   project: ProjectType;
   initial?: true;
   whiteLine?: true;
};

export default function ProjectCardBody({
   project,
   initial,
   whiteLine,
}: Props) {
   return (
      <div className="flex flex-col w-full gap-2 lg:gap-4 pt-4 lg:pt-8">
         <div className="flex items-center w-full">
            <CardText text={project.title} initial={initial} title />
         </div>
         <CardLine initial={initial} whiteLine={whiteLine} />
         <div className="flex w-full justify-between items-center">
            <CardText text="Supabase, Next.js" initial={initial} />
            <CardText text="Front-End" initial={initial} />
         </div>
      </div>
   );
}
