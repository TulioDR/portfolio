import React from "react";
import { motion } from "framer-motion";

type Props = {
   text: string;
};

export default function BackComponent({ text }: Props) {
   return (
      <motion.div
         style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
         }}
         className="text-xl sm:text-xl md:text-xl lg:text-2xl w-full h-full flex items-center justify-center uppercase tracking-tighter bg-text text-black font-black"
      >
         {text}
      </motion.div>
   );
}
