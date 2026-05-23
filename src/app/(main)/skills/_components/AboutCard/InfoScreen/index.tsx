import { AnimatePresence, motion } from "framer-motion";
import InfoScreenContainer from "./InfoScreenContainer";
import AnimatedText from "@/components/AnimatedText";

type Props = {
   title: string;
   text: string;
   showInfo: boolean;
   isPowerOn: boolean;
};

export default function InfoScreen({
   title,
   text,
   showInfo,
   isPowerOn,
}: Props) {
   return (
      <AnimatePresence>
         {isPowerOn && (
            <motion.div exit={{ opacity: 1, transition: { duration: 0.2 } }}>
               <AnimatePresence>
                  {showInfo && (
                     <InfoScreenContainer>
                        <AnimatedText
                           className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-black uppercase"
                           text={title}
                        />
                        <AnimatedText
                           className="text-xs md:text-sm xl:text-base font-thin"
                           text={text}
                        />
                     </InfoScreenContainer>
                  )}
               </AnimatePresence>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
