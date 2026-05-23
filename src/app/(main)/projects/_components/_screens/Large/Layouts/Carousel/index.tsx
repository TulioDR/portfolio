import CarouselMarks from "./CarouselMarks";
import ProjectType from "@/types/ProjectType";
import { AnimatePresence, MotionValue } from "framer-motion";
import { useState } from "react";
import ScrollableContent from "./ScrollableContent";
import CarouselModal from "./CarouselModal";
import ProjectsReactLenis from "../../../../ProjectsReactLenis";
import useProjectsLenisScroll from "@/app/(main)/projects/_hooks/useProjectsLenisScroll";

type Props = {
   currentScroll: MotionValue<number>;
   isInitialAnimation: boolean;
   setIsInitialAnimation: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Carousel({
   currentScroll,
   isInitialAnimation,
   setIsInitialAnimation,
}: Props) {
   const { scrollRef } = useProjectsLenisScroll(currentScroll);
   const [selectedP, setSelectedP] = useState<ProjectType | null>(null);
   const onWheel = () => {
      if (selectedP) setSelectedP(null);
   };

   return (
      <ProjectsReactLenis
         scrollRef={scrollRef}
         onWheel={onWheel}
         orientation="horizontal"
      >
         <CarouselMarks />

         <ScrollableContent
            selectedP={selectedP}
            setSelectedP={setSelectedP}
            isInitialAnimation={isInitialAnimation}
            setIsInitialAnimation={setIsInitialAnimation}
         />

         <AnimatePresence>
            {selectedP && (
               <CarouselModal
                  selectedProject={selectedP}
                  setSelectedProject={setSelectedP}
               />
            )}
         </AnimatePresence>
      </ProjectsReactLenis>
   );
}
