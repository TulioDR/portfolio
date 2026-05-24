import { ENTER_EASE } from "@/constants/TRANSITIONS";
import { motion, MotionValue } from "framer-motion";
type Props = {
   children: React.ReactNode;
   rotate: MotionValue<number>;
};

export default function CircleContainer({ children, rotate }: Props) {
   return (
      <motion.div
         initial={{ scale: 0.8, opacity: 0 }}
         animate={{ scale: 1, opacity: 1, transition: ENTER_EASE }}
         className="flex-1 h-full shrink-0 overflow-hidden relative"
      >
         <div className="absolute inset-0 flex items-center justify-end">
            <motion.div
               style={{ rotate: rotate }}
               className="lg:h-full xl:h-[125%] 2xl:h-[150%] aspect-square border-2 border-white rounded-full shrink-0 relative flex items-center justify-center"
            >
               {children}
            </motion.div>
         </div>
      </motion.div>
   );
}
