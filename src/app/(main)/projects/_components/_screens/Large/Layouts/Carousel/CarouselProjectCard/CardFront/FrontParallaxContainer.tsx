import { CARD_ASPECT_RATIO } from "@/app/(main)/projects/_constants/ASPECT_RATIO";
import useScrollParallaxImage from "@/app/(main)/projects/_hooks/useScrollParallaxImage";
import { motion, useMotionValueEvent, useTransform } from "framer-motion";
type Props = {
   children: React.ReactNode;
   setScaleImage: React.Dispatch<React.SetStateAction<boolean>>;
   handleHoveredTitle: (
      latest: number,
      entryThreshold: number,
      exitThreshold: number,
   ) => void;
};

export default function FrontParallaxContainer({
   children,
   setScaleImage,
   handleHoveredTitle,
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

      handleHoveredTitle(latest, entryThreshold, exitThreshold);
   });

   return (
      <div
         ref={imgRef}
         style={{ aspectRatio: CARD_ASPECT_RATIO }}
         className="h-[50vh] relative"
      >
         <motion.div
            style={{ right: x, x: x }}
            onPointerEnter={() => setScaleImage(true)}
            onPointerLeave={() => setScaleImage(false)}
            className={`absolute top-0 aspect-video h-full flex items-center justify-center `}
         >
            {children}
         </motion.div>
      </div>
   );
}
