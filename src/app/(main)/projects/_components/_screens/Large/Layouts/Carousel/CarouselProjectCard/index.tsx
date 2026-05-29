import Container from "./Container";
import BackImage from "./BackImage";
import ProjectType from "@/types/ProjectType";
import CardFront from "./CardFront";
import { AnimatePresence } from "framer-motion";

type Props = {
   project: ProjectType;
   isSelected: boolean;
   hoveredTitle: string | null;
   setHoveredTitle: React.Dispatch<React.SetStateAction<string | null>>;
   openCard: (project: ProjectType) => void;
   openedLink: string | null;
   setOpenedLink: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function CarouselProjectCard({
   setHoveredTitle,
   project,
   isSelected,
   hoveredTitle,
   openCard,
   openedLink,
   setOpenedLink,
}: Props) {
   const handleClick = () => {
      openCard(project);
   };

   const handleHoveredTitle = (
      latest: number,
      entryThreshold: number,
      exitThreshold: number,
   ) => {
      if (latest >= entryThreshold && latest <= exitThreshold) {
         if (hoveredTitle !== project.title) setHoveredTitle(project.title);
      } else {
         if (hoveredTitle === project.title) setHoveredTitle(null);
      }
   };

   return (
      <>
         <Container
            id={project.title}
            onClick={handleClick}
            isSelected={isSelected}
         >
            <BackImage project={project} isSelected={isSelected} />
            <AnimatePresence propagate>
               {!openedLink && (
                  <CardFront
                     isSelected={isSelected}
                     project={project}
                     handleHoveredTitle={handleHoveredTitle}
                     setOpenedLink={setOpenedLink}
                  />
               )}
            </AnimatePresence>
         </Container>
      </>
   );
}
