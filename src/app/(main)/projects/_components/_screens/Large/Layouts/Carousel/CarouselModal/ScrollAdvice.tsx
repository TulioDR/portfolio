import AnimatedText from "@/components/AnimatedText";
import React from "react";
import { motion } from "framer-motion";
import MouseIcon from "@/components/MouseIcon";

type Props = {};

export default function ScrollAdvice({}: Props) {
   return (
      <motion.div
         exit={{ opacity: 0, transition: { duration: 0 } }}
         className="absolute bottom-8 right-32 text-white flex items-center gap-4 h-16"
      >
         <AnimatedText text="Scroll to close" initial className="text-sm" />
         <MouseIcon />
      </motion.div>
   );
}
