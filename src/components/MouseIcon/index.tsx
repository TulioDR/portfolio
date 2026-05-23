import { motion } from "framer-motion";
import { ENTER_EASE } from "@/constants/TRANSITIONS";

interface Props {}
export default function MouseIcon({}: Props) {
   return (
      <div className="overflow-hidden w-min">
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={ENTER_EASE}
            className="w-7 h-12 pt-3 rounded-xl flex flex-col items-center border-2 border-gray-200"
         >
            <div className="w-1 h-4 rounded-full animate-bounce bg-gray-200" />
         </motion.div>
      </div>
   );
}
