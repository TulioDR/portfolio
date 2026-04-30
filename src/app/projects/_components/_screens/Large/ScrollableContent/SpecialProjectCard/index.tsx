import Container from "./Container";
import { useEffect } from "react";
import { useAnimationControls } from "framer-motion";
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

export default function SpecialProjectCard({
   setHoveredTitle,
   project,
   isSelected,
   hoveredTitle,
   setSelectedP,
}: Props) {
   const containerControls = useAnimationControls();
   useEffect(() => {
      if (isSelected) containerControls.start("isSelected");
      else containerControls.start("isNotSelected");
   }, [isSelected, containerControls]);

   const handleClick = () => {
      if (isSelected) return;
      setSelectedP(project);
   };

   return (
      <>
         <Container
            id={project.title}
            controls={containerControls}
            onClick={handleClick}
            isSelected={isSelected}
         >
            <BackImage project={project} />
            <FrontImage
               project={project}
               hoveredTitle={hoveredTitle}
               setHoveredTitle={setHoveredTitle}
            />
         </Container>
      </>
   );
}
