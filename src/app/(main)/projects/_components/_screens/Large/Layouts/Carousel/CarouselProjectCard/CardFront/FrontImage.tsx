import ProjectType from "@/types/ProjectType";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
   isHovered: boolean;
   project: ProjectType;
};

export default function FrontImage({ isHovered, project }: Props) {
   return (
      <div className="w-full h-full overflow-hidden">
         <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full"
         >
            <Image
               alt={project.link}
               src={project.landingImg || project.showcaseImg}
               sizes="100%"
               fill
               priority
               className="object-cover"
            />
         </motion.div>
      </div>
   );
}
