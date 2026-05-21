import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
   selectedIcon: string;
   children: React.ReactNode;
};

export default function CircularScreenAnimation({
   selectedIcon,
   children,
}: Props) {
   const { isLoaded } = usePreloaderContext();

   return (
      <AnimatePresence propagate>
         <motion.div
            key={selectedIcon}
            initial={{ scale: 0 }}
            animate={{ scale: isLoaded ? 1 : 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.1 }}
            style={{ transformStyle: "preserve-3d" }}
            className="absolute inset-0 flex items-center justify-center"
         >
            {children}
         </motion.div>
      </AnimatePresence>
   );
}
