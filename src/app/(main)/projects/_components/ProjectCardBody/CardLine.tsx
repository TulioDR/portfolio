import { EXIT_EASE, ENTER_EASE } from "@/constants/TRANSITIONS";
import { motion } from "framer-motion";

type Props = {
   initial?: true;
   className?: string;
   whiteLine?: true;
};

export default function CardLine({
   className = "",
   initial,
   whiteLine,
}: Props) {
   return (
      <motion.div
         initial={{ width: initial ? 0 : "100%" }}
         animate={
            initial ? { width: "100%", transition: ENTER_EASE } : undefined
         }
         exit={{ width: 0, transition: EXIT_EASE }}
         className={`h-px ${className} ${whiteLine ? "bg-white" : "bg-line"}`}
      />
   );
}
