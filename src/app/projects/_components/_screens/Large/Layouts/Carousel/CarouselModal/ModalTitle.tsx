import { motion } from "framer-motion";
import ProjectType from "@/types/ProjectType";
import { PROJECT_ANIMATION_DURATION } from "@/app/projects/_constants/DURATIONS";
import CardText from "../../Grid/GridProjectCard/CardText";
import LearnMoreButton from "./LearnMoreButton";

type Props = {
   project: ProjectType;
};

export default function ModalTitle({ project }: Props) {
   return (
      <div className="flex flex-col gap-8 w-full">
         <div className="flex justify-between items-stretch w-full gap-4">
            <CardText text={project.title} className="text-5xl" />
            <LearnMoreButton />
         </div>
         <motion.div
            initial={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: PROJECT_ANIMATION_DURATION }}
            className="h-px bg-line"
         />
         <div className="flex w-full justify-between mb-8">
            <CardText text="Front-End" />
            <CardText text="Next.js" />
         </div>
      </div>
   );
}
