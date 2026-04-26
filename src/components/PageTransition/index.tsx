import { motion } from "framer-motion";
type Props = {};

export default function PageTransition({}: Props) {
   const container = {
      initial: {},
      exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
   };

   const item = {
      initial: { height: "0%" },
      exit: { height: "100%", transition: { duration: 0.5 } },
   };

   return (
      <div className="fixed top-0 left-0 w-screen h-[100svh] overflow-hidden z-40 pointer-events-none">
         <motion.div
            variants={container}
            initial="initial"
            exit="exit"
            className="w-full flex h-full"
         >
            {Array.from({ length: 5 }).map((_, index) => (
               <motion.div key={index} className="flex-1 h-full">
                  <motion.div
                     variants={item}
                     className="w-full bg-primary"
                  ></motion.div>
               </motion.div>
            ))}
         </motion.div>
      </div>
   );
}
