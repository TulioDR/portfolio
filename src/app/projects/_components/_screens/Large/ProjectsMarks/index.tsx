type Props = {};

import { motion } from "framer-motion";

export default function ProjectsMarks({}: Props) {
   return (
      <div className="fixed inset-0 flex flex-col justify-between pointer-events-none">
         <div className="h-[25vh] w-full flex items-end justify-center">
            <div className="h-6 w-px flex items-start">
               <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  exit={{ height: "0%" }}
                  transition={{ duration: 0.1 }}
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
                  transition={{ duration: 0.1 }}
                  className="w-full bg-line"
               />
            </div>
         </div>
      </div>
   );
}
