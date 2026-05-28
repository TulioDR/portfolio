import ProjectType from "@/types/ProjectType";
import Image from "next/image";

type Props = {
   project: ProjectType;
};

export default function Background({ project }: Props) {
   return (
      <div className="absolute inset-0">
         <Image
            src={project.showcaseImg}
            alt={project.title}
            className="object-cover w-full h-full"
         />
      </div>
   );
}
