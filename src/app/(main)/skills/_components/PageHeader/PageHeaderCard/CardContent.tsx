import { motion } from "framer-motion";

type Props = {};

export default function CardContent({}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.3 }}
         className="absolute z-20 top-0 left-0 w-full h-full bg-linear-to-tl from-accent to-light-accent"
      />
   );
}
