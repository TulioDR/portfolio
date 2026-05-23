import { motion, MotionValue } from "framer-motion";
type Props = {
   children: React.ReactNode;
   rotate: MotionValue<number>;
};

export default function CircleContainer({ children, rotate }: Props) {
   return (
      <div className="flex-1 h-full shrink-0  overflow-hidden relative">
         <div className="absolute inset-0 flex items-center justify-end">
            <motion.div
               style={{ rotate: rotate }}
               className="lg:h-full xl:h-[125%] 2xl:h-[150%] aspect-square border-2 border-white rounded-full shrink-0 relative flex items-center justify-center"
            >
               {children}
            </motion.div>
         </div>
      </div>
   );
}
