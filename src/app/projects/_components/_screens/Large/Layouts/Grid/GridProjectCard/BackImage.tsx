import useMotionParallaxImage from "@/app/projects/_hooks/useMotionParallaxImage";
import ProjectType from "@/types/ProjectType";
import { useMotionTemplate, useTransform, motion } from "framer-motion";

type Props = {
   project: ProjectType;
   isHovered: boolean;
};

export default function BackImage({ project, isHovered }: Props) {
   const { position, containerRef } = useMotionParallaxImage();

   const x = useTransform(position, [0, 1], ["100%", "0%"]);
   const objectPosition = useMotionTemplate`${x} 50%`;

   return (
      <div ref={containerRef} className="h-full w-full relative brightness-75">
         <motion.img
            style={{ objectPosition }}
            src={project.showcaseImg.src}
            alt={project.title}
            animate={{
               scale: isHovered ? 1 : 1.1,
               transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            className="object-cover w-full h-full"
         />
      </div>
   );
}
