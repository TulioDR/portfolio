import { ENTER_EASE } from "@/constants/TRANSITIONS";
import usePreloaderContext from "@/modules/preloader/context/PreloaderContext";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function SelectedProjectContainer({ children }: Props) {
   const { isLoaded } = usePreloaderContext();
   return (
      <motion.div
         initial={{ x: "100%", opacity: 0 }}
         animate={{
            x: isLoaded ? "0%" : "100%",
            opacity: isLoaded ? 1 : 0,
         }}
         transition={ENTER_EASE}
         className="w-full h-full pr-8 flex items-center justify-center"
      >
         {children}
      </motion.div>
   );
}
