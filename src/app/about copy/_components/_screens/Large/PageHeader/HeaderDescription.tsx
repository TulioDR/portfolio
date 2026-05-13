import { motion } from "framer-motion";
import { EXIT_EASE } from "@/constants/TRANSITIONS";

type Props = {
   animationControls: any;
};

export default function HeaderDescription({ animationControls }: Props) {
   const container = {
      initial: {},
      animate: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
      exit: {},
   };

   const item = {
      initial: { y: "100%" },
      animate: {
         y: "0%",
         transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
      exit: { y: "-100%", transition: EXIT_EASE },
   };

   return (
      <motion.div
         variants={container}
         initial="initial"
         animate={animationControls}
         exit="exit"
         className="flex-1 flex flex-col items-end font-semibold uppercase gap-5 leading-none tracking-widest"
      >
         <div className="overflow-hidden">
            <motion.div className="block" variants={item}>
               Coder
            </motion.div>
         </div>
         <div className="overflow-hidden">
            <motion.div className="block" variants={item}>
               Developer
            </motion.div>
         </div>
         <div className="overflow-hidden">
            <motion.div className="block" variants={item}>
               Engineer
            </motion.div>
         </div>
      </motion.div>
   );
}
