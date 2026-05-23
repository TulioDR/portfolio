import ProjectType from "@/types/ProjectType";
import FrontImage from "../../Grid/GridProjectCard/FrontImage";
import Image from "next/image";

type Props = {
   project: ProjectType;
};

export default function ProjectListSlide({ project }: Props) {
   return (
      <div className="h-full aspect-square relative overflow-hidden">
         <Image
            src={project.showcaseImg}
            alt={project.title}
            fill
            sizes="100%"
            className="object-cover w-full h-full brightness-75"
         />
         <FrontImage isHovered={false} project={project} />
      </div>
   );
}
