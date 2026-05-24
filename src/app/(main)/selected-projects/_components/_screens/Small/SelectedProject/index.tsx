import ProjectCardBody from "@/app/(main)/projects/_components/ProjectCardBody";
import ProjectType from "@/types/ProjectType";
import Image from "next/image";
import Link from "next/link";

type Props = {
   project: ProjectType;
};

export default function SelectedProject({ project }: Props) {
   return (
      <Link
         href={`/projects/${project.link}`}
         className="h-full flex-1 overflow-hidden relative"
      >
         <Image
            src={project.showcaseImg}
            alt={project.title}
            fill
            sizes="100%"
            className="object-cover"
         />
         <div className="w-full h-full flex items-center justify-center bg-black/70 relative px-4">
            <div className="w-full sm:w-3/4 md:w-2/5 flex flex-col ">
               <div className="bg-white w-full aspect-video relative">
                  <Image
                     src={project.landingImg || project.showcaseImg}
                     alt={project.title}
                     fill
                     sizes="100%"
                     className="object-cover"
                  />
               </div>
               <ProjectCardBody project={project} />
            </div>
         </div>
      </Link>
   );
}
