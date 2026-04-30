import ProjectType from "@/types/ProjectType";
import Image from "next/image";

type Props = {
   project: ProjectType;
};

export default function CardFrontImg({ project }: Props) {
   return (
      <div className="h-full w-full absolute top-0 left-0 z-10 flex justify-center items-center bg-linear-to-t from-black/70 to-transparent">
         <div className="h-auto lg:h-2/5 w-4/5 lg:w-auto aspect-video relative">
            <Image
               src={project.landingImg || project.showcaseImg}
               alt={project.title}
               fill
               sizes="100%"
               className="object-cover"
            />
         </div>
      </div>
   );
}
