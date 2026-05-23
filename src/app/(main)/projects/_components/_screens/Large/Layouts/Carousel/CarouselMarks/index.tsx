type Props = {};

import { PROJECT_ANIMATION_DURATION } from "@/app/(main)/projects/_constants/DURATIONS";
import { motion } from "framer-motion";

export default function CarouselMarks({}: Props) {
   return (
      <div className="fixed inset-0 flex flex-col justify-between pointer-events-none">
         <div className="h-[25vh] w-full flex items-end justify-center">
            <div className="h-6 w-px flex items-start">
               <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  exit={{ height: "0%" }}
                  transition={{ duration: PROJECT_ANIMATION_DURATION }}
                  className="w-full bg-line"
               />
            </div>
         </div>
         <div className="h-[25vh] w-full flex items-start justify-center">
            <div className="h-6 w-px flex items-end">
               <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  exit={{ height: "0%" }}
                  transition={{ duration: PROJECT_ANIMATION_DURATION }}
                  className="w-full bg-line"
               />
            </div>
         </div>
      </div>
   );
}
