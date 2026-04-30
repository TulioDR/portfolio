import AnimatedText from "@/components/AnimatedText";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   displayedTitle: string | null;
};

export default function HoveredTitle({ displayedTitle }: Props) {
   return (
      <AnimatePresence>
         {displayedTitle && (
            <motion.div className="w-full fixed bottom-8 flex justify-center items-center uppercase h-16 text-xl font-bold">
               <div className="overflow-hidden">
                  <motion.div
                     exit={{ y: "-100%" }}
                     transition={{ duration: 0.1 }}
                  >
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
