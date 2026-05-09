import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

type Props = {
   name: string;
   onClick: () => void;
   isActive: boolean;
};

export default function PaginationButton({ name, onClick, isActive }: Props) {
   return (
      <button className="relative block flex-1 bg-gray-400" onClick={onClick}>
         <AnimatedText
            className={`text-xs xl:text-sm z-20 relative duration-200
               ${isActive ? "text-white" : "text-black"}   
            `}
            text={name}
         />
         {isActive && (
            <motion.div
               // style={{ borderRadius: 999 }}
               layoutId="selected-skill"
               className="absolute bottom-0 h-full w-full left-0 bg-accent z-10"
               transition={{ type: "spring", duration: 0.6 }}
            />
         )}
      </button>
   );
}
