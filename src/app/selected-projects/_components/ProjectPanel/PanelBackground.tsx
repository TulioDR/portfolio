import { motion } from "framer-motion";

type Props = {
   isHovered: boolean;
};

export default function PanelBackground({ isHovered }: Props) {
   return (
      <>
         <motion.div
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 z-10 pointer-events-none"
         />

         <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-linear-to-t from-black to-black/30 z-10 pointer-events-none"
         />
      </>
   );
}
