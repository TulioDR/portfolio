import ProjectType from "@/types/ProjectType";
import Image from "next/image";

type Props = {
   project: ProjectType;
};

export default function BackImage({ project }: Props) {
   return (
      <div className="relative h-screen w-screen shrink-0 brightness-50">
         <Image
            alt={project.link}
            src={project.showcaseImg}
            sizes="100%"
            fill
            priority
            className="object-cover"
         />
      </div>
   );
}
