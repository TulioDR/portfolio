import ProjectType from "@/types/ProjectType";
import HeaderButton from "./HeaderButton";
import { motion } from "framer-motion";
import { ENTER_EASE } from "@/constants/TRANSITIONS";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   project: ProjectType;
};

export default function PageHeader({ project }: Props) {
   const { language } = useLanguageContext();

   const { repo, visit } = language.projectDetails;

   return (
      <div className="h-svh w-full flex items-center overflow-hidden">
         <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={ENTER_EASE}
            className="w-full overflow-hidden"
         >
            <motion.div
               initial={{ x: "100%" }}
               animate={{ x: 0 }}
               transition={ENTER_EASE}
               className="bg-text text-black flex flex-col xl:flex-row xl:justify-between xl:items-end gap-4 py-4 w-full px-4 xl:px-24"
            >
               <div className="flex flex-col lg:flex-row lg:items-end gap-1">
                  <h1 className=" text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-black uppercase">
                     {project.title}
                  </h1>
                  <span className="text-xs sm:text-sm text-gray-700 -translate-y-1.5">
                     [ Lorem50 text ]
                  </span>
               </div>

               <div className="flex gap-2 justify-end xl:justify-start w-full xl:w-auto">
                  <HeaderButton onClick={() => {}} icon="code" text={repo} />
                  <HeaderButton
                     onClick={() => {}}
                     icon="north_east"
                     text={visit}
                  />
               </div>
            </motion.div>
         </motion.div>
      </div>
   );
}
