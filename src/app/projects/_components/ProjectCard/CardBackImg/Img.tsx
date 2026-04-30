import React from "react";
import {
   motion,
   MotionValue,
   useMotionTemplate,
   useTransform,
} from "framer-motion";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   project: ProjectModel;
   position: MotionValue<number>;
   imgRef: React.RefObject<HTMLDivElement>;
};

export default function Img({ project, position, imgRef }: Props) {
   const x = useTransform(position, [0, 1], ["100%", "0%"]);
   const objectPosition = useMotionTemplate`${x} 50%`;

   return (
      <div ref={imgRef} className="h-full w-full relative">
         <motion.img
            style={{ objectPosition }}
            src={project.showcaseImg.src}
            alt={project.link}
            className="object-cover w-full h-full"
         />
      </div>
   );
}
