import { motion } from "framer-motion";

type Props = {
   icon: string;
   isSelected: boolean;
   onClick: () => void;
};

export default function LayoutSelectorButton({
   icon,
   isSelected,
   onClick,
}: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-full aspect-square flex items-center justify-center pointer-events-auto relative hover:bg-black/10 active:bg-black/10`}
      >
         {isSelected && (
            <motion.div
               layoutId="selected-projects-layout"
               transition={{ duration: 0.6, type: "spring" }}
               className="absolute inset-0 bg-primary rounded-sm"
            />
         )}
         <span className="material-symbols-outlined relative! mix-blend-difference!">
            {icon}
         </span>
      </button>
   );
}
