import AnimatedText from "@/components/AnimatedText";
import { EXIT_EASE } from "@/constants/TRANSITIONS";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   displayedTitle: string | null;
};

export default function HoveredTitle({ displayedTitle }: Props) {
   return (
      <AnimatePresence>
         {displayedTitle && (
            <motion.div className="w-full fixed bottom-4 flex justify-center items-center uppercase h-16 text-xl font-bold">
               <div className="overflow-hidden">
                  <motion.div exit={{ y: "-100%" }} transition={EXIT_EASE}>
                     <AnimatedText
                        key={displayedTitle}
                        text={displayedTitle}
                        initial
                     />
                  </motion.div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
