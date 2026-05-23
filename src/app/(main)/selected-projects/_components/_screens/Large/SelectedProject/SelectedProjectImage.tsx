import ProjectType from "@/types/ProjectType";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
   project: ProjectType;
   isHovered: boolean;
};

export default function SelectedProjectImage({ project, isHovered }: Props) {
   return (
      <div className="h-full aspect-video shrink-0 overflow-hidden">
         <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full relative"
         >
            <Image
               src={project.landingImg || project.showcaseImg}
               alt={project.title}
               fill
               className="object-cover"
               sizes="100%"
            />
         </motion.div>
      </div>
   );
}
