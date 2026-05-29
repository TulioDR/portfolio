import ProjectType from "@/types/ProjectType";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
   project: ProjectType;
   isSelected: boolean;
};

export default function BackImage({ project, isSelected }: Props) {
   return (
      <div className="h-screen w-screen shrink-0 brightness-50 overflow-hidden">
         <motion.div
            animate={{
               scale: isSelected ? 1 : 1.4,
               transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            className="w-full h-full relative"
         >
            <Image
               alt={project.link}
               src={project.showcaseImg}
               sizes="100%"
               fill
               priority
               className="object-cover"
            />
         </motion.div>
      </div>
   );
}
