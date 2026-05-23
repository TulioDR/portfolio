import ProjectType from "@/types/ProjectType";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
   project: ProjectType;
   onPointerEnter: () => void;
   isSelected: boolean;
};

export default function ProjectSelector({
   project,
   onPointerEnter,
   isSelected,
}: Props) {
   return (
      <div
         onPointerEnter={onPointerEnter}
         className="relative h-full aspect-video border border-line"
      >
         <Image
            src={project.showcaseImg}
            alt={project.title}
            fill
            className="object-cover z-10"
            sizes="100%"
         />

         {isSelected && (
            <motion.div
               layoutId="selected-project-selector"
               transition={{ duration: 0.6, type: "spring" }}
               className="-inset-1 bg-accent absolute"
            />
         )}
      </div>
   );
}
