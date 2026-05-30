import ProjectCardsContainer from "../ProjectCardsContainer";
import HoveredTitle from "../HoveredTitle";
import useInitialScrollAnimation from "@/app/(main)/projects/_hooks/useInitialScrollAnimation";
import projects from "@/data/projects";
import ProjectType from "@/types/ProjectType";
import useHoveredTitle from "@/app/(main)/projects/_hooks/useHoveredTitle";
import useProjectAutoScroll from "@/app/(main)/projects/_hooks/useProjectAutoScroll";
import { useEffect } from "react";
import CarouselProjectCard from "@/app/(main)/projects/_components/_screens/Large/Layouts/Carousel/CarouselProjectCard";
import { useLenis } from "lenis/react";

type Props = {
   isInitialAnimation: boolean;
   setIsInitialAnimation: React.Dispatch<React.SetStateAction<boolean>>;
   selectedP: ProjectType | null;
   setSelectedP: React.Dispatch<React.SetStateAction<ProjectType | null>>;
   openedLink: string | null;
   setOpenedLink: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function ScrollableContent({
   setIsInitialAnimation,
   isInitialAnimation,
   selectedP,
   setSelectedP,
   openedLink,
   setOpenedLink,
}: Props) {
   const { displayedTitle, hoveredTitle, setHoveredTitle } = useHoveredTitle();
   const { showHeader, scope } = useInitialScrollAnimation(isInitialAnimation);
   useProjectAutoScroll(selectedP);

   useEffect(() => {
      if (showHeader) setIsInitialAnimation(false);
   }, [showHeader]);

   const openCard = (project: ProjectType) => {
      if (project.link === selectedP?.link) return;
      setSelectedP(project);
   };

   const lenis = useLenis();
   useEffect(() => {
      if (!lenis) return;
      if (openedLink) lenis.stop();
      else lenis.start();
   }, [openedLink]);

   return (
      <>
         <ProjectCardsContainer scope={scope}>
            {projects.map((project) => (
               <CarouselProjectCard
                  key={project.title}
                  project={project}
                  isSelected={project.link === selectedP?.link}
                  hoveredTitle={hoveredTitle}
                  setHoveredTitle={setHoveredTitle}
                  openCard={openCard}
                  openedLink={openedLink}
                  setOpenedLink={setOpenedLink}
               />
            ))}
         </ProjectCardsContainer>

         <HoveredTitle displayedTitle={showHeader ? displayedTitle : null} />
      </>
   );
}
