import PhaseType from "@/app/about/_types/PhaseType";
import {
   AnimatePresence,
   motion,
   MotionValue,
   useTransform,
} from "framer-motion";
type Props = {
   phase: PhaseType;
   rotateAngle: number;
   parentRotate: MotionValue<number>;
   isSelected: boolean;
   onClick: () => void;
};

export default function RadialNode({
   phase,
   rotateAngle,
   parentRotate,
   isSelected,
   onClick,
}: Props) {
   const counterRotate = useTransform(parentRotate, (r) => -r - rotateAngle);

   return (
      <motion.div
         style={{ rotate: rotateAngle }}
         className="absolute inset-0 flex justify-end items-center pointer-events-none"
      >
         <div className="flex justify-center w-1/4">
            <motion.button
               style={{ rotate: counterRotate }}
               onClick={onClick}
               className={`text-text uppercase relative flex items-center justify-center rounded-full hover:bg-about active:bg-about pointer-events-auto p-8 cursor-pointer`}
            >
               <AnimatePresence>
                  {isSelected && (
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                           scale: 1,
                           transition: { duration: 0.6, type: "spring" },
                        }}
                        exit={{ scale: 0, transition: { duration: 0.2 } }}
                        className="absolute bg-accent inset-0 rounded-full"
                     />
                  )}
               </AnimatePresence>

               <span className="material-symbols-outlined text-9xl! relative!">
                  {phase.icon}
               </span>
            </motion.button>
         </div>
      </motion.div>
   );
}
