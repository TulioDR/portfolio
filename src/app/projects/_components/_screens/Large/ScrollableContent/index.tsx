import useInitialScrollAnimation from "@/app/projects/_hooks/useInitialScrollAnimation";
import ProjectCardsContainer from "./ProjectCardsContainer";
import SpecialProjectCard from "./SpecialProjectCard";
import projects from "@/data/projects";
import ProjectType from "@/types/ProjectType";
import HoveredTitle from "./HoveredTitle";
import useHoveredTitle from "@/app/projects/_hooks/useHoveredTitle";
import useProjectAutoScroll from "@/app/projects/_hooks/useProjectAutoScroll";
import Header from "../../../Header";
type Props = {
   setSelectedP: React.Dispatch<React.SetStateAction<ProjectType | null>>;
   selectedP: ProjectType | null;
};

export default function ScrollableContent({ setSelectedP, selectedP }: Props) {
   const { showHeader, scope } = useInitialScrollAnimation();
   const { displayedTitle, hoveredTitle, setHoveredTitle } = useHoveredTitle();
   useProjectAutoScroll(selectedP);

   return (
      <>
         <div ref={scope} className="h-svh flex items-center min-w-max">
            <Header showHeader={showHeader} />
            <ProjectCardsContainer>
               {projects.map((project) => (
                  <SpecialProjectCard
                     key={project.title}
                     project={project}
                     setSelectedP={setSelectedP}
                     isSelected={project.link === selectedP?.link}
                     hoveredTitle={hoveredTitle}
                     setHoveredTitle={setHoveredTitle}
                  />
               ))}
            </ProjectCardsContainer>
         </div>
         <HoveredTitle displayedTitle={showHeader ? displayedTitle : null} />
      </>
   );
}
