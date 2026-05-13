import { motion, MotionValue, useTransform } from "framer-motion";
type Props = {
   phase: any;
   rotateAngle: number;
   parentRotate: MotionValue<number>;
   isSelected: boolean;
};

export default function RadialNode({
   phase,
   rotateAngle,
   parentRotate,
   isSelected,
}: Props) {
   const counterRotate = useTransform(parentRotate, (r) => -r - rotateAngle);

   return (
      <motion.div
         style={{ rotate: rotateAngle }}
         className="absolute inset-0 flex justify-end items-center"
      >
         <motion.div className="flex items-center w-1/4 lg:gap-2 lg:px-2 xl:gap-4 xl:px-4 2xl:gap-8 2xl:px-8">
            <div className="h-px flex-1 bg-line/20">
               <motion.div
                  initial={false}
                  animate={{ width: isSelected ? "100%" : "0%" }}
                  className="h-full bg-text"
               />
            </div>
            <motion.div
               style={{ rotate: counterRotate }}
               className="text-base text-text uppercase"
            >
               {phase.title}
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
