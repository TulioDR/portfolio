import ProjectType from "@/types/ProjectType";
import FrontImage from "../../Grid/GridProjectCard/FrontImage";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
   project: ProjectType;
   isSelected: boolean;
   index: number;
};

export default function ProjectListSlide({
   project,
   isSelected,
   index,
}: Props) {
   return (
      <motion.div
         style={{ y: `${index * 100}%` }}
         className="absolute inset-0 overflow-hidden"
      >
         <Image
            src={project.showcaseImg}
            alt={project.title}
            fill
            sizes="100%"
            className="object-cover w-full h-full brightness-75"
         />
         <FrontImage
            isHovered={false}
            project={project}
            isSelected={isSelected}
         />
      </motion.div>
   );
}
