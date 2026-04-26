import { IconType } from "@/app/_types/IconType";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
   selectedIcon: IconType;
   children: React.ReactNode;
};

export default function CircularScreenAnimation({
   selectedIcon,
   children,
}: Props) {
   return (
      <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0 }}
         transition={{ duration: 0.1 }}
         style={{ transformStyle: "preserve-3d" }}
         className="w-full h-full absolute inset-0"
      >
         <AnimatePresence propagate>
            <motion.div
               key={selectedIcon}
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               exit={{ scale: 0 }}
               transition={{ duration: 0.1 }}
               style={{ transformStyle: "preserve-3d" }}
               className="absolute inset-0 flex items-center justify-center"
            >
               {children}
            </motion.div>
         </AnimatePresence>
      </motion.div>
   );
}
