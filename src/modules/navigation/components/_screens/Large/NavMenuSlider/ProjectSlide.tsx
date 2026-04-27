import ProjectType from "@/types/ProjectType";
import Image from "next/image";
import { useExtractColors } from "react-extract-colors";

type Props = {
   project: ProjectType;
};

export default function ProjectSlide({ project }: Props) {
   const { lighterColor } = useExtractColors(project.showcaseImg.src);
   return (
      <div
         style={{ backgroundColor: lighterColor || "white" }}
         className="w-full aspect-square flex items-center justify-center"
      >
         <div className="aspect-video w-11/12 relative">
            <Image
               src={project.showcaseImg}
               alt={project.title}
               fill
               sizes="100%"
            />
         </div>
      </div>
   );
}
