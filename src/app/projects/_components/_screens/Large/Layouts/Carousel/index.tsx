import ProjectsReactLenis from "@/app/projects/_components/ProjectsReactLenis";
import CarouselMarks from "./CarouselMarks";
import ProjectType from "@/types/ProjectType";
import { AnimatePresence, MotionValue } from "framer-motion";
import { useState } from "react";
import useProjectsLenisScroll from "@/app/projects/_hooks/useProjectsLenisScroll";
import ScrollableContent from "./ScrollableContent";
import CarouselModal from "./CarouselModal";

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
