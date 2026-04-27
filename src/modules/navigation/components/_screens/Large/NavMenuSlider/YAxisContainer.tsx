import React from "react";
import { motion } from "framer-motion";
import projects from "@/data/projects";

type Props = {
   children: React.ReactNode;
   yAxis: number;
};

export default function YAxisContainer({ children, yAxis }: Props) {
   const y = `-${(1 / projects.length) * 100 * yAxis}%`;
   return (
      <motion.div
         initial={{ y }}
         animate={{ y }}
         transition={{ duration: 0.3 }}
         className="absolute top-full left-0 w-full flex flex-col"
      >
         {children}
      </motion.div>
   );
}
