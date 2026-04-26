import { AnimatePresence, motion } from "framer-motion";

type Props = {
   isOnFocus: boolean;
};

export default function InputBorder({ isOnFocus }: Props) {
   const duration: number = 0.4;
   const container = {
      initial: {},
      animate: { transition: { staggerChildren: duration } },
      exit: { transition: { staggerChildren: duration, staggerDirection: -1 } },
   };

   const itemX = {
      initial: { width: 0 },
      animate: { width: "100%", transition: { duration } },
      exit: { width: 0, transition: { duration } },
   };
   const itemY = {
      initial: { height: 0 },
      animate: { height: "100%", transition: { duration } },
      exit: { height: 0, transition: { duration } },
   };
   return (
      <AnimatePresence>
         {isOnFocus && (
            <>
               <motion.div
                  variants={container}
                  initial="initial"
                  animate="animate"
                  exit="exit"
               >
                  <motion.div
                     className="absolute left-0 top-0 w-[3px] bg-main-orange"
                     variants={itemY}
                  />
                  <motion.div
                     className="absolute left-0 bottom-0 h-[3px] bg-main-orange"
                     variants={itemX}
                  />
               </motion.div>
               <motion.div
                  variants={container}
                  initial="initial"
                  animate="animate"
                  exit="exit"
               >
                  <motion.div
                     className="absolute left-0 top-0 h-[3px] bg-main-orange"
                     variants={itemX}
                  />
                  <motion.div
                     className="absolute right-0 top-0 w-[3px] bg-main-orange"
                     variants={itemY}
                  />
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
}
