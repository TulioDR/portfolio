"use client";

import { motion } from "framer-motion";

type Props = {};

export default function InterceptorPage({}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
         className="fixed top-0 left-0 w-screen h-svh z-40  flex items-center justify-center bg-black/50"
      >
         Interceptor
      </motion.div>
   );
}
