import { SkillSlideType } from "@/app/(main)/skills/_types/SkillType";
import AnimatedText from "@/components/AnimatedText";
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
         className="flex-1 w-full rounded-md flex items-center justify-center border border-gray-400 bg-gray-400 hover:bg-white active:bg-white relative py-2 xl:py-0 cursor-pointer"
      >
         <div>
            <AnimatedText
               className={`text-xs sm:text-sm relative z-20
            ${isActive ? "text-white" : "text-black"}  
         `}
               text={slide.name}
            />
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
