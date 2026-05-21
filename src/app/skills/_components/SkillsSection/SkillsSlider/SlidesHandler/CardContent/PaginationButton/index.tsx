import { SkillSlideType } from "@/app/skills/_types/SkillType";
import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   slide: SkillSlideType;
   isActive: boolean;
};

export default function PaginationButton({ onClick, slide, isActive }: Props) {
   return (
      <button
         onClick={onClick}
         className="flex-1 w-full rounded-md flex items-center justify-center bg-gray-400 relative py-2 xl:py-0"
      >
         <div
            className={`text-sm relative z-20
            ${isActive ? "text-white" : "text-black"}  
         `}
         >
            {slide.name}
         </div>
         {isActive && (
            <motion.div
               style={{ borderRadius: 6 }}
               layoutId="selected-skill"
               className="absolute inset-0 bg-accent z-10"
               transition={{ type: "spring", duration: 0.6 }}
            />
         )}
      </button>
   );
}
