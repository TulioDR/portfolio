import { motion, useMotionValueEvent, useTransform } from "framer-motion";
import Image from "next/image";
import ProjectType from "@/types/ProjectType";
import { CARD_ASPECT_RATIO } from "@/app/projects/_constants/ASPECT_RATIO";
import useScrollParallaxImage from "@/app/projects/_hooks/useScrollParallaxImage";

type Props = {
   project: ProjectType;
   hoveredTitle: string | null;
   setHoveredTitle: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function FrontImage({
   project,
   hoveredTitle,
   setHoveredTitle,
}: Props) {
   const { scrollXProgress, imgRef } = useScrollParallaxImage();

   const x = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

   useMotionValueEvent(scrollXProgress, "change", (latest) => {
      if (!imgRef.current) return;

      const cardWidth = imgRef.current.clientWidth;
      const viewportWidth = window.innerWidth;

      const totalDistance = viewportWidth + cardWidth;

      const halfCardPercent = cardWidth / 2 / totalDistance;

      const entryThreshold = 0.5 - halfCardPercent;
      const exitThreshold = 0.5 + halfCardPercent;

      if (latest >= entryThreshold && latest <= exitThreshold) {
         if (hoveredTitle !== project.title) setHoveredTitle(project.title);
      } else {
         if (hoveredTitle === project.title) setHoveredTitle(null);
      }
   });

   return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
         <div
            ref={imgRef}
            style={{ aspectRatio: CARD_ASPECT_RATIO }}
            className="h-[50vh] relative"
         >
            <motion.div
               style={{ right: x, x: x }}
               className="absolute top-0 aspect-video h-full flex items-center justify-center"
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
      </div>
   );
}
