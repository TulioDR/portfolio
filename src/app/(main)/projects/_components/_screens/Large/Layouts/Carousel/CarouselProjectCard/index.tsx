import Container from "./Container";
import BackImage from "./BackImage";
import FrontImage from "./FrontImage";
import ProjectType from "@/types/ProjectType";

type Props = {
   project: ProjectType;
   isSelected: boolean;
   setSelectedP: React.Dispatch<React.SetStateAction<ProjectType | null>>;
   hoveredTitle: string | null;
   setHoveredTitle: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function CarouselProjectCard({
   setHoveredTitle,
   project,
   isSelected,
   hoveredTitle,
   setSelectedP,
}: Props) {
   const handleClick = () => {
      if (isSelected) return;
      setSelectedP(project);
   };

   return (
      <>
         <Container
            id={project.title}
            onClick={handleClick}
            isSelected={isSelected}
         >
            <BackImage project={project} isSelected={isSelected} />
            <FrontImage
               isSelected={isSelected}
               project={project}
               hoveredTitle={hoveredTitle}
               setHoveredTitle={setHoveredTitle}
            />
         </Container>
      </>
   );
}
