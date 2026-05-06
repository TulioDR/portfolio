import ProjectType from "@/types/ProjectType";
import BackImage from "./BackImage";
import FrontImage from "./FrontImage";
import { motion } from "framer-motion";
import { PROJECT_ANIMATION_DURATION } from "@/app/projects/_constants/DURATIONS";
import ProjectCardBody from "@/app/projects/_components/ProjectCardBody";

type Props = {
   project: ProjectType;
};

export default function GridProjectCard({ project }: Props) {
   return (
      <div className="w-full flex flex-col overflow-hidden">
         <div className="w-full aspect-square flex justify-center">
            <motion.div
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               exit={{ width: 0 }}
               transition={{ duration: PROJECT_ANIMATION_DURATION }}
               className="h-full aspect-square flex justify-center overflow-hidden"
            >
               <div className="h-full aspect-square relative shrink-0 border border-line overflow-hidden">
                  <BackImage project={project} />
                  <FrontImage project={project} />
               </div>
            </motion.div>
         </div>
         <ProjectCardBody project={project} />
      </div>
   );
}
