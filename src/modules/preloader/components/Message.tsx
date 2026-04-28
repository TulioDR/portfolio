import { AnimatePresence, motion } from "framer-motion";
type Props = {
   message: string;
};

export default function Message({ message }: Props) {
   return (
      <motion.div
         animate={{ opacity: [0.3, 1, 0.3] }}
         transition={{ repeat: Infinity, duration: 2 }}
         className="flex items-center gap-5 w-full"
      >
         <div className="w-1.5 h-1.5 rounded-full bg-white" />
         <AnimatePresence initial={false} mode="wait">
            <div key={message} className="overflow-hidden flex-1 block">
               <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.1 }}
                  className="text-xs tracking-[0.7em] uppercase block"
               >
                  {message}
               </motion.div>
            </div>
         </AnimatePresence>
      </motion.div>
   );
}
