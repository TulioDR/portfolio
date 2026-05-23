"use client";

import { EXIT_DURATION } from "@/constants/TRANSITIONS";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
   return (
      <motion.div
         exit={{ opacity: 0 }}
         transition={{ duration: EXIT_DURATION }}
      >
         {children}
      </motion.div>
   );
}
