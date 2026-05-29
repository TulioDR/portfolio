import CarouselMarks from "./CarouselMarks";
import ProjectType from "@/types/ProjectType";
import { AnimatePresence, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollableContent from "./ScrollableContent";
import CarouselModal from "./CarouselModal";
import ProjectsReactLenis from "../../../../ProjectsReactLenis";
import useProjectsLenisScroll from "@/app/(main)/projects/_hooks/useProjectsLenisScroll";
import { useParams } from "next/navigation";
import PROJECTS from "@/data/projects";

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
   const [openedLink, setOpenedLink] = useState<string | null>(null);

   const onWheel = () => {
      if (openedLink) return;
      if (selectedP) setSelectedP(null);
   };

   const params = useParams();
   useEffect(() => {
      const projectLink = params.project as string;
      const exists = PROJECTS.some((p) => p.link === projectLink);
      setOpenedLink(exists ? projectLink : null);
   }, [params.project, PROJECTS]);

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
            openedLink={openedLink}
            setOpenedLink={setOpenedLink}
            isInitialAnimation={isInitialAnimation}
            setIsInitialAnimation={setIsInitialAnimation}
         />

         <AnimatePresence>
            {selectedP && !openedLink && (
               <CarouselModal
                  selectedProject={selectedP}
                  setSelectedProject={setSelectedP}
               />
            )}
         </AnimatePresence>
      </ProjectsReactLenis>
   );
}
