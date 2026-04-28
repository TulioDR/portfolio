import { motion } from "framer-motion";

type Props = {};

export default function ScanLine({}: Props) {
   return (
      <motion.div
         initial={{ top: "-10%" }}
         animate={{ top: "110%" }}
         transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
         className="absolute left-0 right-0 h-0.5 bg-white/5 z-0"
      />
   );
}
