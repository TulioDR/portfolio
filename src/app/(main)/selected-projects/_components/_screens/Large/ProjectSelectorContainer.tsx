import { ENTER_EASE } from "@/constants/TRANSITIONS";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";
import { motion } from "framer-motion";
type Props = {
   children: React.ReactNode;
};

export default function ProjectSelectorContainer({ children }: Props) {
   const { isLoaded } = usePreloaderContext();

   return (
      <motion.div
         initial={{ y: "100%", opacity: 0 }}
         animate={{
            y: isLoaded ? "0%" : "100%",
            opacity: isLoaded ? 1 : 0,
         }}
         transition={ENTER_EASE}
         className="absolute bottom-8 w-full h-32 flex justify-center gap-1"
      >
         {children}
      </motion.div>
   );
}
