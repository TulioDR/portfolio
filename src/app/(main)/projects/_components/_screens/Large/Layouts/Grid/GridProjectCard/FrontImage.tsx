import ProjectType from "@/types/ProjectType";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
   project: ProjectType;
   isHovered: boolean;
   isSelected: boolean;
};

export default function FrontImage({ project, isHovered, isSelected }: Props) {
   return (
      <div className="inset-0 absolute flex justify-center items-center">
         <motion.div
            initial={false}
            animate={{ scale: isSelected ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="w-4/5 aspect-video"
         >
            <motion.div
               layout
               animate={{ scale: isHovered ? 1.05 : 1 }}
               transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
               className="w-full h-full relative"
            >
               <Image
                  src={project.landingImg || project.showcaseImg}
                  alt={project.title}
                  className="object-cover w-full h-full"
               />
            </motion.div>
         </motion.div>
      </div>
   );
}
