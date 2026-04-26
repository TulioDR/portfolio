import SkillModel from "@/models/SkillModel";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
   technology: SkillModel;
};

export default function TechnologyCard({ technology }: Props) {
   const getInfo = () => {
      window.open(technology.link, "_blank");
   };

   return (
      <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 1 }}
         onTap={getInfo}
         className="w-full h-24 cursor-pointer bg-white rounded-xl shadow-lg pt-1 px-3 flex flex-col justify-center items-center relative"
      >
         <div className="h-10 relative w-full">
            <Image
               src={technology.logo}
               alt={technology.name}
               fill
               className="object-contain"
               sizes="100%"
            />
         </div>
         <span className="text-xs sm:text-sm">{technology.name}</span>
      </motion.div>
   );
}
