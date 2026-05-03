import { motion } from "framer-motion";
import { PROJECT_ANIMATION_DURATION } from "../../_constants/DURATIONS";

type Props = {
   initial?: true;
   className?: string;
};

export default function CardLine({ className = "", initial }: Props) {
   return (
      <motion.div
         initial={{ width: initial ? 0 : "100%" }}
         animate={initial ? { width: "100%" } : undefined}
         exit={{ width: 0 }}
         transition={{ duration: PROJECT_ANIMATION_DURATION }}
         className={`h-px bg-line ${className}`}
      />
   );
}
