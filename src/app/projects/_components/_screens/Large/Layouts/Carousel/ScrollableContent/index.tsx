import ProjectCardsContainer from "../ProjectCardsContainer";
import HoveredTitle from "../HoveredTitle";
import useInitialScrollAnimation from "@/app/projects/_hooks/useInitialScrollAnimation";
import projects from "@/data/projects";
import ProjectType from "@/types/ProjectType";
import useHoveredTitle from "@/app/projects/_hooks/useHoveredTitle";
import useProjectAutoScroll from "@/app/projects/_hooks/useProjectAutoScroll";
import { useEffect } from "react";
import CarouselProjectCard from "@/app/projects/_components/_screens/Large/Layouts/Carousel/CarouselProjectCard";

type Props = {
   isInitialAnimation: boolean;
   setIsInitialAnimation: React.Dispatch<React.SetStateAction<boolean>>;
   selectedP: ProjectType | null;
   setSelectedP: React.Dispatch<React.SetStateAction<ProjectType | null>>;
};

export default function ScrollableContent({
   setIsInitialAnimation,
   isInitialAnimation,
   selectedP,
   setSelectedP,
}: Props) {
   const { displayedTitle, hoveredTitle, setHoveredTitle } = useHoveredTitle();
   const { showHeader, scope } = useInitialScrollAnimation(isInitialAnimation);
   useProjectAutoScroll(selectedP);

   useEffect(() => {
      if (showHeader) setIsInitialAnimation(false);
   }, [showHeader]);

   return (
      <>
         <ProjectCardsContainer scope={scope}>
            {projects.map((project) => (
               <CarouselProjectCard
                  key={project.title}
                  project={project}
                  setSelectedP={setSelectedP}
                  isSelected={project.link === selectedP?.link}
                  hoveredTitle={hoveredTitle}
                  setHoveredTitle={setHoveredTitle}
               />
            ))}
         </ProjectCardsContainer>

         <HoveredTitle displayedTitle={showHeader ? displayedTitle : null} />
      </>
   );
}
