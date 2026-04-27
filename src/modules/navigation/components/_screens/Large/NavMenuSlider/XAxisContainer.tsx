import React from "react";
import { motion } from "framer-motion";
import NAV_ITEMS from "@/constants/NAV_ITEMS";

type Props = {
   children: React.ReactNode;
   xAxis: number;
   yAxis: number;
};

export default function XAxisContainer({ children, xAxis, yAxis }: Props) {
   const x = `-${(1 / NAV_ITEMS.length) * xAxis * 100}%`;
   const y = `-${100 * yAxis}%`;
   return (
      <motion.div
         initial={{ x }}
         animate={{ x, y }}
         transition={{ duration: 0.3 }}
         className="absolute top-0 left-0 flex h-full"
      >
         {children}
      </motion.div>
   );
}
