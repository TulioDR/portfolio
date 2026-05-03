import ProjectType from "@/types/ProjectType";
import Image from "next/image";

type Props = {
   project: ProjectType;
};

export default function FrontImage({ project }: Props) {
   return (
      <div className="inset-0 absolute flex justify-center items-center">
         <div className="w-4/5 aspect-video relative">
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
